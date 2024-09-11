# Objects = Hashes


=begin
JS key-value pairs:
keys can be symbols or strings
{
    key: "value"
}
=end

student = {
    "first_name" => "Bryan",
    "last_name" => "Gomes"
}
# :first_name

symbol_student = {
    :first_name => "Alice",
    :last_name => "Wonderland"
}

new_student = {
    first_name: "Alice",
    last_name: "Wonderland"
}

new_student[:subject] = "Web Dev"

puts new_student