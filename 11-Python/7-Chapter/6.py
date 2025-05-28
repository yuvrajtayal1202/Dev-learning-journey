n = int(input("Enter the Number: "))
product = 1
for i in range(1, n+1):
    product = i * product
print(f'factorial for {n} is {product}')