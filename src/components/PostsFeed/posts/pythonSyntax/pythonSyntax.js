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
      type: 'code',
      lang: 'py',
      val: `
        print("hello world") # hello world
        print('hello world') # hello world
        print("5 + 2 =", 5+2) # 5 + 2 = 7
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
      val: <><Lnk path="https://overapi.com/python">Ruby cheat-sheet</Lnk> on every property and method.</>,
    },
  ],
}
