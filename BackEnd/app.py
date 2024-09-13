from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask is running!"  # Asigură-te că ai un mesaj aici

if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(debug=True, use_reloader=False)
  # Mesajele ar trebui să fie afișate în terminal


