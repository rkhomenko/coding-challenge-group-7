import os

from flask import Flask, Response
import sqlalchemy as db

from utils.RandomDealData import RandomDealData

app = Flask(__name__)

db_host = os.environ['DB_HOST']
db_name = os.environ['DB_NAME']
db_user = os.environ['DB_USER']
db_password = os.environ['DB_PASSWORD']
conn_url = f'mysql+pymysql://{db_user}:{db_password}@{db_host}/{db_name}'

print('Trying to create engine with link', conn_url)
engine = db.create_engine(conn_url)
print('Engine created')


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
