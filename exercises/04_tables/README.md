# Exercise 4: Tables

In this exercise you will create a simple table with images in the first row and captions in the second row.
Use the skeleton in `exercises/04_tables/exercise.html`.

While the use of tables for layouting purposes is frowned upon by professional web developers, they are really useful if you want to make sure that certain elements are aligned in your experiment. In this exercise, you are building a table with two rows and six columns to align images to their captions.

The basic structure of a table is a nesting of the [table](https://www.w3schools.com/tags/tag_table.asp), [tr](https://www.w3schools.com/tags/tag_tr.asp) (table row), and [td](https://www.w3schools.com/tags/tag_td.asp) (table data) tags as follows:

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

You can add anything such as texts, paragraphs, images, links, buttons, etc. into a table cell.

## Steps

1. Create a table with 2 rows and 6 columns. Embed `images/dog_small.jpg` (w:100px, h:66px) and `images_cat_small.jpg` (w:100px, h:71px) in each cell in the first row, alternating between the two images. In the second row, add a caption to each image (_Dog_) or (_Cat_).

2. You should now have a basic table with a row of images and a caption below each image. Tables can also be styled with CSS. To practice manipulating CSS properties, [center](https://www.w3schools.com/cssref/pr_text_text-align.asp) the caption below each image, make the [font color](https://www.w3schools.com/cssref/pr_text_color.asp) of the captions below the image of the cat red and of the ones below the dog images blue, and make it that the bottoms of all images are [aligned](https://www.w3schools.com/cssref/pr_pos_vertical-align.asp).
