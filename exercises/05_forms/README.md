# Exercise 5: Forms

In this exercise you will learn how to add different types of input mechanism to an HTML page. Use the skeleton in `exercises/05_forms/exercise.html`.

Most ways of interaction are handled by *forms* in HTML. Forms were originally desinged to transmit data from a website to a server (e.g., a contact form or a login form to access a password-protected site) but they are also really handy for getting feedback from users. The five main built-in input types are
  * text boxes (one line of text input)
  * text areas (multiple lines of text input)
  * radio buttons (selecting between different choices, single choice)
  * checkboxes (selecting between different choices, multiple choice)
  * dropdown menus


All of these input elements should always be encapsulated in a `form` element of the following structure.

```
   <form action="#" onsubmit="return false;">
    YOUR INPUT ELEMENTS GO HERE
   </form>
```

The `action="#"` property instructs the browser that it should not send this data to any server -- you would modify that if you were actually building something like a contact form. `onsubmit="return false;"` disables the behavior that the page is reloaded when you hit return in a text box.

Another important concept about forms are *labels*. You can define spans of text to be the label of an element so that whenever a user clicks on the label, the corresponding input element will be activated. This is particularly useful for radio buttons and checkboxes because it allows users to click on a much larger area, but it is also convenient for other types of input.

To define a label, encapsulate the text in a `label` tag. Linking a label to an input can be done in two different ways. You can either put the input within the `label` element (top option) or you can use the `for` property of the `label` tag and set it to the id of the input element. The second option is useful when you want to put the label below or above the input, for example by putting them in different rows of a table.

```

<!-- Option 1 -->
<label> Label: <input type="text" ... ></label>


<!-- Option 2 -->
<label for="my-input"> Label: </label> <input type="text" id="my-input" ... ></label>

```

## Steps

1. Create a `form` element as shown above. You will put all the input elements within this element. (You won't see anything at this point, this is just preparation for the subsequent steps.)

2. Create a paragraph with a text [input](https://www.w3schools.com/tags/tag_input.asp) to enter a name and add a corresponding label to it. The input should have the name `name`. Also make sure to assign an `id` to the input element. This will be very useful in later exercises when you actually record the values of text inputs. When you click on the label, there should be a blinking cursor in the text box.

3. Create another paragraph with a [text box](https://www.w3schools.com/tags/tag_textarea.asp) and a corresponding label. Label the text box *Your life story* and name it `story`.

4. Create another paragraph with 4 [radio](https://www.w3schools.com/tags/tag_input.asp) buttons. Have a label *Age* in front of the four buttons, which does not correspond to any input (nothing should happen when you click on it) and then have a label for each of the radio buttons saying *0-20yrs*, *21-40yrs*, *41-60yrs*, *61+yrs*, respectively. In order to force a choice between these four, you will have to give all of them the same name, e.g., `age`. However, you want to give them different values (e.g., `0-20`, `21-40`, `41-60`, `61+`). It is also useful to assign the same class name to all of the radio buttons; this will make it easier to read the value of the checked button via Javascript.

5. Create another paragraph with 4 [checkboxes](https://www.w3schools.com/tags/tag_input.asp). Add an inactive label *Favorite Colors* in front of them, and for each checkbox add a corresponding label referring to a color (e.g., green, blue, red and yellow). When you click on one of the labels the corresponding checkbox should be checked (or un-checked if it has already been checked). Make sure to give the checkboxes different names (e.g., `color-green`, `color-blue`, ...) and it is again helpful to assign a class name to all checkboxes corresponding to a question.

6. Finally, create a [dropdown menu](https://www.w3schools.com/tags/tag_select.asp) with a label *Occupation* displayed above the dropdown. The menu should contain the entries *student*, *employed*, *unemployed*, and *retired*. Make again sure to assign an `id` to the input and make sure that menu is selected when you click on the label.
