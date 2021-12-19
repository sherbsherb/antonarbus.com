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
      val: <h3>Get started</h3>,
    },
    {
      type: 'text',
      val: (
        <>
          Create a file <code>file.rb</code> with the following code{' '}
          <CodeSpan lang="ruby">puts 'hello world'</CodeSpan>, run it from the terminal with command{' '}
          <code>ruby file.rb</code> and get output <CodeOutput>hello world</CodeOutput>. So Ruby
          is installed and executable.
        </>
      ),
    },
    {
      val: <h3>Print</h3>,
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
      `,
    },
    {
      val: <h3>Load</h3>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        # file1.rb
        puts 'hello from file 1'
      `,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        # file2.rb
        load 'file1.rb'
      `,
    },
    {
      type: 'text',
      val: (
        <>
          When we execute <code>ruby file2.rb</code> we get{' '}
          <CodeOutput>hello from file 1</CodeOutput>
        </>
      ),
    },
    {
      val: <h3>Comments</h3>,
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
      `,
    },
    {
      val: <h3>Variables</h3>,
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
      `,
    },
    {
      val: <h3>Types</h3>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p 1.class # Integer
        p 1.234.class # Float
        p "string".class # String
        p false.class # FalseClass
      `,
    },
    {
      val: <h3>Conversion</h3>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p 4.to_s # "4"
        p 4.to_f # 4.0
        p "4".to_i # 4
      `,
    },
    {
      val: <h3>Escape characters</h3>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        # \\\ backslash
        # \\' single quote
        # \\" double quote
        # \\a bell
        # \\b backspace
        # \\f formfeed
        # \\n new line
        # \\r carriage
        # \\t tab
        # \\v vertical tab
      `,
    },
    {
      val: <h3>Constant is writable</h3>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        A_CONST = 123
        A_CONST = 321
        p A_CONST
        # file.rb:2: warning: already initialized constant A_CONST
        # file.rb:1: warning: previous definition of A_CONST was here
        # 321
      `,
    },
    {
      val: <h3>Input</h3>,
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
      `,
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
      `,
    },
    {
      val: <h3>Strings</h3>,
    },
    {
      val: <h5>Multiline</h5>,
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

        str3 = <<EOM
          This is a very long string
          that contains interpolation
          like #{600 + 66} \n\n
        EOM
        puts str3
      `,
    },
    {
      val: <h5>Interpolation</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "John"
        p "Hello #{name}" # "Hello John"
        p 'Hello #{name}' # "Hello #{name}" # interpolation not working with single quotes
      `,
    },
    {
      val: <h5>Length</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "John"
        p name.size # 4
        p name.length # 4
      `,
    },
    {
      val: <h5>Case</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "joHn"
        p name.upcase # "JOHN"
        p name.downcase # "john"
        p name.capitalize # "John"
      `,
    },
    {
      val: <h5>Reverse</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "John"
        p name.reverse # "nhoJ"
      `,
    },
    {
      val: <h5>Include</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        name = "John"
        p name.include? "ohn" # true
        p name.include? "xxx" # false
      `,
    },
    {
      val: <h5>Start with</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p 'hello'.start_with? "hel" # true
      `,
    },
    {
      val: <h5>Index</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p 'hello'.index("e") # 1
      `,
    },
    {
      val: <h5>Count</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "vowels in the 'hello' word: " +  "hello".count("aeiou").to_s # "vowels in the 'hello' word: 2"
        p "consonants in the 'hello' word: " +  "hello".count("^aeiou").to_s #  "consonants in the 'hello' word: 3"
      `,
    },
    {
      val: <h5>Strip (trim)</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "   hello    ".lstrip # "hello    "
        p "   hello    ".rstrip # "   hello"
        p "   hello    ".strip # "hello"
      `,
    },
    {
      val: <h5>chop</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "hello".chop # "hell"
        p "hello".chomp("lo") # "hel"
      `,
    },
    {
      val: <h5>delete</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "hello".delete("l") # "heo"
      `,
    },
    {
      val: <h5>split</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "hello".split("") # ["h", "e", "l", "l", "o"]
        p "hello".split("e") # ["h", "llo"]
      `,
    },
    {
      val: <h5>Concatenation</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "Hello, " "how are you" # "Hello, how are you"
        p "Hello, " + "how are you" # "Hello, how are you"
        p "Hello, ".concat("how are you") # "Hello, how are you"
      `,
    },
    {
      val: <h5>Freeze</h5>,
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
      `,
    },
    {
      val: <h5>Compare</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "hi" === "hi" # true
        p "hi".eql? "hi" # true
      `,
    },
    {
      val: <h5>Access characters</h5>,
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
      `,
    },
    {
      val: <h5>Comparison</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p 2 == 3 # false
        p 2 != 3 # true
        p 2 > 3 # false
        p 2 < 3 # true
        p 2 >= 3 # false
        p 2 <= 3 # true
      `,
    },
    {
      val: <h5>Logical</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p (true && true) # true
        p (true and true) # true
        p (false || true) # true
        p (false or true) # true
        p (!false) # true
        p (not false) # true
      `,
    },
    {
      val: <h3>Array</h3>,
    },
    {
      val: <h5>Create</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p arr1 = [1, "two", 3, 4.4] # [1, "two", 3, 4.4]
        p arr2 = Array.new # []
        p arr3 = Array.new(5) # [nil, nil, nil, nil, nil]
        p arr4 = Array.new(5, "empty") # ["empty", "empty", "empty", "empty", "empty"]
      `,
    },
    {
      val: <h5>Size</h5>,
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
      `,
    },
    {
      val: <h5>Access</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1,2,3,4,5]
        p arr[0] # 1
        p arr[1,4] # [2, 3, 4, 5]
        p arr.at(1) # 2
        p arr.at(5) # nil
        p arr.values_at(0,1,3) # [1, 2, 4]

        p arr.fetch(1) # 2
        p arr.fetch(5) # index 5 outside of array bounds: -5...5 (IndexError)

        p arr.first # 1
        p arr.last # 5

        p arr.take(2) # [1, 2]

        arr.each do |value|
          p value # 1 2 3 4 5
        end
      `,
    },
    {
      val: <h5>Manipulate</h5>,
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
      `,
    },
    {
      val: <h5>Include?</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 2, 3, 1, 2, 3]
        p arr.include?(2) # true
      `,
    },
    {
      val: <h5>Count</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 2, 3, 1, 2, 3]
        p arr.count(2) # 2
      `,
    },
    {
      val: <h5>Empty?</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = []
        p arr.empty? # true
      `,
    },
    {
      val: <h5>Join</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 2, 3]
        p arr.join(" ") # "1 2 3"
        p arr.join # "123"
      `,
    },
    {
      val: <h5>Reverse</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 2, 3]
        p arr.reverse # [3, 2, 1]
      `,
    },
    {
      val: <h5>Select</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 2, 3, 4, 5]
        p arr.select { |num| num > 2 } # [3, 4, 5]
        p arr # [1, 2, 3, 4, 5]
      `,
    },
    {
      val: <h5>flatten</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p [1, 2, [3, 4, 5]].flatten # [1, 2, 3, 4, 5]
        p [1, 2, [3, [4, 5]]].flatten # [1, 2, 3, 4, 5]
        
      `,
    },
    {
      val: <h5>each</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 2, 3, 4, 5]
        arr.each do |el|
          p el
        end
        # 1 2 3 4 5
      `,
    },
    {
      val: <h5>map</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 2, 3, 4, 5]
        p arr.map { |el| el * 2 } # [2, 4, 6, 8, 10]
      `,
    },
    {
      val: <h5>concat</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 2, 3]
        p arr.concat([4, 5, 6]) # [1, 2, 3, 4, 5, 6]
        p arr # [1, 2, 3, 4, 5, 6]
      `
    },
    {
      val: <h5>uniq</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 1, 2, 2, 3, 3]
        p arr.uniq # [1, 2, 3]
        p arr # [1, 1, 2, 2, 3, 3]
      `,
    },
    {
      val: <h3>Hash (object)</h3>,
    },
    {
      val: <h5>Create</h5>,
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

        hash2 = Hash[
          "name", "Jane",
          "sex", "female",
          "age", 35
        ]

        p hash1.size # 3
        p hash2.size # 3
      `,
    },
    {
      val: <h5>Default key</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash = Hash.new("no such key")
        p hash["country"] # "no such key"
      `,
    },
    {
      val: <h5>Access</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash = {
          "name" => "Jane",
          "sex" => "female",
          "age" => 35
        }

        p hash["name"] # "Jane"
        p hash["sex"] # "female"
        p hash["age"] # 35
        p hash["country"] # nil

        hash.each do |key, value|
          p "#{key} : #{value}" 
        end
        # "name : Jane", "sex : female", "age : 35"
      `,
    },
    {
      val: <h5>Add</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash = {
          "name" => "Jane",
          "sex" => "female",
          "age" => 35
        }

        hash["country"] = "USA"
        p hash["country"] # "USA"
      `,
    },
    {
      val: <h5>Delete</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash = {
          "name" => "Jane",
          "sex" => "female",
          "age" => 35
        }

        hash.delete("name")
        p hash # {"sex"=>"female", "age"=>35}
      `,
    },
    {
      val: <h5>Merge</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash1 = {
          "name" => "Jane",
          "sex" => "female",
          "age" => 35
        }
        hash2 = {
          "age" => 66,
          "country" => "USA",
        }

        p hash1.merge(hash2) # {"name"=>"Jane", "sex"=>"female", "age"=>66, "country"=>"USA"}
        p hash1 # {"name"=>"Jane", "sex"=>"female", "age"=>35}
      `,
    },
    {
      val: <h5>Update</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash1 = {
          "name" => "Jane",
          "sex" => "female",
          "age" => 35
        }
        hash2 = {
          "age" => 66,
          "country" => "USA",
        }

        p hash1.update(hash2) # {"name"=>"Jane", "sex"=>"female", "age"=>66, "country"=>"USA"}
        p hash1 # {"name"=>"Jane", "sex"=>"female", "age"=>66, "country"=>"USA"}
      `,
    },
    {
      val: <h5>Has key, value</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash = {
          "name" => "Jane",
          "sex" => "female",
          "age" => 35
        }
        p hash.has_key?("name") # true
        p hash.has_value?("Jane") # true
        
      `,
    },
    {
      val: <h5>Has key, value</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        hash = {}
        p hash.empty? # true
      `,
    },
    {
      val: <h3>Conditions</h3>,
    },
    {
      val: <h5>if</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        if 2 > 1
          p "2 is greater than 1"
        end
        # "2 is greater than 1"
      `,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p "2 is greater that 1" if 2 > 1 # "2 is greater that 1"
      `,
    },
    {
      val: <h5>if-else</h5>,
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
      `,
    },
    {
      val: <h5>else-if</h5>,
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
      `,
    },
    {
      val: <h5>unless (negated 'if')</h5>,
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
      `,
    },
    {
      val: <h5>Ternary statement</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        yesOrNo = 2 > 1 ? 'yes' : 'no'
        p yesOrNo # "yes"
      `,
    },
    {
      val: <h5>Case statement</h5>,
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
          exit
        when 2
          p "Tue"
          exit
        when 3
          p "Wed"
          exit
        when 4
          p "Thu"
          exit
        when 5
          p "Fri"
          exit
        when 8..Float::INFINITY
          p "not valid"
          exit
        else
          p "weekend"
        end

        # Enter day num: 5
        # "Fri"

        # Enter day num: 7
        # "weekend"

        # Enter day num: 10
        # "not valid"
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
      `,
    },
    {
      val: <h5>while</h5>,
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
      `,
    },
    {
      val: <h5>do</h5>,
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
      `,
    },
    {
      val: <h5>until</h5>,
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
      `,
    },
    {
      val: <h5>each</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        arr = [1, 2, 3, 4, 5]
        arr.each do |num|
          p num
        end
        # 1 2 3 4 5
      `,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        (1..5).each do |num|
          p num
        end
        # 1 2 3 4 5
      `,
    },
    {
      val: <h5>break</h5>,
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
      `,
    },
    {
      val: <h5>next</h5>,
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
      `,
    },
    {
      val: <h5>redo (repeat current iteration)</h5>,
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
      `,
    },
    {
      val: <h5>retry</h5>,
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
      `,
    },
    {
      val: <h3>Function (method)</h3>,
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
      `,
    },
    {
      val: <h3>Catch errors (begin-rescue)</h3>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        print "Enter a number : "
        first_num = gets.to_i
        
        print "Enter Another : "
        second_num = gets.to_i
        
        begin
          answer = first_num / second_num
        
        rescue # You could use rescue ZeroDivisionError
          puts "You can't divide by zero"
          exit
        end
        
        puts "#{first_num} / #{second_num} = #{answer}"

        # Enter a number : 5
        # Enter Another : 0
        # You can't divide by zero
      `,
    },
    {
      val: <h3>Symbols</h3>,
    },
    {
      val: <ul>
        <li>Symbols are strings that can't be changed</li>
        <li>Use them to speed string comparisons</li>
        <li>Use them if string value won't change & no need to access to string methods</li>
        <li>Many Ruby methods take symbols as arguments</li>
        <li>Symbols are used as keys for hashes</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        p :derek # :derek
        p :derek.to_s # "derek"
        p :derek.class # Symbol
        p :derek.object_id # 1101468
      `,
    },
    {
      val: <h3>Class</h3>,
    },
    {
      val: <h5>Initialize, getter, setter, method, self</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        class Car
          @brand
          @model
          @topSpeed
        
          def initialize(brand = "some brand", model = "some model", topSpeed = 100)
            @brand = brand
            @model = model
            @topSpeed = topSpeed
            puts "creating Car object"
          end
        
          # setter 1
          def set_brand(new_brand)
            # We can eliminate bad input in our setters
            if new_brand == "Apple"
              puts "Apple is not a car brand"
            else
              @brand = new_brand
            end
          end 
        
          # setter 2
          def model=(new_model)
            @model = new_model
          end 
        
          # getter
          def brand
            @brand 
          end
          def model
            @model 
          end
          def topSpeed
            @topSpeed 
          end
        
          # method
          def tellAboutCar()
            p "your car is #{self.brand} #{self.model} with top speed #{self.topSpeed}" 
          end
        
        end
        
        someCar = Car.new
        p someCar.brand # "some brand"
        someCar.set_brand("Toyota")
        p someCar.brand # "Toyota"
        someCar.set_brand("Apple") # Apple is not a car brand
        p someCar.brand # "Toyota"
        tesla = Car.new("Tesla", "Model 3", "220")
        p tesla.brand # "Tesla"
        tesla.model = "Modle Y"
        tesla.tellAboutCar() # "your car is Tesla Modle Y with top speed 220"
      `,
    },
    {
      val: <h5>Accessors (shortcut for getters & setters)</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        class Dog
          attr_reader :name, :height, :weight
          attr_writer :name, :height, :weight
          
          # or just
          # attr_accessor :name, :height, :weight
          
          def bark
            return "Generic Bark"
          end
        end
          
        rover = Dog.new
        rover.name = "Rover"
        p rover.name # "Rover"
        p rover.bark # "Generic Bark"
      `,
    },
    {
      val: <h5>Inherit</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        class Dog
          attr_accessor :name, :height, :weight
          
          def bark
            return "Generic Bark"
          end
        end
        
        class GermanShepard < Dog
          def bark
            return "Loud bark"
          end
        end
        
        chelsy = GermanShepard.new
        chelsy.name = "Chelsy"
        p chelsy.name, chelsy.bark() # "Chelsy" "Loud bark"
      `,
    },
    {
      val: <h5>Polymorphism</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        class Bird
          def tweet(bird_type)
            bird_type.tweet
          end
        end
        
        class Cardinal < Bird
          def tweet
            p "Tweet tweet"
          end
        end
        
        class Parrot < Bird
          def tweet
            p "Squawk"
          end
        end
        
        generic_bird = Bird.new
        generic_bird.tweet(Cardinal.new) # "Tweet tweet"
        generic_bird.tweet(Parrot.new) # "Squawk"
      `,
    },
    {
      val: <h3>Module</h3>,
    },
    {
      type: 'text',
      val: (
        <>
          Modules hold methods, but unlike classes, modules can not be instantiated, meaning it is
          not possible to create objects from a module. With modules we can share methods between
          classes.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        # animal.rb
        module Animal
          def make_sound
            puts "Grrrrrr"
          end
        end
      `,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        # file.rb
        load 'animal.rb'

        class Dog
          include Animal
        end

        rover = Dog.new
        rover.make_sound # Grrrrrr
      `,
    },
    {
      val: <h3>Enumerable</h3>,
    },
    {
      val: <>Classes that include the Enumerable module get nice methods.
        To make class enumerable we have to define <code>each</code> function.
      </>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        class Menu
          include Enumerable
        
          # Each provides items one at a time
          def each
            yield "pizza"
            yield "spaghetti"
            yield "salad"
            yield "bread"
            yield "water"
          end
        end
        
        menu_options = Menu.new
        
        # cycle through all items
        menu_options.each do |item|
          puts "Would you like : #{item}" # "pizza" "spaghetti" "salad" "bread" "water" "pizza" 
        end
        
        # check if we have an item
        p menu_options.find { |item| item == "apple"} #nil
        p menu_options.find { |item| item == "pizza"} # pizza
        
        # return items over 5 letters in length
        p menu_options.select { |item| item.size > 5 } # ["spaghetti"]
        
        # reject items that meet the criteria
        p menu_options.reject { |item| item.size > 5 } # ["pizza", "salad", "bread", "water"]
        
        # first item
        p menu_options.first # "pizza"
        
        # first 2 items
        p menu_options.take(2) # ["pizza", "spaghetti"]
        
        # everything except first 2
        p menu_options.drop(2) # ["salad", "bread", "water"]
        
        # min
        p menu_options.min # "bread"
        
        # max
        p menu_options.max # "water"
        
        # sort
        p menu_options.sort # ["bread", "pizza", "salad", "spaghetti", "water"]
        
        # reverse
        menu_options.reverse_each { |item| p item} # "water", "bread", "salad", "spaghetti", "pizza"
      `,
    },
    {
      val: <h3>File</h3>,
    },
    {
      val: <h5>Create, add, read</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        # Returns a File object for writing
        myFile = File.new("file.txt", "w")

        # write text in the file
        myFile.puts "1st line"
        myFile.puts "2nd line"
        
        # Closes the file
        myFile.close
        
        # Read data from the defined file
        data_from_file = File.read("file.txt")
        p data_from_file # "1st line\\n2nd line\\n"
      `,
    },
    {
      val: <h5>Append</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        myFile = File.new("file.txt", "a")
        myFile.puts "3rd line"
        myFile.close
        p File.read("file.txt") # "1st line\n2nd line\n3rd line\n"
      `,
    },
    {
      val: <h5>Process text</h5>,
    },
    {
      type: 'code',
      lang: 'ruby',
      val: `
        File.open("file.txt") do |line|
          line.each do |item|
            p item
          end
        end
        # "1st line\\n"
        # "2nd line\\n"
        # "3rd line\\n"
      `,
    },
    {
      val: <><Lnk path="https://overapi.com/ruby">Ruby cheat-sheet</Lnk> on every property and method.</>,
    },
  ],
}
