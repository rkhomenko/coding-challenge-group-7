import time
import numpy
import random
from datetime import datetime, timedelta
from utils.Instrument import Instrument
from utils.Deal import Deal

instruments = ("Astronomica", "Borealis", "Celestial", "Deuteronic", "Eclipse",
    "Floral", "Galactia", "Heliosphere", "Interstella", "Jupiter", "Koronis", "Lunatic")
counterparties = ("Lewis", "Selvyn", "Richard", "Lina", "John", "Nidia")
NUMBER_OF_RANDOM_DEALS = 2000
TIME_PERIOD_MILLIS = 3600000
EPOCH = datetime.now() - timedelta(days = 1)


class RandomDealData:
    @staticmethod
    def create_instrument_list():
        rand_values = [
            -1372613350,
            -2144945675,
            -842721352,
            -2020458394,
            -249489881,
            2107200308,
            -1736379976,
            603077730,
            -252413447,
            412083453,
            1129832375,
            -2109961742]
        instrumentId = 1000
        instrumentList = []
        for i, instrumentName in enumerate(instruments):
            hashedValue = rand_values[i]
            isNegative = hashedValue < 0
            basePrice = (abs(hashedValue) % 10000) + 90.0
            drift = ((abs(hashedValue) % 5) * basePrice) / 1000.0
            drift = 0 - drift if isNegative else drift
            variance = (abs(hashedValue) % 1000) / 100.0
            variance = 0 - variance if isNegative else variance
            instrument = Instrument(instrumentId, instrumentName, basePrice, drift, variance)
            instrumentList.append(instrument)
            instrumentId += 1
        return instrumentList

    @staticmethod
    def create_random_data(instrument_list) -> Deal:
        time.sleep(random.uniform(1,30)/100)
        instrument = instrument_list[numpy.random.randint(0, len(instrument_list))]
        cpty = counterparties[numpy.random.randint(0,len(counterparties))]
        type = 'B' if numpy.random.choice([True, False]) else 'S'
        quantity = int( numpy.power(1001, numpy.random.random()))

        deal = Deal(instrument=instrument.name,
                    counter_party=cpty,
                    price=instrument.calculate_next_price(type),
                    type=type,
                    quantity=quantity,
                    time=datetime.utcnow())

        return deal
