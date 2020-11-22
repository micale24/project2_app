# import necessary libraries
from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/graph")
def graph():

    return render_template("graph.html")

@app.route("/map")
def map():
    return render_template("map.html")


if __name__ == "__main__":
    app.run()
