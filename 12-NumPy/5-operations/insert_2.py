import numpy as np

arr = np.array([[0,1,2],[3,4,5]])
# print(arr)
new_arr = np.insert(arr, 1, [6,7], axis= 1)
print(new_arr)