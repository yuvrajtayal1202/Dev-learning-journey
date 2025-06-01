import matplotlib.pyplot as plt

x = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
y = [43, 23, 53, 34, 76, 34, 43]

plt.plot(x, y, color = 'red', linestyle = '--', linewidth = 2, marker = 'o', label = '2025 sales data')

plt.title('Bakery Sales!!')

plt.xlabel('Day of The Week')
plt.ylabel('Sales Per Day')

plt.legend()

plt.grid()

plt.savefig('plot.png', dpi = 300, bbox_inches= 'tight')
plt.show()