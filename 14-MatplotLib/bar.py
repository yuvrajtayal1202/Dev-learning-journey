import matplotlib.pyplot as plt

product = ['A', 'B', 'C', 'D']
sales = [1000, 1200, 800, 1300]

plt.bar(product, sales, color='red' ,label= 'Sales 2025')
plt.xlabel('Product')
plt.ylabel('Sales') 
plt.legend()
plt.show()