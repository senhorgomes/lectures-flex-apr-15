# class Rectangle {

# }

# const newRectangle = new Rectangle

class Pet 

    # set an attribute reader, writer
    # set them to both
    # initialize all key values
    attr_reader :name, :type
    # attr_writer :age
    # attr_accessor = to reading the value and writing it
    attr_writer :age

    def initialize(name, type, age)
        @name = name
        @type = type
        @age = age
    end


    def happy_birthday
        puts @age
    end

    private
    # Any methods under the private keyword can only be accessed from within the class

    def hello_world
        puts "Hello world!"
    end

end

new_dog = Pet.new("Air Bud", "Dog", 3)

puts new_dog.name
puts new_dog.type
puts new_dog.age
new_dog.happy_birthday
# puts new_dog.age


class Employee 
    attr_accessor :name
    # attr_writer :age
    # attr_accessor = to reading the value and writing it
    attr_writer :email, :role, :id_number, :phone_number

    def initialize(name, email, role)
        @name = name
        @email = email
        @role = role
    end

    def send_email(topic)
        # Method that send an email, @email
    end

end