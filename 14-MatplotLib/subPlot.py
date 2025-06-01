import matplotlib.pyplot as plt

x = ['North', 'South', 'East', 'West']
y = [3000, 2000, 1500, 100]

plt.subplot(1,2,1)
plt.plot(x,y)


plt.subplot(1,2,2)
plt.bar(x,y)

plt.show()