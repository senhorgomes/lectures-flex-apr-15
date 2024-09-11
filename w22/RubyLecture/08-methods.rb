# Methods are what we call functions in Javascript

def hello_world

    puts "Hello world!!!"
end

# We can't reference methods in Ruby like we do in Javascript
# hello_world

def add_two_numbers number1, number2
    # return number1 + number2
    number1 + number2
end

puts add_two_numbers(10,20)