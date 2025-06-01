import matplotlib.pyplot as plt

x = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
y = [43, 23, 53, 34, 76, 34, 43]

plt.plot(x, y)

plt.title('Bakery Sales!!')

plt.xlabel('Day of The Week')
plt.ylabel('Sales Per Day')

plt.show()