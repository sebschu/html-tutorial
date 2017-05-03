# Exercise 6: Hiding and Showing Elements with Javascript

In this exercise, you will write Javascript functions that manipulate which elements of the HTML are visible. Use the skeleton in `exercises/06_js_show_hide/exercise.html`.

In this exercise, you'll start manipulating the HTML and CSS of a website based on user interaction. We start with some very simple manipulations: showing and hiding elements that match a certain CSS selector.

To do this, we will load the [jQuery](https://jquery.com/) library. jQuery is a really useful collection of Javascript functions that make manipulating HTML and CSS much easier. One great feature of jQuery is that you can access all HTML elements using their CSS selector. For example, you can easily access (and manipulate) all elements with a certain class name or an element with a certain id.

## Steps

1. Include the jQuery library. In order to use jQuery, you will have to include it in your HTML document. This works similarly as including a CSS file, simply add the following line within the `head` element of your document.

```
  <script type="text/javascript" src="js/jquery.js"></script>
```
2. Create a new Javascript file `function.js`, save it in the folder `js`, and include it in your HTML document after the statement to load jQuery.

3. Create a function `hideBold()`. You can define a function in `functions.js` (or any other Javascript file) as follows:

```
function FUNCTION_NAME(ARG1, ARG2, ...) {
  FUNCTION_BODY
}
```

For example, the following function takes in an argument message and writes this message to the console.

```
function logMessage(message) {
  console.log(message); //write message to the console
}
```

`hideBold()` should hide all elements that have the class `special`. See the documentation of the [`hide()` function](http://api.jquery.com/hide/) for information on how to hide elements with jQuery.

4. Create another function called `showBold()` which causes previously hidden elements with the class `special` to appear again.

5. Create another function called `toggleBlueParagraph()` which toggles the visibility (Hint: Check out the documentation of the [`toggle` function](http://api.jquery.com/toggle/)).


Even if you did everything right, clicking on the text on the top of the page won't work up until this point. We now have to tell the HTML file to execute these functions when you click. One of way of doing this is by using special links that point to the website itself (`href="#"`) and that call a Javascript function when someone clicks on it `onclick="myFunction();return false;"`. (`return false` is similarly to the case with the forms to prevent the pre-defined link behavior. Don't worry if you don't understand this, just use it whenever you use `onclick` in `a` elements.)

For example, the following code creates a link with the text *Go* and when someone clicks on it, the `myFunction()` function gets executed (which must be defined somewhere, e.g., in `function.js`.)

```
<a href="#" onclick="myFunction(); return false;">Go</a>
```

6. Activate the commands on top of the page. When a user clicks on *hide bold text*, the `hideBold()` function should be executed. Do the same for the other two commands.

If you now look at the website in a browser, you should be able to hide and show different paragraphs and text spans.
