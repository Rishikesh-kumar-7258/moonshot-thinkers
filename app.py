from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

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

class Hobbies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    course_link = db.Column(db.String(200), nullable=False)
    img = db.Column(db.String(200), nullable=False)
    topic = db.Column(db.String(200), nullable=False)
    desc = db.Column(db.String(500))
    rating = db.Column(db.Float)
    duration = db.Column(db.Integer)
    time = db.Column(db.DateTime, default=datetime.utcnow)


class Admins(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/semester/<int:num>")
def semester(num):
    return render_template("semester.html", num=num)

@app.route("/hobby")
def hobby():
    return render_template("hobby.html")

@app.route("/admin", methods=["GET", "POST"])
def adminpage():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        
        user = Admins.query.filter_by(username=username).first()
        print(user.password)
        if (user.password == password) : return redirect("/adminloggedin")
        else : return redirect("/admin", feedback="username of password is wrong")

    return render_template("adminlogin.html")

@app.route("/adminloggedin")
def adminlogged():
    return render_template("adminlogged.html")

def adduser(username, password):
    newuser = Admins()
    newuser.username = username
    newuser.password = password
    db.session.add(newuser)
    db.session.commit()

def deleteall():
    alladmins = Admins.query.all()
    for admin in alladmins:
        db.session.delete(admin)
        db.session.commit()


if __name__ == "__main__":
    adduser("Prince", "Iamawesome")
    # deleteall()
    db.create_all()
    app.run(debug=True)
