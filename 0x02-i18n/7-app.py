#!/usr/bin/env python3
"""Flask App"""
from flask import (
    Flask,
    render_template,
    request,
    g
)
from flask_babel import Babel
from typing import (
    Union,
    Dict
)


class Config(object):
    """Configuring Babel"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)
