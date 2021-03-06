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

<details>
  <summary>
    <b>20190716 / 5kyu - Weight for weight - JS</b>
  </summary>
  <p>

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example `99` will have "weight" `18`, `100` will have "weight" `1` so in the list `100` will come before `99`. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

#### Example:

`"56 65 74 100 99 68 86 180 90"` ordered by numbers weights becomes:
`"100 180 90 56 65 74 68 86 99"`

When two numbers have the same "weight", let us class them as if they were strings and not numbers: `100` is before `180` because its "weight" (1) is less than the one of `180` (9) and `180` is before `90` since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

#### Notes

- it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
- Don't modify the input
- For C: The result is freed.

[My Practice](https://github.com/DalYoon/codewars/blob/master/practice/5kyu/Weight_for_weight.js) <br/>
[Test Code](https://github.com/DalYoon/codewars/blob/master/test/5kyu/Weight_for_weight.test.js)

  </p>
</details>

<details>
  <summary>
    <b>20190717 / 5kyu - Where my anagrams at? - JS</b>
  </summary>
  <p>

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

```javascript
"abba" & ("baab" == true);
"abba" & ("bbaa" == true);
"abba" & ("abbba" == false);
"abba" & ("abca" == false);
```

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

```javascript
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```

[My Practice](https://github.com/DalYoon/codewars/blob/master/practice/5kyu/Where_my_anagrams_at.js) <br/>
[Test Code](https://github.com/DalYoon/codewars/blob/master/test/5kyu/Where_my_anagrams_at.test.js)

  </p>
</details>

<details>
  <summary>
    <b>20190722 / 6kyu - Reverse polish notation calculator - JS</b>
  </summary>
  <p>

Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression `5 1 2 + 4 * + 3 -` (which is equivalent to `5 + ((1 + 2) * 4) - 3` in normal notation) should evaluate to `14`.

For your convenience, the input is formatted such that a space is provided between every token.
Empty expression should evaluate to `0`.

Valid operations are `+`, `-`, `*`, `/`.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).

[My Practice](https://github.com/DalYoon/codewars/blob/master/practice/6kyu/Reverse_polish_notation_calculator.js) <br/>
[Test Code](https://github.com/DalYoon/codewars/blob/master/test/6kyu/Reverse_polish_notation_calculator.test.js)

  </p>
</details>

<details>
  <summary>
    <b>20190723 / 6kyu - The Supermarket Queue - JS</b>
  </summary>
  <p>

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

#### input

- customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.

- n: a positive integer, the number of checkout tills.

#### output

The function should return an integer, the total time required.

---

### Important

Please look at the examples and clarifications below, to ensure you understand the task correctly :)

---

### Examples

```javascript
queueTime([5, 3, 4], 1);
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10, 2, 3, 3], 2);
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2, 3, 10], 2);
// should return 12
```

#### Clarifications

- There is only ONE queue serving many tills, and
- The order of the queue NEVER changes, and
- The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

[My Practice](https://github.com/DalYoon/codewars/blob/master/practice/6kyu/The_Supermarket_Queue.js) <br/>
[Test Code](https://github.com/DalYoon/codewars/blob/master/test/6kyu/The_Supermarket_Queue.test.js)

  </p>
</details>
