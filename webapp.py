from flask import Flask
from flask_sslify import SSLify
from resources import load_resources


app = Flask(__name__,
            static_folder='static',
            static_url_path='',
            template_folder='templates')

sslify = SSLify(app)
app.config.from_object('conf.settings')

app.secret_key = app.config['APP_SECRET_KEY']

load_resources(app)

if '__main__' == __name__:
    app.run(
        host=app.config['HOST'],
        port=app.config['PORT'],
        debug=app.config['DEBUG']
    )
