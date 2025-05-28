marks1 = int(input("ENter Marks of First Subject: "))
marks2 = int(input("ENter Marks of Second Subject: "))
marks3 = int(input("ENter Marks of Third Subject: "))

percentage = ((marks1 + marks2 + marks3)/300) * 100

print(percentage)

if (percentage >= 40 and marks1 >= 33 and marks2 >= 33 and marks3 >= 33):
    print("passed")
    
else:
    print("No you failed")
    