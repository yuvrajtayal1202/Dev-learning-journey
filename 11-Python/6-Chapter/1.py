num1 = int(input("Enter Number 1: "))
num2 = int(input("Enter Number 2: "))
num3 = int(input("Enter Number 3: "))
num4 = int(input("Enter Number 4: "))

if(num1 > num2 and num1 > num3 and num1>num4):
    print('Greatest number is: ',num1)
if(num2 > num1 and num2 > num3 and num2>num4):
    print('Greatest number is: ',num2)
if(num3 > num2 and num3 > num1 and num3>num4):
    print('Greatest number is: ',num3)
if(num4 > num1 and num4 > num2 and num4>num3):
    print('Greatest number is: ',num4)