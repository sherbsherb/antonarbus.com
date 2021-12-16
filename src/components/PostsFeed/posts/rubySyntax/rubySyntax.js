import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const rubySyntax = {
  title: 'Ruby basic syntax',
  date: '2021.12.16',
  tagsArr: ['ruby', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path="https://www.ruby-lang.org/en/documentation/installation/">Install Ruby</Lnk>{' '}
          and restart your PC if you are on Windows machine.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Type <code>ruby -v</code> in terminal to see the version. For me it is{' '}
          <CodeOutput>ruby 3.0.3p157 (2021-11-24 revision 3fb7d2cadc) [x64-mingw32]</CodeOutput>
        </>
      ),
    },
    {
      val: <h3>Get started</h3>
    },
    {
      type: 'text',
      val: (
        <>
          Create a file <code>syntax.rb</code> with the following code <CodeSpan lang='ruby'>puts 'hello world'</CodeSpan>, run
          it from the terminal with command <code>ruby syntax.rb</code> and get output{' '}
          <CodeOutput>hello world</CodeOutput>. So Ruby is installed and executable.
        </>
      ),
    },
    {
      val: <h3>Print</h3>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        puts 'hi' # hi # adds new line at the end # returns nil
        print 123; print 456; print 789; # 123456789 # prints without new line
        p 'hi' # "hi" # shows raw version # returns passed object

        puts [1,2]
        #1
        #2
        print [1,2] # [1, 2]
        p [1,2] # [1, 2]
      `
    },
    {
      val: <h3>Load</h3>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        # file1.rb
        puts 'hello from file 1'
      `
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        # file2.rb
        load 'file1.rb'
      `
    },
    {
      type: 'text',
      val: (
        <>
          When we execute <code>ruby file2.rb</code> we get <CodeOutput>hello from file 1</CodeOutput>
        </>
      ),
    },
    {
      val: <h3>Comments</h3>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        # single line comment
        
        =begin
          multiline
          comment
        =end
      `
    },
    {
      val: <h3>Variables</h3>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "John"
        num = 123
        cond = true

        p name, num, cond
        # "John"
        # 123
        # true
      `
    },
    {
      val: <h3>Input</h3>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        print "Enter your name: "
        name = gets.chomp
        p "Hello #{name}"

        # Enter your name: John
        # "Hello John"
      `
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        print "Enter number: "
        num = gets.chomp.to_i
        puts "5 + #{num} = #{5 + num}"

        # Enter number: 1
        # "5 + 1 = 6"
      `
    },
    {
      val: <h3>Strings</h3>
    },
    {
      val: <h5>Multiline</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        str1 = 'line1
        line2
        line3'
        p str1 # "line1\nline2\nline3"

        str2 = %/line1
        line2
        line3/
        puts str2 # "line1\nline2\nline3"
      `
    },
    {
      val: <h5>Interpolation</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "John"
        p "Hello #{name}" # "Hello John"
      `
    },
    {
      val: <h5>Length</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "John"
        p name.size # 4
        p name.length # 4
      `
    },
    {
      val: <h5>Case</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "joHn"
        p name.upcase # "JOHN"
        p name.downcase # "john"
        p name.capitalize # "John"
      `
    },
    {
      val: <h5>Reverse</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "John"
        p name.reverse # "nhoJ"
      `
    },
    {
      val: <h5>Include</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "John"
        p name.include? "ohn" # true
        p name.include? "xxx" # false
      `
    },
    {
      val: <h5>Concatenation</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "Hello, " "how are you" # "Hello, how are you"
        p "Hello, " + "how are you" # "Hello, how are you"
        p "Hello, ".concat("how are you") # "Hello, how are you"
      `
    },
    {
      val: <h5>Freeze</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        str = "Hi"
        p str # "Hi"
        str = str << " again"
        p str # "Hi again"
        str.freeze
        str = str << " again"
        p str # "Hi again" # can't modify frozen String: "Hi again" (FrozenError)
      `
    },
    {
      val: <h5>Compare</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "hi" === "hi" # true
        p "hi".eql? "hi" # true
      `
    },
    {
      val: <h5>Access characters</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        str = "Hello from Tokyo"
        p str # "Hello from Tokyo"
        p str["from"] # "from"
        p str[0] # "H"
        p str[0, 4] # "Hell" 
        p str[0..10] # "Hello from"
        p str[0, str.length] # "Hello from Tokyo"
        p str[-4] # "o"
        p str.length # 16
      `
    },
    {
      val: <h3>Operators</h3>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p 10 + 20 # 30
        p 20 - 10 # 10
        p 20 * 10 # 200
        p 20 / 10 # 2
        p 20 / 9 # 2
        p 20.to_f / 9 # 2.2222222222222223
        p 20.0 / 9 # 2.2222222222222223
        p 20 / 9.0 # 2.2222222222222223
        p 10 % 3 # 1
        p 2 ** 3 # 8

        p 2 == 3 # false
        p 2 != 3 # true
        p 2 > 3 # false
        p 2 < 3 # true
        p 2 >= 3 # false
        p 2 <= 3 # true
      `
    },
    {
      val: <h3>Array</h3>
    },
    {
      val: <h5>Create</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr1 = []
        arr2 = Array.new
      `
    },
    {
      val: <h5>Size</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr1 = [1,2,3,4,5]
        p arr1.size # 5
        p arr1.length # 5

        arr2 = Array.new(5)
        p arr2.size # 5
      `
    },
    {
      val: <h5>Access</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1,2,3,4,5]
        p arr.at(1) # 2
        p arr.at(5) # nil

        p arr.fetch(1) # 2
        p arr.fetch(5) # index 5 outside of array bounds: -5...5 (IndexError)

        p arr.first # 1
        p arr.last # 5

        p arr.take(2) # [1, 2]
      `
    },
    {
      val: <h5>Manipulate</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1,2,3,4,5]
        p arr.push(6) # [1, 2, 3, 4, 5, 6]
        p arr << 7 # [1, 2, 3, 4, 5, 6, 7]
        p arr.unshift(0) # [0, 1, 2, 3, 4, 5, 6, 7]
        p arr.insert(3, 666) # [0, 1, 2, 666, 3, 4, 5, 6, 7]

        p arr.pop # 7
        p arr # [0, 1, 2, 666, 3, 4, 5, 6]

        p arr.shift # 0
        p arr # [1, 2, 666, 3, 4, 5, 6]

        p arr.delete(666) # 666
        p arr # [1, 2, 3, 4, 5, 6]

        p arr.drop(3) # [4, 5, 6]
        p arr # [1, 2, 3, 4, 5, 6]

        arrWithDuplicates = [1, 1, 2, 2, 3, 3]
        p arrWithDuplicates.uniq # [1, 2, 3]
        p arrWithDuplicates # [1, 1, 2, 2, 3, 3]
      `
    },
    {
      val: <h3>Hashes (objects, associative arrays, dictionaries, maps, data structure with key-value pairs)</h3>
    },
    {
      val: <h5>Create</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash1 = {
          "name" => "John",
          "sex" => "male",
          "age" => 35
        }

        hash2 = {
          "name": "Jane",
          "sex": "female",
          "age": 35
        }

        p hash1.size # 3
        p hash2.size # 3
      `
    },
    {
      val: <h5>Access</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash = {
          "name": "Jane",
          "sex": "female",
          "age": 35
        }

        p hash["name"] # "Jane"
        p hash["age"] # 35

        hash.each do |key, value|
          p "#{key} : #{value}"
        end
        # name : Jane
        # sex : female
        # age : 35
      `
    },
    {
      val: <h3>Conditions</h3>
    },
    {
      val: <h5>if</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        if 2 > 1
          p "2 is greater than 1"
        end
        # "2 is greater than 1"
      `
    },
    {
      val: <h5>if-else</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        if 1 > 2
          p "1 is greater than 2"
        else
          p "1 is not greater than 2"
        end
        # "1 is not greater than 2"
      `
    },
    {
      val: <h5>else-if</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        if 2 > 2
          p "2 is greater than 2"
        elsif 2 == 2
          p "2 is equal 2"
        else 2 < 2
          p "2 is less than 2"
        end
        # "2 is equal 2"
      `
    },
    {
      val: <h5>unless (negated 'if')</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        x = 3
        unless x < 5
          p 'x >= 5'
        else
          p 'x < 5'
        end
        # "x < 5"
      `
    },
    {
      val: <h5>Ternary statement</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        yesOrNo = 2 > 1 ? 'yes' : 'no'
        p yesOrNo # "yes"
      `
    },
    {
      val: <h5>Case statement</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        print "Enter day num: "
        day = gets.chomp.to_i

        case day
        when 1
          p "Mon"
        when 2
          p "Tue"
        when 3
          p "Wed"
        when 4
          p "Thu"
        when 5
          p "Fri"
        when 8..Float::INFINITY
          p "not valid"
        else
          p "weekend"
        end

        # Enter day num: 5
        # "Fri"

        # Enter day num: 7
        # "weekend"

        # Enter day num: 10
        # "not valid"
      `
    },
    {
      val: <h3>Loops</h3>
    },
    {
      val: <h5>For</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        for i in 1..5
          p i
        end
        # 1 2 3 4 5

        for i in [1, 2, 3, 4, 5]
          p i
        end
        # 1 2 3 4 5

        arr = [1, 2, 3, 4, 5]
        for i in arr
          p i
        end
        # 1 2 3 4 5
      `
    },
    {
      val: <h5>while</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        x = 1
        while x < 5 do
          p x
          x += 1
        end
        # 1 2 3 4
      `
    },
    {
      val: <h5>do</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        loop do
          p "enter a num > 10"
          num = gets.chomp.to_i
          if num > 10
            p "thank you"
            break
          end
        end
        # "enter a num > 10"
        # 11
        # "thank you"
      `
    },
    {
      val: <h5>until</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        i = 1
        until i === 5
          p i
          i += 1
        end
        # 1 2 3 4
      `
    },
    {
      val: <h5>break</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        for i in 1..5
          if i === 3 
            break
          end
          p i
        end
        # 1 2
      `
    },
    {
      val: <h5>next</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        for i in 1..5
          if i === 3 
            next
          end
          p i
        end
        # 1 2 4 5
      `
    },
    {
      val: <h5>redo (repeat current iteration)</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        i = 1
        while i < 5
          p i
          i += 1
          # redo if i === 5 
        end
        # 1 2 3 4

        i = 1
        while i < 5
          p i
          i += 1
          redo if i === 5 
        end
        # 1 2 3 4 5
      `
    },
    {
      val: <h5>retry</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        for i in 1..5
          begin
          p i
          raise if i === 5
          rescue
            retry
          end
        end
        # 1 2 3 4 5 5 5 5 5 5 5 5 5...
      `
    },
    {
      val: <h3>function (method)</h3>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        def hello1
          p "hello from method"
        end
        hello1 # "hello from method"
        
        def hello2()
          p "hello from method"
        end
        hello2() # "hello from method"

        def hello3(name)
          p "hello from #{name}"
        end
        hello3('John') # "hello from John"

        def hello4(name = "John")
          puts "Hello from #{name}"
        end
        hello4 # "hello from John"
      `
    },
    {
      val: <h3>class</h3>
    },
    {
      val: <h5>create</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        class Car
          def getBrand()
            p "Car brand is VW"
          end
        end

        car1 = Car.new
        car1.getBrand() # "Car brand is VW"
      `
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        class Car
          @brand

          def setBrand(brand)
            @brand = brand
          end

          def getBrand()
            p "Car brand is #{@brand}"
          end

        end

        car1 = Car.new
        car1.setBrand("Toyota")
        car1.getBrand() # "Car brand is Toyota"
      `
    },
    {
      val: <h5>initialize (constructor)</h5>
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        class Car
          @brand
          @model
          @topSpeed

          def initialize(brand, model, topSpeed)
            @brand = brand
            @model = model
            @topSpeed = topSpeed
          end

          def getBrand()
            p "Car brand is #{@brand}"
          end

        end

        car1 = Car.new("Tesla", "Model3", "220")
        car1.getBrand() # "Car brand is Tesla"
      `
    },
  ],
}
