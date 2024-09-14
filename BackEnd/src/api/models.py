# src/api/models.py
# This file defines the database models for the application.
# Add or modify classes here to create new database tables or update existing ones.
# Remember to include the necessary fields and constraints (e.g., unique, nullable) for each model.

# Acest fișier definește modelele bazei de date pentru aplicație.
# Adăugați sau modificați clasele aici pentru a crea noi tabele în baza de date sau pentru a actualiza cele existente.
# Nu uitați să includeți câmpurile și constrângerile necesare (de exemplu, unique, nullable) pentru fiecare model.



from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    registered_on = db.Column(db.DateTime, nullable=False)
