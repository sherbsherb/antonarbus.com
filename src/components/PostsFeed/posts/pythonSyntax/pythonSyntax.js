import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const pythonSyntax = {
  title: 'Python basic syntax',
  date: '2021.12.19',
  tagsArr: ['python', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path="https://www.python.org/downloads/">Install Python</Lnk>.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Type <code>py</code> in terminal to enter into command shell and see the version. For me it is <CodeOutput>Python 3.10.1</CodeOutput>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Type <code>exit()</code> or <kbd>Ctrl+Z</kbd> then <kbd>Return</kbd> to exit.
        </>
      ),
    },
    {
      val: <h3>Get started</h3>,
    },
    {
      type: 'text',
      val: (
        <>
          Create a file <code>file.py</code> with the following code{' '}
          <CodeSpan lang="py">print("hello world")</CodeSpan>, run it from the terminal with command{' '}
          <code>py file.py</code> and get output <CodeOutput>hello world</CodeOutput>. So Python
          is installed and executable.
        </>
      ),
    },
    {
      val: <h3>Print</h3>,
    },
    {
      val: <h5>Quotes</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("hello world") # hello world
        print('hello world') # hello world
      `,
    },
    {
      val: <h5>Line break</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        # print w/o line break
        print("line 1 ", end = "")
        print("line 2 ", end = "")
        # line 1 line 2 
      `,
    },
    {
      val: <h5>Concatenate</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("5 + 2 =", 5 + 2) # 5 + 2 = 7

        var1 = "like"
        var2 = "to"
        var3 = "eat"
        print('I', var1, var2, var3) # I like to eat
      `,
    },
    {
      val: <h5>Interpolation</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("{} + {} = {}".format(1, 2, 3)) # 1 + 2 = 3
      `
    },
    {
      val: <h5>Duplicate</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("hi " * 5) # hi hi hi hi hi 
      `,
    },
    {
      val: <h5>Format</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("%c is my %s letter and my number %d number is %.5f" % 
          ('X', 'favorite', 1, .14))
        # X is my favorite letter and my number 1 number is 0.14000
      `,
    },
    {
      val: <h3>Comments</h3>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        # comment

        '''
          multiline comment
        '''
      `,
    },
    {
      val: <h3>Variable</h3>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        name = "John"
        print(name)
      `,
    },
    {
      val: <h3>Types</h3>,
    },
    {
      val: <h5>Types</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        "five" # <class 'str'>
        5 # <class 'int'>
        5.5 # <class 'float'>
        range(3) # <class 'range'> # nums from 0 to 2
        ["apple", "banana", "cherry"] # <class 'list'>
        {"apple", "banana", "cherry"} # <class 'set'>v # unchangeable
        ("apple", "banana", "cherry") # <class 'tuple'> # ordered, unchangeable
        {"name" : "John", "age" : 36} # <class 'dict'>
        True # <class 'bool'>

        # others
        1j # <class 'complex'>
        b"Hello" # <class 'bytes'>
        bytearray(5) # <class 'bytearray'>
        memoryview(bytes(5)) # <class 'memoryview'>
      `,
    },
    {
      val: <h5>Check type</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print(type(5)) # <class 'int'>
      `,
    },
    {
      val: <h5>Convert type</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        str("Hello World")
        bool(5)
        int(20)
        float(20.5)
        list(("apple", "banana", "cherry"))
        tuple(("apple", "banana", "cherry"))
        range(6)
        dict(name="John", age=36)
        set(("apple", "banana", "cherry"))

        #others
        frozenset(("apple", "banana", "cherry"))
        complex(1j)
        bytes(5)
        bytearray(5)
        memoryview(bytes(5))
      `,
    },
    {
      val: <h3>Operators</h3>,
    },
    {
      val: <h5>Math</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        5 + 2 # 7
        5 - 2 # 3
        5 * 2 # 10
        5 / 2 # 2.5
        5 % 2 # 1
        5 ** 2 # 25
        5 // 2 # 2
      `,
    },
    {
      val: <h5>Comparison</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        ==, !=, >, <, >=, <=
      `,
    },
    {
      val: <>No triple equal <code>===</code></>,
    },
    {
      val: <h5>Logical</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        and, or, not
      `,
    },
    {
      val: <h3>String</h3>,
    },
    {
      val: <h5>Single vs multiline</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        str = "single line string"
        str = "single line string with quotation mark \\""
        str = '''
          multiline
          text
          goes inside triple quotes
        '''
      `,
    },
    {
      val: <h5>Concatenation</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print('hello ' + 'John') # hello John
      `,
    },
    {
      val: <h5>First N chars</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        str = "123456789"
        print(str[0:4]) # 1234
      `,
    },
    {
      val: <h5>Last N chars</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        str = "123456789"
        print(str[-5:]) # 56789
      `,
    },
    {
      val: <h5>Up to N chars</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        str = "123456789"
        print(str[:-5]) # 1234
      `,
    },
    {
      val: <h5>Capitalize</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("hi".capitalize()) # Hi
      `,
    },
    {
      val: <h5>Find</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("Hello my friend".find('m')) # 6
      `,
    },
    {
      val: <h5>Length</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print(len("Hello my friend")) # 15
      `,
    },
    {
      val: <h5>Is number</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("1234".isalnum()) # True
      `,
    },
    {
      val: <h5>Is alpha</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("abc".isalpha()) # True
      `,
    },
    {
      val: <h5>Replace</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("abc".replace("b", "B")) # aBc
      `,
    },
    {
      val: <h5>Strip</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("  abc   ".strip()) # abc
      `,
    },
    {
      val: <h5>Split</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("a b c".split(" ")) # ['a', 'b', 'c']
        print(list("a b c")) # ['a', ' ', 'b', ' ', 'c']
      `,
    },
    {
      val: <h5>Split with empty string</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        print("a b c".list(" ")) # ['a', 'b', 'c']
      `,
    },



    {
      val: <h3>List (array)</h3>,
    },
    {
      val: <h5>Create</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        grocery_list = ['Juice', 'Tomatoes', 'Potatoes', 'Bananas']
      `,
    },
    {
      val: <h5>Access</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        grocery_list = ['Juice', 'Tomatoes', 'Potatoes', 'Bananas']
        grocery_list[1] # Tomatoes
        grocery_list[0:2] # ['Juice', 'Tomatoes']

        arr = [1, 2, [3, 4]] 
        arr[2][0] # 3

        for x in [1, 2, 3, 4, 5]:
          print(x, ' ', end="") # 1  2  3  4  5
      `,
    },
    {
      val: <h5>Change</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [1, 2, 3]
        arr[0] = 666
        print(arr) # [666, 2, 3]
      `,
    },
    {
      val: <h5>Add</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [1, 2, 3]
        arr.append(4)
        print(arr) # [1, 2, 3, 4]

        arr.insert(0, 0)
        print(arr) # [0, 1, 2, 3, 4]
      `,
    },
    {
      val: <h5>Remove, delete</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [0, 1, 2, 3, 4]
        arr.remove(0)
        print(arr) # [1, 2, 3, 4]

        del arr[0]
        print(arr) # [2, 3, 4]
      `,
    },
    {
      val: <h5>Reverse</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [0, 1, 2, 3, 4]
        arr.reverse()
        print(arr) # [4, 3, 2, 1, 0]
      `,
    },
    {
      val: <h5>Concatenate</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr1 = [0, 1, 2]
        arr2 = [3, 4, 5]
        arr3 = arr1 + arr2
        print(arr3) # [0, 1, 2, 3, 4, 5]
      `,
    },
    {
      val: <h5>Length</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [0, 1, 2]
        print(len(arr)) # 3
      `,
    },
    {
      val: <h5>Max, min</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [0, 1, 2]
        print(max(arr)) # 2
        print(min(arr)) # 0
      `,
    },
    {
      val: <h5>All</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [1, 2, 3, 4, 5]
        print(all(i > 0 for i in arr)) # True
        print(all(i > 3 for i in arr)) # False
      `,
    },
    {
      val: <h5>Filter</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [1, 2, 3, 4, 5]

        def filterFunc(x):
          return x > 2
        
        print(list(filter(filterFunc, arr))) # [3, 4, 5]
        # alternatively
        print(list(filter(lambda x: x > 2, arr))) # [3, 4, 5]
        # alternatively
        print([x for x in arr if x > 2]) # [3, 4, 5]
      `,
    },
    {
      val: <h5>Next</h5>,
    },
    {
      val: <>Returns the first element that meets a condition</>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [1, 2, 3, 4, 5]

        print(next(x for x in arr if x > 2)) # 3
        # print(next(x for x in arr if x > 5)) # error: StopIteration
        print(next((x for x in arr if x > 5), None)) # None
      `,
    },
    {
      val: <h5>Includes</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [1, 2, 3, 4, 5]

        print(1 in arr) # True
        print(6 in arr) # False
      `,
    },
    {
      val: <h5>For each</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [1, 2, 3, 4, 5]
        for x in arr:
          print(x, end="") # 12345
      `,
    },
    {
      val: <h5>Map</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [1, 2, 3, 4, 5]

        def square(x):
          return x * x

        print(list(map(square, arr))) # [1, 4, 9, 16, 25]
        # alternatively
        print(list(map(lambda x: x * x, arr))) # [1, 4, 9, 16, 25]
        # alternatively
        print([x * x for x in arr]) # [1, 4, 9, 16, 25]
      `,
    },
    {
      val: <h5>Reduce</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        import functools

        arr = [1, 2, 3, 4, 5]
        
        def square_reducer(x, y):
          return x * y
        
        print(functools.reduce(square_reducer, arr)) # 120
        # alternatively
        print(functools.reduce(lambda x, y: x * y, arr)) # 120
      `,
    },
    {
      val: <h5>Sort</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [2, 1, 5, 3, 4]
        print(sorted(arr)) # [1, 2, 3, 4, 5]
        print(sorted(arr, reverse=True)) # [5, 4, 3, 2, 1]
        
        students = [
          {'name': 'Jimmy', 'age': 15},
          {'name': 'Hector', 'age': 18},
          {'name': 'Paige', 'age': 16}
        ]
        print(sorted(students, key=lambda x: x['age'])) # [{'name': 'Jimmy', 'age': 15}, {'name': 'Paige', 'age': 16}, {'name': 'Hector', 'age': 18}]
      `,
    },
    {
      val: <h5>Sort 2</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [0, 4, 3, 2, 1]
        arr.sort()
        print(arr) # [0, 1, 2, 3, 4]
      `,
    },
    {
      val: <h5>Convert to tuple</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        arr = [1, 2, 3, 4, 5]
        print(arr) # [1, 2, 3, 4, 5]
        tuple = tuple(arr)
        print(tuple) # (1, 2, 3, 4, 5)
        
      `,
    },
    {
      val: <h3>Tuple</h3>,
    },
    {
      val: <>Same as list, but not changeable</>,
    },
    {
      val: <h5>Create</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        tuple = (1, 2, 3, 4, 5)
      `,
    },
    {
      val: <h5>Convert to a list</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        tuple = (1, 2, 3, 4, 5)
        print(tuple) # (1, 2, 3, 4, 5)
        list = list(tuple)
        print(list) # [1, 2, 3, 4, 5]
      `,
    },
    {
      val: <h5>Length</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        tuple = (1, 2, 3, 4, 5)
        print(len(tuple)) # 5
      `,
    },
    {
      val: <h5>Min, max</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        tuple = (1, 2, 3, 4, 5)
        print(min(tuple)) # 1
        print(max(tuple)) # 5
      `,
    },
    {
      val: <h3>Dictionary</h3>,
    },
    {
      val: <>Same as maps, objects, key-valued storage</>,
    },
    {
      val: <h5>Create</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        dict = {
          "name": "John",
          "sex": "male",
          "age": 35,
        }
        print(dict) # {'name': 'John', 'sex': 'male', 'age': 35}
      `,
    },
    {
      val: <h5>Access</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        dict = {
          "name": "John",
          "sex": "male",
          "age": 35,
        }
        print(dict['name']) # John
        print(dict.get("name")) # John
        print(dict.keys()) # dict_keys(['name', 'sex', 'age'])
        print(dict.values()) # dict_values(['John', 'male', 35])

      `,
    },
    {
      val: <h5>Delete</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        dict = {
          "name": "John",
          "sex": "male",
          "age": 35,
        }
        del dict['name']
        print(dict) # {'sex': 'male', 'age': 35}
      `,
    },
    {
      val: <h5>Length</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        dict = {
          "name": "John",
          "sex": "male",
          "age": 35,
        }
        print(len(dict)) # 3
      `,
    },
    {
      val: <h5>Update</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        dict = {
          "name": "John",
          "sex": "male",
          "age": 35,
        }
        dict['name'] = 'James'
        print(dict) # {'name': 'James', 'sex': 'male', 'age': 35}
      `,
    },
    {
      val: <h3>Conditionals</h3>,
    },
    {
      val: <h5>if</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        age = 21
        if age > 16:
          print('can drive')
      `,
    },
    {
      val: <h5>if-else</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        age = 21
        if age > 16:
          print('can drive')
        else:
          print('can not drive')
      `,
    },
    {
      val: <h5>else-if</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        age = 21
        if age >= 21:
          print('can drive a tractor')
        elif age >= 16:
          print('can drive a car')
        else:
          print('can not drive')
      `,
    },
    {
      val: <h5>ternary</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        a = 1 if (1 == 1) else 0
        print(a) # 1
      `,
    },
    {
      val: <h5>logical operators</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        num = 2
        if (num == 1) and (num != 2) and not(num == 3):
          print('num is 1')
        else:
          print('num is not 1')
        # num is not 1
      `,
    },
    {
      val: <h3>Loops</h3>,
    },
    {
      val: <h5>For</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        for x in range(0, 5):
          print(x, ' ', end="") # 0  1  2  3  4  

        for x in [1, 2, 3, 4, 5]:
          print(x, ' ', end="") # 1  2  3  4  5  
      `,
    },
    {
      val: <h5>While</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        i = 0
        while (i <= 10):
          if(i % 2 == 0):
            print(i, end="")
          i += 1
        # 0246810
      `,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        import random
        randNum = 0
        
        while(randNum != 5):
          print(randNum, end='')
          randNum = random.randrange(0, 10)
        # 0904994
      `,
    },
    {
      val: <h5>Break, continue</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        for i in range(0, 10):
        if (i == 5):
          continue
        if (i == 9):
          break
        print(i, end="") # 01234678
      `,
    },
    {
      val: <h3>Functions</h3>,
    },
    {
      val: <>Variables defined in function are not visible outside.</>,
    },
    {
      val: <h3>Functions declaration</h3>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        def sum(num1, num2):
          sumNum = num1 + num2
          return sumNum
        
        print(sum(1, 2)) # 3
      `,
    },
    {
      val: <h3>Lambda function (arrow)</h3>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        sum = lambda num1, num2 : num1 + num2
        print(sum(1, 2)) # 3 
      `,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        def func(n):
          return lambda a : a * n

        tripler = myfunc(3)
        print(tripler(11)) # 33
      `,
    },
    {
      val: <h3>Input</h3>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        import sys
        print('what is your name?')
        name = sys.stdin.readline()
        print('hello', name)

        # what is your name?
        # John
        # hello John
      `,
    },
    {
      val: <h3>File</h3>,
    },
    {
      val: <h5>Create & write</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        file = open("text.txt", "wb")
        print(file.mode) # wb
        print(file.name) # text.txt
        file.write(bytes("Line1\n", 'UTF-8'))
        file.close()
      `,
    },
    {
      val: <h5>Open & read</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        file = open("text.txt", "r+")
        text = file.read()
        print(text) # Line1
        file.close()
      `,
    },
    {
      val: <h5>Delete</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        import os
        os.remove("text.txt")
      `,
    },
    {
      val: <h3>Class</h3>,
    },
    {
      val: <h5>Initialize, setters, getters, methods</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        class Human:
          __name = None # private
          __sex = None # like 'null' in JS
          __age = None
        
          # constructor to initialize an object
          # self = this in JS
          def __init__(self, name, sex, age, height):
            self.__name = name
            self.__sex = sex
            self.__age = age
            self.height = height
            
        
          # setters
          def set_name(self, name):
            self.__name = name
        
          def set_sex(self, sex):
            self.__sex = sex
        
          def set_age(self, sex):
            self.__sex = sex
        
          # getters
          def get_name(self):
            return self.__name
        
          def get_sex(self):
            return str(self.__sex)
        
          def get_age(self):
            return str(self.__age)
        
          def get_type(self):
            print("Human")
        
          #method
          def toString(self):
            return "{} is {}, {} years old, {} cm".format(self.__name, self.__sex, self.__age, self.height)
        
        # create an object
        john = Human('John', 'male', 35, 180)
        
        print(john.toString()) # John is male, 35 years old
        print(john.height) # 180
        print(john.get_age()) # 35
        print(john.__age) # !!! object has no attribute '__age' # it is private
      `,
    },
    {
      val: <h5>Inherit</h5>,
    },
    {
      type: 'code',
      lang: 'py',
      val: `
        from classFile import Human

        class Superhero(Human):
          __superpower = None
        
          def __init__(self, name, sex, age, height, superpower):
            self.__superpower = superpower
        
            # call the super class constructor
            super(Superhero, self).__init__(name, sex, age, height)
        
          def set_superpower(self, superpower):
            self.__superpower = superpower
        
          def get_superpower(self):
            return self.__superpower
        
          def get_type(self):
            print ("Superhero")
        
          # We can overwrite functions in the super class
          def toString(self):
            return "{} is a superhero {}, {} years old, {} cm, with {} superpower".format(self.get_name(), self.get_sex(), self.get_age(), self.height, self.__superpower)
        
        immortalJohn = Superhero('John', 'male', 35, 180, "immortality")
        print(immortalJohn.toString()) # John is a superhero male, 35 years old, 180 cm, with immortality superpower
        print(immortalJohn.get_superpower()) # immortality
        immortalJohn.set_superpower("transparency")
        print(immortalJohn.get_superpower()) # transparency
      `,
    },
    {
      val: <><Lnk path="https://overapi.com/python">Python cheat-sheet</Lnk> on every property and method.</>,
    },
  ],
}
