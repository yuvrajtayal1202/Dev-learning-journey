class BackAccount:
    totalAccounts = 0
    def __init__(self):
        self.__balance = 0
        BackAccount.totalAccounts += 1
    @property
    def balance(self):
        return self.__balance
    def deposit(self, amount):
        if(amount > 0):
            self.__balance += amount
    def withdraw(self, amount):
        if(amount > 0):
            self.__balance -= amount
    @classmethod
    def get_total_accounts(cls):
        return cls.totalAccounts

b = BackAccount()
print(b.balance)
b.withdraw(500)
print(b.balance)
b.deposit(5000)
print(b.balance)

c = BackAccount()
print(c.balance)
c.withdraw(300)
print(c.balance)
c.deposit(3000)
print(c.balance)

 