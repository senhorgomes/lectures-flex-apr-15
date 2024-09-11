names = ["Jordan", "Cameron", "Kirby", "Laurel", "Keegan", "Hollis", "Randi", "Leigh"]

# puts names[7]

# for name in names do

#     puts name

# end

# .each ->forEach

# names.each do | name |
#     puts name
# end
names.each_with_index do | name, index |
    puts "#{index}: #{name}"
end

# For loop

counter = 1

# loop do
#     puts counter
#     counter += 1
#     # There is no ++ in Ruby
#     break if counter > 6
# end

# while counter < 7 do
#     puts counter
#     counter += 1

# end

# (20..30).each do |number|
#     puts number
# end