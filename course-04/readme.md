# Course 04

## Recap
- Github repo cloning & git commands
- The modulus operator and examples to use it
- The logical operators: OR (|| - pipes), AND (&& - ampersands), NOT (! - exclamation mark)
- [Markdown language basics](https://www.markdownguide.org/basic-syntax), preview in VS Code and usage on repositories `recording minute 0:06:30`
- Generating a random number in JavaScript using [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) and [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) `recording minute 0:23:30`
- Implementing a guessing number game `recording minute 0:35:00`

## Decisional control structures 
Implementing a student picker program `recording minute 1:07:00`
- imbricated if-else solution `recording minute 1:12:24`
- if-else-if solutions `recording minute 1:17:40`
- switch statement `recording minute 1:27:00`
- if statement without else branch `recording minute 1:40:00`

## Using the CLI (command line interface) to create folders and files
- mkdir - create a directory
- touch - create a file

## Unary operators in JavaScript
- **Unary plus ( + )**: tries to convert the operand into a number
- **Unary negation ( - )**: tries to convert the operand into a number and negates after
- **Increment ( ++ )**: adds one to its operand. Pre-incrementation (++i) and post-incrementation (i++).
- **Decrement ( -- )**: decrements by one from its operand. Pre-decrementation (--i) and post-decrementation (i--).

## Iterative control structures
- The [while statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- The [for statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- The [do...while statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

## Working with git branches
- The **git checkout** command to change the working branch
- The **git checkout -b** comand to create a new branch and change to the created branch
- The **git merge** command to bring on the current branch the changes on the specified branch
- The **git push --set-upstream origin** command to push a locally created branch to the remote repository
- Viewing branches on github

## Independent Homework

### 1. MATH SKILLS PROGRAM (recap decisions and iterations)
Create a program that generates two random numbers between 1 and 99 and an operation (addition or subtraction). 

Display a prompt to the user and ask him to input the correct value. 

Check if the response given by the user is correct. If not, display the correct answer.

**EXTRA 1:** If the user provides an invalid number, don't display the correct answer, but keep prompting him for another answer until it is correct.

**EXTRA 2:** Prompt the user 10 times with different values and display the percentage of the correct answers.

**EXTRA 3:** Prompt the user with different values until he fails. Display the number of correct answers.

### 2. MARKDOWN FILES & GIT BRANCH 
Create on github a repository containg a list of resources (youtube videos, recipes, or places to visit).

The repo will have a main branch with the validated resources and a work-in-prorgess branch with resources that are just proposals for for the resources.