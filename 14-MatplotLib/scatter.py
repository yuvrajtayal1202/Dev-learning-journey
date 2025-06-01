import matplotlib.pyplot as plt
plt.scatter([1,2,3,4], [10,20,30,40], color='purple', label='Class A')
plt.scatter([1.2,2.1,3.4,4.3], [9, 6, 9,14], color='red', label='Class B')
plt.xlabel('Score Range')
plt.ylabel('Number of students')
plt.title('Score Distribution of Students')
plt.legend()
plt.grid()
plt.show()