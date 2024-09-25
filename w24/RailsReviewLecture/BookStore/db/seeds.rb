# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Seeding data.."
puts "Creating Authors"
10.times do
    Author.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name
    )
end
puts "Authors created"
puts "Creating Books"

15.times do
    Book.create(
        author: Author.all.sample,
        title: Faker::Book.title,
        genre: Faker::Book.genre,
        publisher: Faker::Book.publisher,
        page_count: Faker::Number.between(from: 120, to:500)
    )
end
puts "Books created"

puts "Seeding finished!"