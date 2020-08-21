import os

from flask import Flask
import sqlalchemy as db


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
