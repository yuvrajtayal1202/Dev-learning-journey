import random

computer = random.choice([-1, 0, 1])
youstr = input("Enter Your Choice: ")
youDict = {"s": 1, "w": -1, "g" : 0}
you = youDict[youstr]
reverseDict = {1: "Snake", -1: "Water", 0: "Gun"}
print(f'You chose {reverseDict[you]}\nComputer chose {reverseDict[computer]}')
 
if(computer == -1 and you ==1):
    print('You Win!')
elif(computer == -1 and you ==0):
    print('You Lose!')
elif(computer == -1 and you ==-1):
    print('Draw!')
    
elif(computer == 1 and you ==-1):
    print('You Lose!')
elif(computer == 1 and you ==0):
    print('You Win!')
elif(computer == 1 and you ==1):
    print('Draw!')
    
elif(computer == 0 and you == -1):
    print('You Win!')
elif(computer == 0 and you == 1):
    print('You Lose!')
elif(computer == 0 and you == 0):
    print('Draw!')
else:
    print('something weent wrong')