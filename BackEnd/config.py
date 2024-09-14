# config.py
# This file contains the configuration settings for the Flask application.
# Modify the configuration values here to change the behavior of the application, such as the database URI.

# Acest fișier conține setările de configurare pentru aplicația Flask.
# Modificați valorile de configurare de aici pentru a schimba comportamentul aplicației, cum ar fi URI-ul bazei de date.

# config.py
import os
class Config:
    # Setările de bază
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL') or 'sqlite:///emissions.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY') or 'super_secret_key'

    # Variabilele pentru API
    COPERNICUS_API_KEY = os.getenv('COPERNICUS_API_KEY')
    CLIENT_ID = os.getenv('CLIENT_ID')
    CLIENT_SECRET = os.getenv('CLIENT_SECRET')

