# Exercise 7: Javascript and Forms

In this exercise, you will now take the form from Exercise 5 and make
it respond to user input. This exercise will be a bit longer than the previous
ones but it will be closer to the things that you will do in an actual
experiment. Use the skeleton in `exercises/07_js_forms/exercise.html`.

The page that you are building includes a form in which a user can provide some
information and when the user clicks on the submit button, the page will show a
response based on what the user entered.

## Steps

1. Setup the page by hiding all the elements that should be initially hidden.
These include the error messages and the entire response container. As you can
see, I put a `div` element around the response on the bottom of the page. A `div`
is basically just a box that can encapsulate other elements and you can hide and
make appear all of these elements but hiding or showing the containing `div`.

   There are several ways of setting up the page. One method is to use CSS and
   to hide elements by setting the `display` property to `none` as follows.

   ```
   .error {
     display: none;
   }
   ```

   This will hide all elements that have the `error` class, which in this case
   are all error messages. Another way of hiding elements when the page is being
   loaded is to use Javascript and to define a function that is being executed
   when the page is being loaded. You can define such a function within any
   Javascript file that you include as follows.

   ```
   $(document).ready(function() {
       //do some things when the page is loading  
   });
   ```

   As there is currently no CSS file included in the skeleton document, use
   the second option (JS) to hide error messages and everything that is part of
   the response. You should see only the form when you load the page.

2. Make sure that the user actually enters a name and selects an age, and display
   an error message otherwise.

   To do this, you will have to write a function that gets executed when a user
   clicks on the button. Let us call this function `handleButtonClick`. In this
   function let us call another function called `validateForm`. You can call a
   function from a function by using its name and adding parentheses after the
   name, e.g, to call `validateForm` add the following to the function body of
   `handleButtonClick`.

   ```
      validateForm()
   ```

   `validateForm` does not exist at this point, so you still have to define it
   and add some code for doing the actual validation. The reason why we are adding
   this code to the validation is simply readability. Try to keep your functions
   short and have meaningful names. Then it will be much easier to reuse parts of
   your code in different places and it will be much easier to read as compared to
   putting all your code into one big function.

   Inside `validateForm` you will have to write code that checks whether the user
   entered text into the `name` field and whether the user checked a radio button.

   If you want to check whether some condition is satisfied and if that is or is not
   the case, execute some code, you can use `if`-statements:

   ```
      if (CONDITION) {
        //execute this code only if CONDITION is true
      } else {
        //execute this code otherwise
      }
   ```

   The `else` and the block after it is optional. Conditions in Javascript can
   come in many different forms. For example, you can call a function that returns
   either `true` or `false`. Or you can compare whether a variable has a certain
   value (`variable == "VALUE"`). You will use the latter and compare what the user
   has entered to the empty string `""`. If what the user entered is the empty string,
   i.e., the user did not enter anything, then you want to show the error message
   with the id `#name-error`. You can get the value of a text input with the id
   `input-id` as following.

   ```
     $("#input-id").val()
   ```

   With all of this information you should now be able to write some code that checks
   whether there is text in the name field and display the error message otherwise.
   Also add `return false;` below the statement that displays the error message.
   You will make use of this later.

   Confirming that the user checked a radio button works similarly. Instead of
   comparing the value of a text input, we want to check whether there is an element
   with the right class name that has been checked. We can do that by retrieving all
   these elements and then checking whether the number of elements is not `1`.

   ```
    $(".age-input:checked").length != 1
   ```

   This code retrieves all the elements that have the class name `age-input` and
   which have been checked and then accesses the `length` property which tells us
   how many elements match this expression. This entire statement will be true if
   length does NOT equal 1 (`!=` means does not equal).

   With this information, you should now also be able to display an error message
   when a user does not check any of the radio buttons. Also in this case, add
   `return false;` below the statement that displays the error message. Finally,
   add `return true;` at the very bottom of the function body of `validateForm`.

   The last step is now to make sure that `handleButtonClick` is run when you click
   on the button. To do this, use again the `onclick` attribute of the button element.

   Now it should display an error message if you click on the button without
   entering anything.


3. Show a response based on the user input. Now you will use the values that a user
entered and show them a response message based on these values.

   To do this, you just have to add a few lines to `handleButtonClick`. There are
   two main steps involved. First, you will replace the content of the `span` elements
   with the `response-story`, `response-name`, and `response-occupation` ids.
   Then you will have to show the `response` container, so that it actually
   displays the message.

   To replace the content of an element, you can use either the `text` function
   or the `html` function. The former can just be used for text; the latter can
   also contain HTML elements. For example, to replace the text of `response-name`
   with _Bob_, you would use the following code.

   ```
      $("#response-name").text("Bob");
   ```

   If you wanted to insert an image instead, you could use the following code:

   ```
     $("#response-name").html('<img src="bob.jpg" width="100" height="100">');
   ```

   (Make sure to use single quotation marks `'` at the beginning and the end
   if you use quotation marks within a string.)

   With this information, you should now be able to extend your code so that
   the response gets populated with the values from the form and that it gets
   displayed when the user clicks the button.

4. Do some fine-tuning. There are probably still a few things that are not ideal
   at this point. Even if the user does not enter a name, the response will still
   appear. Also, the error messages won't go away once you correct your input.
   Fix both of these things. To prevent displaying the response if validation fails,
   you can make use of the fact that `validateForm` returns `true` or `false`, depending
   on whether validation succeeds or not. (That's why you added these `return` statements to
   `validateForm` -- go back to this function and try to understand when the function returns `true`
   and when it returns `false`).

   We can therefore use `validateForm` to check whether we should stop running `handleButtonClick`
   before it displays the response. Replace your call to `validateForm` with the following code.

   ```
      if (validateForm() == false) {
        return;
      }

   ```

   This code runs `validateForm` and if validation fails, it returns from `handleButtonClick`, i.e.,
   it stops executing the function at this point.

   The second thing you want to fix is that error messages disappear when a user clicks on the button again.
   You can do this by hiding all error messages at the top of `handleButtonClick` (importantly above your call to `validateForm` -- try to understand why)
   and also hide the response at this stage.

5. Clear the form after it was successfully submitted. One more step that you
   can do is clearing the form after it was successfully submitted. Currently,
   all the values remain in the inputs when you click on the button. To reset the form,
   you will have to reset the values of the individual inputs.

   To clear the text from a text input or a text box, you can set its value to `null`:

   ```
      $("#name-input").val(null);
   ```

   To un-check all radio buttons or checkboxes, include the following code:

   ```
     $("input[type=radio]").attr("checked", null);
     $("input[type=checkbox]").attr("checked", null);
   ```

   Ideally you would put all of these calls in a function `clearForm`, which you
   then call from `handleButtonClick`. But you can also just put all of the functionality
   directly into `handleButtonClick`.


6. (This is a bit more challenging and feel free to skip this/just look at the
  solution if you get stuck). Add a sentence "I see you like COLORS -- me too!"
  to the response. This should only be shown if a user checks one of the
  checkboxes and instead of COLORS you should display all the colors that a user
  selected joined by "and". (Hint: Useful functions are the [`each` function](https://api.jquery.com/each/), which
  can be used to iterate through a list of elements and the
  [`join`](https://www.w3schools.com/jsref/jsref_join.asp) function, which can
  be used to convert a list into a string by joining all the elements and putting
  some defined string between two elements.)

  There are many other things you could do to improve this application. For example, you could use
  CSS to style the form, the messages and the response.
