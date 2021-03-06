#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

water = [7, 14, 21]
index = 0
fire = []

while index < water.length
  fire << water[index] * 3
  index += 1
end

p fire

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

words = ["hello", "goodbye"]
caps = []

words.each do |word|
  caps << word.upcase
end

p caps

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

people = [{ name: "Alice", age: 27 }, { name: "Blaine", age: 16 }]
names = []

people.each do |person|
  names << person[:name]
end
p names

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

nums = [1, 2, 3]
seven_up = []

nums.each do |num|
  seven_up << num + 7
end

p seven_up

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

aliens = ["hello", "goodbye"]
alien_lengths = []

aliens.each do |alien|
  alien_lengths << alien.length
end

p alien_lengths

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

watermelons = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
ages = []

watermelons.each do |watermelon|
  ages << watermelon[:age]
end

p ages

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

circles = [1,2,3]
halves = []

circles.each do |circle|
  halves << circle/2.0
end

p halves

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

greetings = ["hello", "goodbye"]
first_letters = []

greetings.each do |greeting|
  first_letters << greeting[0]
end

p first_letters

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

friends = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
double_ages = []

friends.each do |friend|
  double_ages << friend[:age] * 2
end

p double_ages

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

ints = [1, 2, 3]
string_nums = []

ints.each do |int|
  string_nums << int.to_s
end

p string_nums