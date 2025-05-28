f = open('poem.txt')
c = f.read()

if('twinkle' in c ):
    print("Yes!!, Twinkle is in The poem")
else:
    print("No!!, Twinkle is not in The poem")
    

f.close()