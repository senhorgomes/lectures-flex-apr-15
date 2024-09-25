class BookController < ApplicationController
  def index
    # Select * from books;
    # Assigning to a variable called books
    @books = Book.all
  end

  def show
  end
end
