class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.__author = author
        self.pages = pages
        
    def isThick(self):
        if(self.pages > 200):
            print(True)
        
    def read(self):
        print(f"Reading: {self.title}... and author is {self.__author}")

# Test it!
my_book = Book("Harry Potter", "JK Rowling", 300)
my_book.read() 
my_book.isThick() 