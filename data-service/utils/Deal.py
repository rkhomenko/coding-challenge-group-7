from utils.Db import db

import datetime


class Deal(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    instrument = db.Column(db.String(100))
    counter_party = db.Column(db.String(100))
    price = db.Column(db.Integer)
    type = db.Column(db.String(100))
    quantity = db.Column(db.Integer)
    time = db.Column(db.DateTime, default=datetime.datetime.utcnow())

    @property
    def serialize(self):
        return {
            'instrumentName': self.instrument,
            'cpty': self.counter_party,
            'price': self.price,
            'type': self.type,
            'quantity': self.quantity,
            'time': self.time.isoformat()
        }
