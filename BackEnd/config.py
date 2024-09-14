# config.py
# This file contains the configuration settings for the Flask application.
# Modify the configuration values here to change the behavior of the application, such as the database URI.

# Acest fișier conține setările de configurare pentru aplicația Flask.
# Modificați valorile de configurare de aici pentru a schimba comportamentul aplicației, cum ar fi URI-ul bazei de date.


import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///emissions.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'super_secret_key'
