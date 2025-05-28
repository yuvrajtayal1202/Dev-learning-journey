word = "Hello"

with open('file.txt', 'r') as f:
    content = f.read()
newContent = content.replace(word, '##########')
with open('file.txt', 'w') as f:
    content = f.write(newContent)