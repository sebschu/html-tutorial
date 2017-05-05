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


   3. 
