## Essential Question

### Semantics
* What are some semantic HTML tags?
  - Writing semantic HTML refers to using tags that are descriptive about the 
   markup that is contained.
  - `p`, `headers`, `nav`, `figure`, `article`
  - https://developer.mozilla.org/en-US/docs/Glossary/Semantics
* What are the non-semantic HTML tags?
  - `div`, `span`
* What are the benefits of writing HTML semantically?
  - Provides better accessibility for visually impaired users
  - Allows developers to know the intended use of our html content
  - Allows for better SEO
* What are the benefits of using semantic CSS class/ID names?
  - Allows us to write more maintainable css
* What are `<div>`s and `<span>`s and why are they used?
  - `Div`s are used to contain large blocks of HTML content, and `span`s are used
    easily style portions of text
* How do `<div>`s and `<span>`s differ?
  - The default display property for `div`s is `display: block`, which makes them
  - render one underneath the other, while `span`s are by default `display: inline`,
  - which makes them side by side.

### CSS Selectors
* What is a CSS selector?
  - The identifier that is used to style different html elements
* What is "the cascade" and how does this impact the way styling is applied to HTML elements?
  - Refers to the fact that CSS can override styles that have come before it
* What are the three ways we can add CSS to a html page ?
  - inline styles
  - external stylesheets
  - using the `style` tag in the head
* What is _specificity_ and how is it calculated?
  - Specificity is how CSS determines what style to apply; the ruleset that
    has the highest specificty will appy. 
  - id > class > type
     1    0       0   #test
     0    1       0   .test
     0    0       1   div
* How do specificity and the cascade work together to determine styling of HTML elements?
  - We can use the properties of cascase and specificity to determine which style rules apply 
* What is the benefit of keeping our specificity weights _low_
  - Makes it easier to override styles

### The Box Model
* What are the four different parts of the box model?
* What is padding, margin, and border and how does each change the layout of content?
* How does padding, margin, and border impact the width and height of a content box?
* What is the `box-sizing` property and how does the `border-box` value change the way width and height are calculated?
* What is the best way to ensure that all of your element use `border-box` sizing by default?
* How does a negative margin effect a content box?
* What is _margin collapse_?

### Display and Layout Basics
* What is the _normal flow_ of HTML content?
* What are the three standard values of the `display` property and how do they differ?
* What are commonly used `block` elements?
* What are commonly used `inline` elements?
* How does `width`, `height`, `border`, `margin`, and `padding` affect _inline_ elements?
* How does `inline-block` styling differ from `block` and `inline` styling?

### Floats
* What does it mean to _float_ a block?
* Should we use floats to create layouts?
* What is the *one* thing that we should use floats for?

### Tables
* When should you utilize an HTML table?
* What specifically should you NOT use an HTML table to do?
* How do you allow cells to span multiple columns? Multiple rows?
* How do we apply common styling to elements in the same _column_ of our table?
* What is the purpose of `<thead>`, `<tbody>`, and `<tfoot>`?
* What is the `scope` attribute and when would we use it?

### Forms
* Why are forms the most important components in web application development?
* Generally speaking, when should we should we set the form `method` to `post`? When should it be set to `get`?
* What role does the `<fieldset>` tag play in helping us structure our HTML forms?
* How do we ensure that labels are directly associated with the input field(s) the reference?
* What is form validation and how do use it in our forms?