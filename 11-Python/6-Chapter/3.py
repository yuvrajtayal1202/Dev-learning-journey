
p1 = "Make a lot of money"
p2 = "buy now"
p3 = "subscribe this"
p4 = "click this"

comment = input("Enter Your comment:  ")

if(p1 in comment or p2 in comment or p3 in comment or p4 in comment ):
    print("Spam")