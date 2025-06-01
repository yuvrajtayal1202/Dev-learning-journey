import matplotlib.pyplot as plt

x = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
y = [43, 23, 53, 34, 76, 34, 43]

plt.plot(x, y, color = 'red', linestyle = '--', linewidth = 2, marker = 'o', label = '2025 sales data')

plt.title('Bakery Sales!!')

plt.xlabel('Day of The Week')
plt.ylabel('Sales Per Day')

plt.legend()

plt.grid()

plt.xlim(0, 6)
plt.ylim(0, 100)
# plt.xlim(0, 70)

plt.show()