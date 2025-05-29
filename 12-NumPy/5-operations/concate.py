import numpy as np

arr = np.array([0,1,2])
arr2 = np.array([3,4,5])

print(np.concatenate((arr, arr2), axis=1))
