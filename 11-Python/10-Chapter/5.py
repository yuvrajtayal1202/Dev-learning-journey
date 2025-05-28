import random

class Train:
    def __init__(self, trainNo):
        self.trainNo = trainNo
    def bookTicket(self, train, fro, to):
        print(f'Ticket is Booked in Train {train} from {fro} to {to}')
    def getStatus(self):
        print(f' Train with no. {self.trainNo} is running succesfully!!....')
    def getFare(self, fro, to):
        print(f'Ticket fare in Train {self.trainNo} from {fro} to {to} is {random.randomint(500, 1000)}')
t = Train()