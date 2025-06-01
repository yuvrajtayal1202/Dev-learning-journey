import matplotlib.pyplot as plt

x = ['North', 'South', 'East', 'West']
y = [3000, 2000, 1500, 100]

fig, ax = plt.subplots(1,2, figsize = (10,5))

ax[0].plot(x,y)
ax[0].set_title('Line Plot')

ax[1].bar(x,y)
ax[1].set_title('Bar Plot')



plt.show()
