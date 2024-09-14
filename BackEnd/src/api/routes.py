# src/api/routes.py
# This file defines the routes (endpoints) for the application.
# Add new routes or modify existing ones as needed.
# Each route is linked to a specific function that defines the logic for handling requests.

# Acest fișier definește rutele (endpoint-urile) pentru aplicație.
# Adăugați rute noi sau modificați-le pe cele existente după necesitate.
# Fiecare rută este legată de o funcție specifică ce definește logica pentru gestionarea cererilor.



from flask import Blueprint, jsonify
from datetime import datetime
from .models import db, User  # Import db and User from models

routes = Blueprint('routes', __name__)

print("Routes module imported successfully")  # Debugging print

@routes.route('/add_sample_data')
def add_sample_data():
    print("Adding sample data...")  # Debugging print

    # Check if users already exist
    if not User.query.filter_by(email='john@example.com').first():
        user1 = User(username='JohnDoe', email='john@example.com', registered_on=datetime.utcnow())
        db.session.add(user1)
    
    if not User.query.filter_by(email='jane@example.com').first():
        user2 = User(username='JaneDoe', email='jane@example.com', registered_on=datetime.utcnow())
        db.session.add(user2)
    
    db.session.commit()

    return "Sample data added!"

@routes.route('/users')
def get_users():
    print("Fetching users...")  # Debugging print
    users = User.query.all()
    return jsonify([
        {"username": user.username, "email": user.email, "registered_on": user.registered_on}
        for user in users
    ])

@routes.route('/')
def home():
    return "Hello, Flask is running!"
