try:
    with (
        open('1.txt') as f1,
        open('2.txt') as f2
    ):    
     content1 = f1.read()
     content2 = f2.read()
     print("Contents of 1.txt:", content1)
     print("Contents of 2.txt:", content2)
except FileNotFoundError as e:
    print(e," ,\nThankyou") 
    