# barrel.css
A CSS Framework aiming to be as opinionated as possible for maximum restyling possibilities.

It is a combination of classless styles, a mix of high and low level utilities, and a tiny selection of components.

It supports automatic dark/light theme switching with the system preference.  It's simple enough that it should
work on old browsers, but the colors might not look right.  Update your browsers!

This is used as the internal KaithemAutomation CSS framework.  See it[(Here on Github Pages!](https://eternityforest.github.io/barrel.css)

## Meta tag

You need this customary tag in your HTML or it doesn't scale right on mobile.
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## Semantic Annotations

Apply these to pretty much anything.

### .help

This item conveys help text. May be hidden in some user preference modes.  Must NOT contain essential functional content.
In particular, Fugit hides help text as it interferes with the cyberpunk look.

### .warning, .danger

Levels of badness that should make text red and such.


## Components

### .window

A large pane, generally with a border and a background.  May have a header and footer.

### .tool-bar

A horizontal bar of items that may contain p, a, button, input, label, input inside label, select, and headings.
May be located anywhere. Themes will usually join all the items together.  It is a flex element that reflows.

### .card

A div styled like a typical UI card.  May contain a header and a footer.  Should not contain text directly because it has no padding.

### .button

Make a link look like it's a button.


## Utilities

### .paper
This object should have it's own background, it is like a popup you're going to put over something else.

### .rounded
Round the corners with the default global border-radius.

### .undecorated
Remove borders, backgrounds, shadows, and backdrop filters.

### .flex-rows
Makes a class into a flex container. It will wrap, and have row orientation with margin between elements.
The theme is allowed to do whatever else it wants here to make items look nice, it assumes you're doing something
simple like a card collection.

### .flex-cols
Same as above but flex as columns.

### .font-normal
Normal text, not bold or italic. Useful in something like a block quote.

### .nogaps
Set flex gap to zero, set all children to have zero margins.

### .scroll

The element is a scroll box. It will stay smaller than the viewport, and show scrollbars for content within.

### .inline
Makes an element inline.  When combined with .block gives inline block. 
When combined with .flex, gives .inline-flex.

May be used on .tool-bar to make it inline.

### .block
Makes it a block.

### .flex
display: flex.

### .padding
The element will have a reasonable theme dependent amount of padding.

### .margin
The element will have a reasonable theme dependent amount of margin.

### .align-left, .align-center, .align-right
These apply to both text content, and flex items.

### .right, .left
Uses the margin: auto trick to move element to the side

### .float-left, .float-right
Uses CSS float.  Probably not what you want unless you are wrapping text.

## Sizing Utilities

### col-1 through col-12

These elements will take be the given fraction(out of 12 columns) of the parent.
Does not use CSS grids, just sets width.  The size will be a little smaller than the given size, for nice margins.

Works correctly with nogaps.

### w-full
100% width, flex-basis 100%, border-box sizing.

### w-sm-full
This represents the full width of a small screen. The size is not an exact size, it represents
"full width on mobile, and a nice sidebar width on a large screen".

### .w-sm-quarter and .w-sm-half
These also exist.


### .h-1rem to .h-60rem
Used for fixed heights. The sizes are 1,2,4,6,12,24,36,48 and 60.  A limited number are chosen
to not bloat things.  They are taken from the Highly Composite Number sequence.  Sets height
and flex-basis(Only for children of flex-cols), max still grow or shrink.

### .max-h-1rem to .max-h-60rem
Can be 1,2,4,6,12,24, sets max-height

### .min-h-1rem to .min-h-24rem
Can be 1,2,4,6,12,24, sets min-height


### .max-content and .min-content

Set width, height, and flex basis to follow the max and min content.

### .nogrow and .noshrink
Flex-grow and flex-shrink set to 0

### .grow

Flex-grow set to 1

## Decorative Images

Give a place for the theme to fill in purely decorative content.

### .decorative-image

Use with another of the decorative image classes.

Apply one of these classes to a div.  Unless the theme enables the images, they show as display:none

```
.decorative-image-main
.decorative-image-login
.decorative-image-settings
.decorative-image-h-bar
.decorative-image-corner-ur
```

## Variables
Note that we have a concept of "convex and concave" inputs. Buttons and labels in toolbars are convex,
most others are concave. You can set these to flat styles with variables.

Note that the base color definitinons change in dark theme.

```css
:root {
    --black-1: #1c1c1c;
    --black-2: #343A40;
    --black-3: #545862;
    --black-4: #5C555D;

    --grey-1: #ededed;
    --grey-2: #f1f1f1;
    --grey-3: #F8F9FA;

    --red: #b92020;
    --yellow: #cea916;
    --green: rgb(0, 158, 0);
    --teal: rgb(120, 212, 219);
    --blue: rgb(95 111 161);

    /*Text color*/
    --fg: var(--black-1);
    /*Nontext items like borders*/
    --graphical-fg: var(--black-4);
    /*Headings, links, etc*/
    --accent-color: var(--blue);
    /*Main page bg*/
    --bg: var(--grey-3);
    /*.paper, items*/
    --box-bg: var(--grey-2);
    --highlight-opacity: 25%;

    /*typography*/
    --main-font: sans-serif;

    /*Spacing*/
    --padding: 6px;
    --gap: 18px;

    /*Borders*/
    --border-color: var(--graphical-fg);
    --border-radius: 0.6rem;
    --border-width: 1px;

    /*Inputs, buttons, etc*/
    --control-height: 28px;
    --control-border-radius: 12px;
    --control-border-width: 1px;

    /*3D buttons are mostly transparent with just some highlights and shadows.*/
    --concave-item-bg: linear-gradient(180deg, var(--3d-shadow) 12%, var(--3d-highlight) 88%);
    --convex-item-bg: linear-gradient(180deg, var(--3d-highlight) 0%, var(--3d-shadow) 96%);
    --convex-item-active-bg: var(--concave-item-bg);
    --concave-item-box-shadow: inset 0px 0px 4px 2px #3838381f;

    /*control-bg also applies to small elements like headers*/
    --control-bg: var(--grey-1);
}
```