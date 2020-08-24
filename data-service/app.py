import os

from flask import Flask, Response
from flask_sqlalchemy import SQLAlchemy

from utils.RandomDealData import RandomDealData


db_host = os.environ['DB_HOST']
db_name = os.environ['DB_NAME']
db_user = os.environ['DB_USER']
db_password = os.environ['DB_PASSWORD']
conn_url = f'mysql+pymysql://{db_user}:{db_password}@{db_host}/{db_name}'


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = conn_url
db = SQLAlchemy(app)


class Deal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    counter_party = db.Column(db.String(100))


db.create_all()
db.session.commit()


@app.route('/')
def hello_world():
    return 'Data service'


@app.route('/stream')
def stream():
    rdd = RandomDealData()
    instrList = rdd.create_instrument_list()
    def eventStream():
        while True:
            #nonlocal instrList
            yield rdd.create_random_data(instrList) + "\n"
    return Response(eventStream(), status=200, mimetype="text/event-stream")


@app.route('/sse-stream')
def sse_stream():
    theHeaders = {"X-Accel-Buffering": "False"}
    rdd = RandomDealData()
    instrList = rdd.create_instrument_list()
    def eventStream():
        while True:
            #nonlocal instrList
            yield 'data:{}\n\n'.format(rdd.create_random_data(instrList))
    resp = Response(eventStream(), status=200, mimetype="text/event-stream")
    resp.headers["X-Accel-Buffering"] = "False"
    return resp
