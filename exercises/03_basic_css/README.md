# Basic HTML and CSS

In this exercise, you will include a CSS stylesheet into a HTML document, and you will edit both the HTML and the CSS to change the appearance of some of the paragraphs, some words, and links. Use the skeleton in `exercises/03_basic_css/exercise.html`.

One important concept of CSS are so-called *selectors*. A selector is an expression that defines to which elements in the HMTL certain styles should apply. Selectors can be defined in terms of three different identifiers:
 - tag names (e.g., `p`, `a`, `span`, `body`)
 - ids of elements prefixed by `#` (e.g., `#main-paragraph` which corresponds to the element with the property `id="main-paragraph"`; ids should be unique in an HTML document)
 - classes of elements prefixed by `.`  (e.g., `.highlighted-paragraph` which corresponds to all elements with the property `class="highlighted-paragraph"`; classes can be applied to multiple elements)

Selectors can also be combined. An expression of the form `EXPR1 EXPR2` (two expressions connected by a space) matches all elements that match `EXPR2` whose parent (or an element any level above) matches `EXPR1`. For example `p a` matches all links (`a`) within paragraphs (`p`).

If two or more expressions are combined without a space (e.g., `a.highlight.special`) then these expressions match all elements that match all of the invidual expressions at the same time (in this case, all links which have the classes `highlight` and `special`).

See [this page](https://www.w3schools.com/cssref/css_selectors.asp) for more information on selectors.

## Steps

1. Include the stylesheet `css/main.css` into the HTML document. This should change all the fonts to Helvetica (or some other sans-serif font if you don't have Helvetica installed).<br/>
  (See [information about the `link` tag](https://www.w3schools.com/tags/tag_link.asp))

2. Change the color of all links (`a` elements) to `red`. You won't have to edit anything in the HTML; all of this can be done in the CSS stylesheet)<br/>
  (See [information about the `color` CSS attribute](https://www.w3schools.com/cssref/pr_text_color.asp), and see [this page](https://www.w3schools.com/cssref/css_colors.asp) for a list of common colors)

3. Change the [color](https://www.w3schools.com/cssref/pr_text_color.asp), the [background](https://www.w3schools.com/cssref/pr_background-color.asp) and the [font size](https://www.w3schools.com/cssref/pr_font_font-size.asp) of the first paragraph and the fifth paragraph. This will involve adding something to the CSS file as well as adding something to the HTML file (Hint: classes!). Feel free to change these properties to any values; I used a dark red for the text `#cc0000`, set the font size to `20px` and set the background to a light gray `#cccccc`.

4. Format the word _dolor_ in the second paragraph and the words _Lorem ipsum_ in the sixth paragraph the same way as the first and the fifth paragraph *without* changing anything in the CSS file.

5. Make the first paragraph and _dolor_ in the second paragraph [bold](https://www.w3schools.com/cssref/pr_font_weight.asp) without changing the appearance of anything else. (Hint: You can apply multiple classes to an element by separating them with a space, e.g., `class="class1 class2"`.)

6. Let's pretend the fourth paragraph serves some special function. Give it an id and change the text color by using an id-selector to something other than black (e.g., a dark blue: `#0000cc`).
