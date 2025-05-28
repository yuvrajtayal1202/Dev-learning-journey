def great(num1, num2, num3):
     if(num1>num2 and num1>num3):
         return num1
     elif(num2>num3 and num2>num1):
         return num2
     elif(num3>num1 and num3>num2):
         return num3
    
print(great(4,232,543))