arr = [2, 1, 5, 3, 4]
print(sorted(arr)) # [1, 2, 3, 4, 5]
print(sorted(arr, reverse=True)) # [5, 4, 3, 2, 1]

students = [
  {'name': 'Jimmy', 'age': 15},
  {'name': 'Hector', 'age': 18},
  {'name': 'Paige', 'age': 16}
]
print(sorted(students, key=lambda x: x['age'])) # [{'name': 'Jimmy', 'age': 15}, {'name': 'Paige', 'age': 16}, {'name': 'Hector', 'age': 18}]

