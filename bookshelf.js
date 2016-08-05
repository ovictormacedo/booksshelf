/*---------------------------------------------------------------------------
Author: Víctor M. Alexandrino - Viçosa, Mg, Brazil - 05/08/2015
____________________A simple bookshelf module__________________
It Wasn't necessary a specific documentation, cause it's a simple implementation,
and the own signature of methods are enough to describe their functions.

In case of some doubt or sugestion, contact me: ovictormacedo@gmail.com
-----------------------------------------------------------------------------*/
var book = (function(){
	//A class that defines a book
	//These variables are private
	
	function book(title,author,isbn){
		this.getTitle = function(){
			return title;
		};		
		this.getAuthor = function(){
			return author;
		};		
		this.getISBN = function(){
			return isbn;
		};		
	}
	
	return book;
}());
var bookshelf = (function(){
	//A class that defines a a book shelf
	//These variables are private, except "books", cause in this context wasn't required
	
	function bookshelf(limit){
		this.getLimitOfBooks = function(){
			return limit;
		};
		this.books = new Array();
	}
	
	return bookshelf;
}());

bookshelf.prototype.getNumberOfBooksOnTheShelf = function(){
	return this.books.length;
};
bookshelf.prototype.getNumberOfBooksCanBeAdded = function(){
	return this.getLimitOfBooks()-this.books.length;
};
bookshelf.prototype.getListOfBooksOnTheShelf = function(){
	//Returns an array of objects, book objects
	if (this.books.length == 0)
		throw "Shelf is empty";
	else{
		var list = new Array();
		for (i = 0; i < this.books.length; i++){
			list[i] = new book(this.books[i].getTitle(),this.books[i].getAuthor(),this.books[i].getISBN());
		}
		return list;
	}
};
bookshelf.prototype.addBook = function(title, author, isbn){
	if (this.getLimitOfBooks()-this.books.length == 0) //Number of books can be added
		throw "Shelf is full";
	else{
		this.books[this.books.length] = new book(title,author,isbn);
	}
};
bookshelf.prototype.addMultipleBook = function(books_insert){		
	//Number of books can be added
	if (this.getLimitOfBooks()-this.books.length == 0)
		throw "Shelf is full";
	else
		if (books_insert.length > this.getLimitOfBooks()-this.books.length)
			throw "There isn't space enough on the shelf";
	else{
		//Add books
		for (i = 0; i < books_insert.length; i++){
			this.books[this.books.length] = books_insert[i];
		}
	}
};
bookshelf.prototype.removeBookByISBN = function(isbn){
	//Return true if the book was removed
	//Return false if the book was not removed cause wasn't found
	for (i = 0; i < this.books.length; i++){
		if (this.books[i].getISBN() == isbn){
			this.books.splice(i,1);
			return true;
		}
	}
	return false;
};
bookshelf.prototype.removeBookByTitle = function(title){
	//Return true if the book was removed
	//Return false if the book was not removed cause wasn't found
	for (i = 0; i < this.books.length; i++){
		if (this.books[i].getTitle() == title){
			this.books.splice(i,1);
			return true;
		}
	}
	return false;
};
bookshelf.prototype.removeBookByAuthor = function(author){
	//Return true if the book was removed
	//Return false if the book was not removed cause wasn't found
	for (i = 0; i < this.books.length; i++){
		if (this.books[i].getAuthor() == author){
			this.books.splice(i,1);
			return true;
		}
	}
	return false;
};
bookshelf.prototype.searchBookByISBN = function(isbn){
	//This search returns a book object found 
	//(works even if there is more than one book, in that case return an array of books)
	
	var book_aux = new Array(); 
	
	//Search
	var count_found_books = 0;
	for (i = 0; i < this.books.length; i++)
		if (this.books[i].getISBN() == isbn){
			book_aux[count_found_books] = new book(this.books[i].getTitle(),this.books[i].getAuthor(),this.books[i].getISBN());
			count_found_books++;
		}
	
	//If the search doesn't found any book	
	if (count_found_books == 0)	
		return false;
	
	return book_aux;
};
bookshelf.prototype.searchBookByAuthor = function(author){
	//This search returns a book object found 
	//(works even if there is more than one book, in that case return an array of books)
	
	var book_aux = new Array(); 
	
	//Search
	var count_found_books = 0;
	for (i = 0; i < this.books.length; i++)
		if (this.books[i].getAuthor() == author){
			book_aux[count_found_books] = new book(this.books[i].getTitle(),this.books[i].getAuthor(),this.books[i].getISBN());
			count_found_books++;
		}
	
	//If the search doesn't found any book	
	if (count_found_books == 0)	
		return false;
	
	return book_aux;
};
bookshelf.prototype.searchBookByTitle = function(title){
	//This search returns a book object found 
	//(works even if there is more than one book, in that case return an array of books)
	
	var book_aux = new Array(); 
	
	//Search
	var count_found_books = 0;
	for (i = 0; i < this.books.length; i++)
		if (this.books[i].getTitle() == title){
			book_aux[count_found_books] = new book(this.books[i].getTitle(),this.books[i].getAuthor(),this.books[i].getISBN());
			count_found_books++;
		}
	
	//If the search doesn't found any book
	if (count_found_books == 0)	
		return false;
	
	return book_aux;
};