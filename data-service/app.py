import os
import json

from flask import Flask, Response
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

from utils.RandomDealData import RandomDealData


def create_app():
    db_host = os.environ['DB_HOST']
    db_name = os.environ['DB_NAME']
    db_user = os.environ['DB_USER']
    db_password = os.environ['DB_PASSWORD']
    conn_url = f'mysql+pymysql://{db_user}:{db_password}@{db_host}/{db_name}'

    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = conn_url

    from utils.Db import db

    db.init_app(app)
    migrate = Migrate(app, db)

    with app.app_context():
        db.create_all()
        db.session.commit()

    manager = Manager(app)
    manager.add_command('db', MigrateCommand)

    @app.route('/')
    def hello_world():
        return 'Data service'

    @app.route('/stream')
    def stream():
        rdd = RandomDealData()
        instrList = rdd.create_instrument_list()

        def eventStream():
            with app.app_context():
                while True:
                    # nonlocal instrList
                    deal = rdd.create_random_data(instrList)
                    db.session.add(deal)
                    db.session.commit()
                    yield json.dumps(deal.serialize) + "\n"

        return Response(eventStream(), status=200, mimetype="text/event-stream")

    @app.route('/sse-stream')
    def sse_stream():
        rdd = RandomDealData()
        instrList = rdd.create_instrument_list()

        def eventStream():
            with app.app_context():
                while True:
                    # nonlocal instrList
                    deal = rdd.create_random_data(instrList)
                    db.session.add(deal)
                    db.session.commit()
                    yield 'data:{}\n\n'.format(json.dumps(deal.serialize))

        resp = Response(eventStream(), status=200, mimetype="text/event-stream")
        return resp

    return app
