# from flask import request, abort, json, Response, render_template
from flask import render_template
# import jsonify
# import flask


def load_resources(app):
    """
    Instead of bothering with importing the app object from web app,
    we pass it to this function and
    define resources within this function.
    """

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/top")
    def top():
        return render_template("layouts/f5.html")

    @app.route("/events")
    def test_caster_events():
        return render_template(
            "events.html",
            casters_host='https://prod-spellchain.herokuapp.com')


    @app.route("/base")
    def base():
        return app.send_static_file('base.html')
