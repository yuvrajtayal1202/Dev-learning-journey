tasks = []

def addTask():
    NoOfTask = int(input('Enter Number of Tasks: ')) + 1
    for i in range(1, NoOfTask):
        task = input(f'Enter Task {i}: ')
        tasks.append(task)
      
def deleteTask(n):
    if 0 <= n < len(tasks):
        tasks.pop(n + 1)
    else:
        print("Invalid task number.")

while True:
    choice = int(input('Enter 1 to Add task\nEnter 2 to Show tasks\nEnter 3 to Delete task\nEnter 4 to Exit\nChoice: '))
    
    if choice == 1:
        addTask()
    elif choice == 2:
        if tasks:
            print("Tasks:", tasks)
        else:
            print('No tasks available. Please add a task.')
    elif choice == 3:
        td = int(input("Enter Task Number to delete : "))
        deleteTask(td)
    elif choice == 4:
        break
    else:
        print("Invalid choice. Please try again.")