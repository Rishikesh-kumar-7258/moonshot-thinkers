from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
db = SQLAlchemy(app)


class Books(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    img = db.Column(db.String(200), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    Semester = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(200))
    desc = db.Column(db.String(500))


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/semester/<int:num>")
def semester(num):
    return render_template("semester.html", num=num)

@app.route("/hobby")
def hobby():
    return render_template("hobby.html")


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
