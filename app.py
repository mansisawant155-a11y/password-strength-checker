from flask import Flask, render_template, request

from password_checker import check_password
from password_generator import generate_password

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():

    strength = ""
    score = 0
    suggestions = []
    new_password = ""

    if request.method == "POST":

        password = request.form["password"]

        strength, score, suggestions = check_password(password)

        new_password = generate_password()

    return render_template(
        "index.html",
        strength=strength,
        score=score,
        suggestions=suggestions,
        new_password=new_password
    )

if __name__ == "__main__":
    app.run(debug=True)