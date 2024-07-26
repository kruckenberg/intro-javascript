# More Variables

Did you notice that, in the previous challenge, you created several variables?
The main variable had a single-letter name: `x`. The others had more
meaningful names: `meaningOfLife` and `aNegativeNumber`. While it's easier to
type `x` than `meaningOfLife`, it's easier to understand what code is doing
when variable names are more descriptive. In JavaScript, most programmers
use "camel case" names: when you're smashing together several words to
describe the value being stored:

- omit spaces
- the first word is lowercase
- each subsequent word is capitalized

The capital letters make the word have humps, like a camel. You don't _have_ to
use camel case, but it makes longer names easier to read.

Let's create a few descriptive variables:

```javascript
age = 11;
grade = 7;
heightInInches = 60;
```

Feel free to use your own age, grade and height when setting these variables.
If you want, confirm that you can recall the value of each.

So far we've created a lot of variables and set an initial value. But you can
also use variables in calculations:

```javascript
firstTestScore = 85;
secondTestScore = 90;
firstTestScore + secondTestScore;
// 175
```

You can also use variables to store the result of a calculation:

```javascript
sumOfTestScores = firstTestScore + secondTestScore;
sumOfTestScores;
// 175
```

You can even use a variable to update its own value:

```javascript
sumOfTestScores = sumOfTestScores + 100;
sumOfTestScores;
// 275
```

That works because JavaScript first evaluates the right side of the assignment.
It looks up the value of `sumOfTestScores`, adds `100` to it, and then assigns
the result back to `sumOfTestScores`.

Try to think of another case where you might create a variable and use its
current value to reassign or update its value. Test it out. Once you've got it,
click the "Complete" button.
