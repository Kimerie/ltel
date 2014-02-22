from flask import url_for, request, session, redirect, render_template
from flask_oauth import OAuth

## http://ryaneshea.com/facebook-authentication-for-flask-apps

# http://prod-casterdex.herokuapp.com/

def load_resources(app):
    oauth = OAuth()

    facebook = oauth.remote_app('facebook',
        base_url='https://graph.facebook.com/',
        request_token_url=None,
        access_token_url='/oauth/access_token',
        authorize_url='https://www.facebook.com/dialog/oauth',
        consumer_key=app.config['FACEBOOK_APP_ID'],
        consumer_secret=app.config['FACEBOOK_APP_SECRET'],
        request_token_params={'scope': ('email, ')}
    )

    @facebook.tokengetter
    def get_facebook_token():
        return session.get('facebook_token')

    def pop_login_session():
        session.pop('logged_in', None)
        session.pop('facebook_token', None)

    @app.route("/facebook_login/")
    def facebook_login():
        return facebook.authorize(callback=url_for('facebook_authorized',
            next=request.args.get('next'), _external=True))

    @app.route("/facebook_authorized/")
    @facebook.authorized_handler
    def facebook_authorized(resp):
        next_url = request.args.get('next') or url_for('index')
        if resp is None or 'access_token' not in resp:
            return redirect(next_url)

        session['logged_in'] = True
        session['facebook_token'] = (resp['access_token'], '')
        data = facebook.get('/me').data
        if 'id' in data and 'name' in data:
            session['user_id'] = data['id']
            session['user_name'] = data['name']

        return redirect(next_url)

    @app.route("/logout/")
    def logout():
        pop_login_session()
        return redirect(url_for('index'))
