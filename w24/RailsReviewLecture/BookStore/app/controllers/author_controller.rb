class AuthorController < ApplicationController
  def index
    # display some type of information
    # Display all Authors
    # Fetching the information from the database
    # The table name is Author
    @authors = Author.all
    # This will send a variable that contains all the Authors from the database to the index.html.erb page
    @books = Book.all
  end

  def show
    # Return a single item by searching its id
    @author = Author.find(params[:id])

  end
  # Other methods
end
