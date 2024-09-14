# app.py
# This file is the main entry point for the application.
# It creates the Flask application, initializes extensions, and registers routes.
# Modify the `create_app` function to change app configurations or add new components.

# Acest fișier este punctul principal de pornire pentru aplicație.
# Creează aplicația Flask, inițializează extensiile și înregistrează rutele.
# Modificați funcția `create_app` pentru a schimba configurațiile aplicației sau pentru a adăuga noi componente.

# app.py
from dotenv import load_dotenv
import os

# Specifică calea absolută către fișierul .env
dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)


from flask import Flask
from flask_migrate import Migrate
from config import Config
from src.api.models import db  # Import db directly from models
from src.api.routes import routes  # Import the blueprint

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)  # Initialize db with the app
    Migrate(app, db)

    # Register blueprints
    app.register_blueprint(routes)

    print("App created successfully")  # Debugging print
    return app

if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        print("Creating database tables...")  # Debugging print
        db.create_all()  # Create tables
    print("Running app...")  # Debugging print
    app.run(debug=True, use_reloader=False)

