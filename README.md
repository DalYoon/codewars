# codewars

<details>
  <summary>
    <b>20190712 / 7kyu - Mumbling - JS</b>
  </summary>
  <p>

This time no story, no theory. The examples below show you how to write function accum:

#### Examples

```js
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

#### Note

The parameter of accum is a string which includes only letters from `a..z` and `A..Z`.

[My Practice](https://github.com/DalYoon/codewars/blob/master/practice/7kyu/Mumbling.js) <br/>
[Test Code](https://github.com/DalYoon/codewars/blob/master/test/7kyu/Mumbling.test.js)

  </p>
</details>

<details>
  <summary>
    <b>20190713 / 6kyu - Duplicate Encoder - JS</b>
  </summary>
  <p>

The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or `")"` if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

#### Examples

```js
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
```

#### Note

Assertion messages may be unclear about what they display in some languages. If you read `"...It Should encode XXX"`, the `"XXX"` is the expected result, not the input!

[My Practice](https://github.com/DalYoon/codewars/blob/master/practice/6kyu/Duplicate_Encoder.js) <br/>
[Test Code](https://github.com/DalYoon/codewars/blob/master/test/6kyu/Duplicate_Encoder.test.js)

  </p>
</details>

<details>
  <summary>
    <b>20190714 / 7kyu - Isograms - JS</b>
  </summary>
  <p>

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

```js
isIsogram("Dermatoglyphics") == true;
isIsogram("aba") == false;
isIsogram("moOse") == false; // -- ignore letter case
```

[My Practice](https://github.com/DalYoon/codewars/blob/master/practice/7kyu/Isograms.js) <br/>
[Test Code](https://github.com/DalYoon/codewars/blob/master/test/7kyu/Isograms.test.js)

  </p>
</details>

<details>
  <summary>
    <b>20190715 / 6kyu - Sort the odd - JS</b>
  </summary>
  <p>

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

#### Example

```js
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4];
```

[My Practice](https://github.com/DalYoon/codewars/blob/master/practice/6kyu/Sort_the_odd.js) <br/>
[Test Code](https://github.com/DalYoon/codewars/blob/master/test/6kyu/Sort_the_odd.test.js)

  </p>
</details>

<details>
  <summary>
    <b>20190716 / 7kyu - Vowel Count - JS</b>
  </summary>
  <p>

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.

[My Practice](https://github.com/DalYoon/codewars/blob/master/practice/7kyu/Vowel_Count.js) <br/>
[Test Code](https://github.com/DalYoon/codewars/blob/master/test/7kyu/Vowel_Count.test.js)

  </p>
</details>
