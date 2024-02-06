#!/usr/bin/env python3
"""Flask App"""
from flask import (
    Flask,
    render_template,
    request,
    g
)
from flask_babel import Babel


class Config(object):
    """Configuring Babel"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


@app.route('/', strict_slashes=False)
def index() -> str:
    """Handling route"""
    return render_template('6-index.html')


if __name__ == "__main__":
    app.run(port="5000", host="0.0.0.0", debug=True)