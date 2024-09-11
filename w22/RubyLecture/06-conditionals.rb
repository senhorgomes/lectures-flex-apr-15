# Conditionals

# ==

# puts 5000 == 5000

variable = true


=begin

if variable
    puts "This is truthy"
elsif !variable
    puts "This is falsey"
end

=end

# Short hand -> && 

number = 1
# if number > 3
#     puts "This number is greater than 3"
# end

puts "This number is greater than 3" if number > 3

snowing = true

puts "It is a beautiful sunny day!" unless snowing