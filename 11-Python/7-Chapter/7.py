n = int(input("Enter the Number: "))
for i in range(1, n+1):
    print(' '*(n-i), end = "")
    print('*'*(2*i -1), end = '')
    print('  ')
