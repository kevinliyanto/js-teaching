# Part 1

Teaching module:

- Printing with `console.log` and `process.stdout.write`
- Declaring variables (`let` / `const`)
- Basic data type: string, number, and boolean
- Control flow: choice / if-else statement

## Exercise 0: Print to stdout using console.log

Make a file called `hello.js`, and put:

```js
console.log("Hello world");
```

Run it on your shell

```sh
$ node hello.js
```

## Exercise 1: leap.js

Check if input (`rNumber`) is a leap year
If it is a leap year, print **Leap year**, else **Not a leap year**

```
$ node leap.js
Type a year: 2017
Not a leap year
$ node leap.js
Type a year: 2020
Leap year
```

## Exercise 2: cost.js

You want to buy an ice cream cone, but you have certain amount of money.
If you have enough money, specify how many ice cream cones you can get. Otherwise, say "I'm broke".

```
$ node cost.js
Price per cone: 2
Money: 5
I can buy 2 ice cream cones
$ node cost.js
Price per cone: 4
Money: 2
I'm broke
```

### Challenge

If price or money is invalid (less than or equal to 0, or `NaN`), say "Invalid input" and exit the program.

```
$ node cost.js
Price per cone: I love typescript
Invalid input
```