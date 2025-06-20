class Library {
    constructor(){
        this.books =[]  // sari Books store krne ke liye
      }
        addBooks(books){(
            this.books.push(...books))
        };
        listallbooks(){
            this.books.forEach(function(book,index){
                console.log(`${index + 1} )${book.name} ${book.author}`);
            })
        }
}

class Book{
    constructor(name,isbn,price,author){
        this.name = name;
        this.isbn =isbn;
        this.price = price;
        this.author =author;
        this.readStatus = false;
    }
    info(){
        console.log(`${this.name}is written by ${this.author}and you have ${this.readStatus ? "read it": "not   readit"} is available at amazon`)
    }
    changeReadStatus(){
        this.readStatus = !this.readStatus;
    }
}
 let jhansiLibrary = new Library();
 let b1 = new Book("Wealth is Life","sbfielbgri34321",120,"Harsh Sharma");
 let b2 = new Book("kinder joy","abhjab",45,"harshpatil");
 let b3 = new Book("Adventure","aknb",1200,"kartik");
 jhansiLibrary.addBooks([b1,b2,b3]);
//  jhansiLibrary.addBook(b2);
//  jhansiLibrary.addBook(b3);