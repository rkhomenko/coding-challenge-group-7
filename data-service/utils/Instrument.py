import numpy

class Instrument:

    def __init__(self, id, name, price, drift, variance):
        self.__id = id
        self.__name = name
        self.__price = price
        self.__startingPrice = price
        self.__drift = drift
        self.__variance = variance

    @property
    def name(self):
        return self.__name

    @property
    def id(self):
        return self.__id

    def calculate_next_price(self, direction):
        new_price_starter = self.__price + numpy.random.normal(0,1)*self.__variance + self.__drift
        new_price = new_price_starter if (new_price_starter > 0) else 0.0
        if self.__price < self.__startingPrice*0.4:
            self.__drift =( -0.7 * self.__drift )
        self.__price = new_price*1.01 if direction == 'B' else new_price * 0.99
        return self.__price
