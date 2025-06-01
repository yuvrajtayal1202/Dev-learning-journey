import matplotlib.pyplot as plt
scores = [45,67,89,56,78,88,92,60,74,81,59,66,75,82,90,85,70,73,68,77]
plt.hist (scores, bins=5, color='purple', edgecolor='black')
plt.xlabel('Score Range')
plt.ylabel('Number of students')
plt.title('Score Distribution of Students')
plt.show()