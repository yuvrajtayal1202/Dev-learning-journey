class Animals:
    pass
class Pets(Animals):
    pass
class Dog(Pets):
    @staticmethod
    def bark():
        print('bow bow')

a = Dog()
a.bark()