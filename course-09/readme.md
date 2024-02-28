# Course 09

## Code review for a created JS Math operations calculation simple application

1. DOM Semantics: don't put a button in a span  - `Recording minute 0:02:05`
2. Event listeners, event handlers - `Recording minute 0:03:23`
3. DOM Elements - `Recording minute 0:06:30`
4. Inline Event listeners - `Recording minute 0:07:50`
5. Getting a refference to a DOM Element - `Recording minute 0:09:45`
6. Why sould a DOM Element refference be declared as global constant - to avoid searching in the DOM for the same element each time an event is triggered - `Recording minute 0:22:03`

## Creating a JavaScript Math application 

The computer creates 2 random numbers that are displayed in the browser. It also displays 3 possible answers. The user must chose the correct value.

1. Creating the HTML structure and CSS styling - `Recording minute 0:35:30`

2. Creating a function that creates a random number - `Recording minute 0:44:34`

3. Displaying the two random numbers in the browser interface - `Recording minute 0:57:06`

4. Creating a button to trigger the generation of the numbers - `Recording minute 01:02:33`

5. Creating the HTML structure and CSS for the possible answers - `Recording minute 01:19:05` 

6. Generating the possible answers - `Recording minute 01:27:10`

    - INTERMEDIARY STEP 1: generating an array with the correct value as the firts element, and the next and previous values - `Recording minute 01:29:07`

    - INTERMEDIARY STEP 2: generating an array with the correct value as the firts element and two random values - `Recording minute 01:34:47`

    - INTERMEDIARY STEP 3: generating an array with the correct value  as the firts element and other two random _**UNIQUE**_ values - `Recording minute 01:35:46`

    - INTERMEDIARY STEP 4: Testing the algorithm for generating the UNIQUE values - `Recording minute 01:50:09`

    - INTERMEDIARY STEP 5: Shuffle the generated possible answers - `Recording minute 02:08:52`

7. Displaying the possible answers in the browser UI - `Recording minute 02:08:52`

8. Adding events listeners on the displayed answers - `Recording minute 02:32:21`
    - Using index of the element (0, 1, 2) as parametes. - `Recording minute 02:35:35`
    - Using the id property of the clicked element - `Recording minute 02:39:05`
    - Using the event object. - `Recording minute 02:44:03`