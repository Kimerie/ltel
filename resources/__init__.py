def load_resources(app):
    # import all our Resources to get them registered
    import home
    import facebook
    import fblogin

    home.load_resources(app)
    fblogin.load_resources(app)

