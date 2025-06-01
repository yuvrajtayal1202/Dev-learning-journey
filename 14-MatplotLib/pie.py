import matplotlib.pyplot as plt

regions = ['North', 'South', 'East', 'West']
revenue = [3000, 2000, 1500, 100]

plt.pie(revenue, labels=regions, autopct='%1.1f%%', colors=['gold', 'skyblue', 'red', 'silver'])

plt.show()