list1 = [1,2,3,4]
list2 = [5,6,7,8]

result = [ x + y for x,y in zip(list1, list2)]
print(result)