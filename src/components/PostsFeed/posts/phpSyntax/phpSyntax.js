import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const phpSyntax = {
  title: 'PHP basic syntax',
  date: '2021.12.20',
  tagsArr: ['php', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path="https://www.php.net/downloads.php">Install PHP</Lnk>.
          In my case I just downloaded <Lnk path="https://windows.php.net/download#php-8.1">window package</Lnk> and
          unzipped it into <code>/C/php/</code> folder. Type <code>/C/php/php.exe -v</code> and get <CodeOutput>PHP 8.1.1 (cli)</CodeOutput>
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
          Create <code>file.php</code> inside <code>/C/php/myFolder/</code> with
          following code <CodeSpan lang="php">{'<?php echo "hi" ?>'}</CodeSpan> and execute the file
          by <code>/C/php/php.exe /C/php/myFolder/file.php</code> and got <CodeOutput>hi</CodeOutput> in the terminal
        </>
      ),
    },
    {
      val: <h3>Output</h3>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          echo "hi\\n"; # hi + new line
          echo 'hi'; # \\n not working in single quotes
          print "hi"; # hi
          var_dump('hi'); # string(2) "hi"
          print_r('hi'); # hi
        ?>
      `,
    },
    {
      val: <h3>Comment</h3>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          # comment

          // comment
          
          /*
            multiline
            comment
          */
        ?>
      `,
    },
    {
      val: <h3>Variable</h3>,
    },
    {
      val: <>Starts with dollar sign <kbd>$</kbd></>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $num = 5;
          echo $num;
        ?>
      `,
    },
    {
      val: <h3>Constant</h3>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
      <?php
        define('PI', 3.1415926);
        echo PI; # 3.1415926
      ?>
      `,
    },
    {
      val: <h3>Strings</h3>,
    },
    {
      val: <h5>Concatenation</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          echo "Hello "."John"."\\n"."I am your robot";
          # Hello John
          # I am your robot
        ?>
      `,
    },
    {
      val: <h5>Interpolation</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $str = 'John';
          echo "Hi, $str. How are you?"; # Hi, John. How are you?
          echo "Hi, {$str}. How are you?"; # Hi, John. How are you?
          echo 'Hi, '.$str. '. How are you?'; # Hi, John. How are you?
          echo 'Hi, '.$str. '. How are you?'; # Hi, John. How are you?
        ?>
      `,
    },
    {
      val: <h5>Multiline string</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $information = <<<XXX
            line 1
            line 2
          XXX;
          echo $information;

          # line 1
          # line 2
        ?>
      `,
    },
    {
      val: <h5>Length</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          echo strlen("abcd"); # 4
        ?>
      `,
    },
    {
      val: <h5>Trim</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          var_dump(ltrim("   abcd   ")); # string(7) "abcd   "
          var_dump(rtrim("   abcd   ")); # string(7) "   abcd"
          var_dump(trim("   abcd   ")); # string(4) "abcd"
        ?>
      `,
    },
    {
      val: <h5>Uppercase, lowercase</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          echo strtoupper("john"); # JOHN
          echo strtolower("JOHN"); # john
          echo ucfirst("john"); # John
        ?>
      `,
    },
    {
      val: <h5>Split, explode</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          var_dump(explode('ll', 'hello'));
          /*
            array(2) {
              [0] => string(2) "he"
              [1] => string(1) "o"
            }
          */

          var_dump(str_split('hello'));
          /*
            array(5) {
              [0] => string(1) "h"
              [1] => string(1) "e"
              [2] => string(1) "l"
              [3] => string(1) "l"
              [4] => string(1) "o"
            }
          */
        ?>
      `,
    },
    {
      val: <h5>Substring</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          echo substr('hello', 0, 3) # hel
        ?>
      `,
    },
    {
      val: <h5>Position</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          echo strpos('hello', 'e') # 2
        ?>
      `,
    },
    {
      val: <h5>Replace</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          echo str_replace('e', 'a', 'hello') # hallo
        ?>
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
      lang: 'php',
      val: `
        <?php
          echo (5 + 2); # 7
          echo (5 - 2); # 3
          echo (5 * 2); # 10
          echo (5 / 2); # 2.5
          echo (integer) (5 / 2); # 2
          echo (5 % 2); # 1
        ?>
      `,
    },
    {
      val: <h5>Comparison</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        == === != !== < > <= >=
      `,
    },
    {
      val: <h5>Logical</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        && || !
      `,
    },
    {
      val: <h3>Data types</h3>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          echo gettype(5); # integer
          echo gettype(5.123); # double
          echo gettype('hi'); # string
          echo gettype(true); # boolean
          echo gettype([1, 2, 3]); # array
          echo gettype(NULL); # NULL

          class Car {
            public $color;
            public $model;
            public function __construct($color, $model) {
              $this->color = $color;
              $this->model = $model;
            }
            public function message() {
              return "My car is a " . $this->color . " " . $this->model . "!";
            }
          }
          
          $myCar = new Car("black", "Volvo");
          echo $myCar -> message();
          echo gettype($myCar); # object
        ?>
      `,
    },
    {
      val: <h5>Type conversion</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          echo (integer) (5.123); # 5
          echo (integer) ("66 times"); # 66

          $decimalNum = 2.3456;
          printf ("decimal num = %.2f </br>", $decimalNum);
            // Other conversion codes
            // b : integer to binary
            // c : integer to character
            // d : integer to decimal
            // f : double to float
            // o : integer to octal
            // s : string to string
            // x : integer to hexadecimal
        ?>
      `,
    },
    {
      val: <h3>Reference</h3>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $num = 5;
          $refToNum = &$num;
          $num = 100;
          echo $refToNum; # 100
        ?>
      `,
    },
    {
      val: <h3>Conditionals</h3>,
    },
    {
      val: <h5>If-elseif-else</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          if(5 == 10) {
            echo "5 = 10";
          } elseif(((5 > 10) && (10 > 20)) || (!true === true)) {
            echo "(5 > 10) && (10 > 20))";
          } else {
            echo "all above was false";
          }
          # all above was false
        ?>
      `,
    },
    {
      val: <h5>Ternary operator</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $num = 15 > 10 ? 'bigger' : 'smaller';
          echo $num; # bigger
        ?>
      `,
    },
    {
      val: <h5>Switch statement</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $name = 'John';

          switch($name) {
            case "Derek":
              echo "Hello Derek";
              break;
            case "John":
              echo "Hello John";
              break;
            default:
              echo "Hello unknown customer";
              break;
          }
        ?>
      `,
    },
    {
      val: <h3>Loops</h3>,
    },
    {
      val: <h5>for</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          for ($num = 1; $num <= 10; $num++) {
            echo $num.', '; # 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
          }
        ?>
      `,
    },
    {
      val: <h5>break, continue</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          for ($num = 1; $num <= 10; $num++) {
            if($num === 9) break; # or exit();
            if($num === 5) continue; 
            echo $num.', '; # 1, 2, 3, 4, 6, 7, 8, 
          }
        ?>
      `,
    },
    {
      val: <h5>while</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $num = 0;
          while ($num < 5) {
            echo ++$num . ', '; # 1, 2, 3, 4, 5, 
          }
        ?>
      `,
    },
    {
      val: <><Lnk path="https://overapi.com/php">PHP cheat-sheet</Lnk> on every property and method.</>,
    },
    {
      val: <h3>Arrays</h3>,
    },
    {
      val: <h5>Indexed array</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $arr = array(1, 2, 3, 4, 5);
          echo $arr[0]; # 1
        
          $arr = [1, 2, 3, 4, 5];
          echo $arr[0]; # 1
        ?>
      `,
    },
    {
      val: <h5>For each</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $arr = [1, 2, 3, 4, 5];
          foreach($arr as $num) {
            echo $num; # 12345
          }
        ?>
      `,
    },
    {
      val: <h5>Associative array (key-value pairs)</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $arr = array('name' => 'John', 'sex' => 'male', 'age' => 35);
          foreach($arr as $key => $value) {
            echo $key.' - '.$value."\\n";
          }
          # name - John
          # sex - male
          # age - 35

          echo $arr['name']; # John

          $arr['name'] = 'Jane';
          echo $arr['name']; # Jane
        ?>
      `,
    },
    {
      val: <h5>Add, modify</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $arr = [1, 2, 3];
          $arr[2] = 10;
          $arr[3] = 100;

          print_r($arr); # John
          /*
          Array
            (
              [0] => 1
              [1] => 2
              [2] => 10
              [3] => 100
            )
          */
        ?>
      `,
    },
    {
      val: <h5>Combine</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $arr1 = array('name' => 'John');
          $arr2 = array('name' => 'Anton', 'sex' => 'male', 'age' => 36, 'isHappy' => "yes");
          $arr3 = $arr1 + $arr2;
          print_r($arr3);
          /*
            Array
            (
              [name] => John
              [sex] => male
              [age] => 36
              [isHappy] => yes
            )
          */
        
        ?>
      `,
    },
    {
      val: <h5>Compare</h5>,
    },
    {
      val: <>Compares by values, not by reference, like in JS</>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $arr1 = [1, 2, 3];
          $arr2 = [1, 2, 3];
          var_dump($arr1 === $arr2); # bool(true)
        ?>
      `,
    },
    {
      val: <h5>Sort</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          // sort strings
          $arr = ['a', 'c', 'e', 'b', 'd'];
          sort($arr, SORT_STRING);
          print_r($arr);
          /*
            Array
            (
              [0] => a
              [1] => b
              [2] => c
              [3] => d
              [4] => e
            )
          */

          // sort numbers
          $arr = [1, 5, 2, 4, 3];
          var_dump(sort($arr, SORT_NUMERIC)); # bool(true)
          print_r($arr);
          /*
            Array
            (
              [0] => 1
              [1] => 2
              [2] => 3
              [3] => 4
              [4] => 5
            )
          */
          
          // reverse
          rsort($arr, SORT_NUMERIC);
          print_r($arr);
          /*
            Array
            (
              [0] => 5
              [1] => 4
              [2] => 3
              [3] => 2
              [4] => 1
            )
          */
          
          // sort with keys
          asort($arr);
          print_r($arr);
          /*
            Array
            (
              [0] => 1
              [2] => 2
              [4] => 3
              [3] => 4
              [1] => 5
            )
          */

          // sort by keys
          ksort($arr);
          print_r($arr);
          /*
            Array
            (
              [0] => 1
              [1] => 5
              [2] => 2
              [3] => 4
              [4] => 3
            )
          */
        ?>
      `,
    },
    {
      val: <h5>Map</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
      <?php
        $func = function($val) {
          return $val * 2;
        };
        
        $arr = [1, 2, 3];
        print_r(array_map($func, $arr));

        /*
          Array
          (
            [0] => 2
            [1] => 4
            [2] => 6
          )
        */
      ?>
      `,
    },
    {
      val: <h5>Filter</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          function odd($var) {
            return $var & 1;
          }
        
          $arr1 = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5];
          $arr2 = [6, 7, 8, 9, 10, 11, 12];
        
          print_r(array_filter($arr1, "odd"));
          # Array ( [a] => 1 [c] => 3 [e] => 5 )

          print_r(array_filter($arr2, "odd"));
          # Array ( [1] => 7 [3] => 9 [5] => 11 )
        ?>
      `,
    },
    {
      val: <h3>Function</h3>,
    },
    {
      val: <h5>Function declaration</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          function sum($num1, $num2) {
            return $num1 + $num2;
          }
          echo sum(1,2) # 3
        ?>
      `,
    },
    {
      val: <h5>Function expression</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $sum = function($num1, $num2) {
            return $num1 + $num2;
          };
          echo $sum(1, 2); # 3
        ?>
      `,
    },
    {
      val: <h5>Arrow function (lambda)</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $sum = fn($num1, $num2) => $num1 + $num2;
          echo $sum(1,2) # 3
        ?>
      `,
    },
    {
      val: <h3>File</h3>,
    },
    {
      val: <h5>Create, write</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $currentFolder = __DIR__; # C:\\php\\myFolder
          $myfile = fopen($currentFolder."\\file.txt", "w") or die("Unable to open file!");
          fwrite($myfile, "Line 1\\n");
          fwrite($myfile, "Line 2\\n");
          fclose($myfile);
        ?>
      `,
    },
    {
      val: <h5>Read</h5>,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
        <?php
          $currentFolder = __DIR__; # C:\\php\\myFolder
          $myfile = fopen($currentFolder."\\file.txt", "r") or die("Unable to open file!");
          echo fread($myfile,filesize($currentFolder."\\file.txt"));
          fclose($myfile);
          # Line 1
          # Line 2
        ?>
      `,
    },
    {
      val: <><Lnk path="https://overapi.com/php">PHP cheat-sheet</Lnk> on every property and method.</>,
    },
  ],
}
