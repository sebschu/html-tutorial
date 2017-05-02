# Tables

In this exercise you will create a simple table with images in the first row and captions in the second row.
Use the skeleton in `exercises/04_tables/exercise.html`.

While the use of tables for layouting purposes is frowned upon by professional web developers, they are really useful if you want to make sure that certain elements are aligned in your experiment. In this exercise, you are building a table with two rows and six columns to align images to their captions.

The basic structure of tables is a nesting of the [table](), [tr]() (table row), and [td]() (table data) elements as follows:

```
  <table>
    <tr>
      <td>First row, first col</td>
      <td>First row, second col</td>
      <td>First row, third col</td>
    </tr>
    <tr>
      <td>Second row, first col</td>
      <td>Second row, second col</td>
      <td>Second row, third col</td>
  </table>
```

This snippet defines the structure of the following table:

<table>
  <tr>
    <td>First row, first col</td>
    <td>First row, second col</td>
    <td>First row, third col</td>
  </tr>
  <tr>
    <td>Second row, first col</td>
    <td>Second row, second col</td>
    <td>Second row, third col</td>
</table>



## Steps

1. Include the stylesheet `css/main.css` into the HTML document. This should change all the fonts to Helvetica (or some other sans-serif font if you don't have Helvetica installed).<br/>
  (See [information about the `link` tag](https://www.w3schools.com/tags/tag_link.asp))

2. Change the color of all links (`a` elements) to `red`. You won't have to edit anything in the HTML; all of this can be done in the CSS stylesheet)<br/>
  (See [information about the `color` CSS attribute](https://www.w3schools.com/cssref/pr_text_color.asp), and see [this page](https://www.w3schools.com/cssref/css_colors.asp) for a list of common colors)

3. Change the [color](https://www.w3schools.com/cssref/pr_text_color.asp), the [background](https://www.w3schools.com/cssref/pr_background-color.asp) and the [font size](https://www.w3schools.com/cssref/pr_font_font-size.asp) of the first paragraph and the fifth paragraph. This will involve adding something to the CSS file as well as adding something to the HTML file (Hint: classes!). Feel free to change these properties to any values; I used a dark red for the text `#cc0000`, set the font size to `20px` and set the background to a light gray `#cccccc`.

4. Format the word _dolor_ in the second paragraph and the words _Lorem ipsum_ in the sixth paragraph the same way as the first and the fifth paragraph *without* changing anything in the CSS file.

5. Make the first paragraph and _dolor_ in the second paragraph [bold](https://www.w3schools.com/cssref/pr_font_weight.asp) without changing the appearance of anything else. (Hint: You can apply multiple classes to an element by separating them with a space, e.g., `class="class1 class2"`.)

6. Let's pretend the fourth paragraph serves some special function. Give it an id and change the text color by using an id-selector to something other than black (e.g., a dark blue: `#0000cc`).
