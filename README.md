# barrel.css
A CSS Framework aiming to be as opinionated as possible for maximum restyling possibilities.

It is a combination of classless styles, a mix of high and low level utilities, and a tiny selection of components.  Unlike utility-first frameworks, we don't have millions of styles for every possible color and size.  

You do as much as you can semantically, and fill in the rest with semi-semantic classes. There are classes like .margin-bottom, letting the theme decide how much margin, not specific things like .margin-bottom-3px.


It supports automatic dark/light theme switching with the system preference, desktop, mobile, and also aims to work as well as possible in print media, especially if you use extra hint classes.

It also includes some basic CSS reset features, eliminating a lot of default margins and using border-box sizing on everything.

It's simple enough that it should work on old browsers, but the colors might not look right.  Update your browsers!

This is used as the internal KaithemAutomation CSS framework.  See it[(Here on Github Pages!](https://eternityforest.github.io/barrel.css)

Note that the preview is of this master branch, not any particular release.

When printing, Barrel currently overrides the styles automatically, with a white foreground, flat background,
the theme Serif font, and the URLs displayed after all links.

## Design Rules

Avoid mixing component classes.  Put a stacked form IN a card, don't make a stacked form
that IS a card.


### Header Button Pattern

Putting a button or toolbar in a header, or a button in heading inside a header, is treated as a special case and collapses the borders(among other things) to reduce visual noise.



## Alt themes
Because of weirdness with css variables, all of the alt themes folders must be in the foler with barrel.css itself.  Include barrel.css before
your theme folder.

If you want to put the theme folder elsewhere. just use relative URLs for --bg and the fonts.

Please note: Nord is an adaptation of the Nord Theme, which is MIT licensed, not public domain.
The font file for Fugit is under it's own free license. Images should all be CC0.


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

### [v-cloak], [x-cloak]
Elements with the v-cloak or x-cloak attribute display as a spinner, for compatibility
with Vue and Alpine.

### .toggle
Apply this directly to a checkbox element to style it as a slide toggle.

### form.stacked-form

A form where each element is stacked vertically. All inputs should be inside a 
label.  To group multiple inputs in one row, Put them in a p or div.

Each row in a stacked form likes to be as wide as possible, you may want to apply a width to the whole form like w-sm-double, center it with h-center, and use the border class for the best look.

You can use fieldsets too.

### .window

A large pane, generally with a border and a background.  May have a header and footer
element.

### .tool-bar

A horizontal bar of items that may contain p, a, button, input, label, input inside label, select, and headings.
May be located anywhere. Themes will usually join all the items together.  It is a flex element that reflows.

Inputs and meters should be inside of labels.


### .pagination

Following Bootstrap's example, use this on a UL to make it show a list of pages.
Displays much like a tool-bar.  Use a wrapping nav for accessibility.

### .spacer
Use on a child of tool-bar or pagination to make it take up remaining space.

### .card

A div styled like a typical UI card.  May contain a header and a footer.  Should not contain text directly because it has no padding.

### .button

Make a link look like it's a button.

### pre.poem
All child paragraphs have centered text and preserved white space, display centered, generally make
a pre look nice for poetry.

### led led-red

Use this on a checkbox type input to make an inducator LED. Available colors
are red, yellow, green, blue, cyan, purple

## Utilities

### .break-word

Force wrapping even in the middle of words.

### .round-feathered

Make an image smoothly fade out around the edges.

### .paper
This object should have it's own background, it is like a popup you're going to put over something else.

### .pagebreak
Insert a page break before this element

### .nobreaks
Try not to break this element.  Browsers appear to still do so if necessary, but avoid if possible.

### .noprint
Do not print this element.

### .print-exact
The background color of this and child elements are meaningful, don't remove them when printing.

### .rounded
Round the corners with the default global border-radius..

### .control-rounded
Round with the control border radius same as a button.

### .undecorated
Remove borders, backgrounds, shadows, and backdrop filters.

### .border

Puts a border on the element, with the usual width, color, and radius.

### .noselect

Don't allow selecting the text. Use sparingly. People mostly don't like this.

### .selectable

Always allow selection even if it's not normally selectable.

### .flex-row
Makes a class into a flex container. It will wrap, and have row orientation with margin between elements.
The theme is allowed to do whatever else it wants here to make items look nice, it assumes you're doing something
simple like a card collection.

### .flex-col
Same as above but flex as columns.

### .font-normal
Normal text, not bold or italic. Useful in something like a block quote.

### .nogaps
Set flex gap to zero, set all children to have zero margins.

### .scroll

The element is a scroll box. It will stay smaller than the viewport, and show scrollbars for content within.

### .relative
position: relative

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

### .padding-bottom
Add padding just to bottom.  Useful for fixing scrollbar showing up
when not needed.

### .padding-inline
Padding to left and right

### .margin
The element will have a reasonable theme dependent amount of margin(Determined by --gap).

### .margin-top, .margin-bottom
Add margin to the top or bottom of an element.

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

### w-1rem through w-24rem
Options are 1,2,4,6,8,12,16,18,20 and 24.  Sets width, and flex-basis, if applied to a child of
a .flex-row element.

### w-full
100% width, flex-basis 100%, border-box sizing.

### w-sm-full
This represents the full width of a small screen. The size is not an exact size, it represents
"full width on mobile, and a nice sidebar width on a large screen".

### .w-sm-quarter and .w-sm-half
These also exist.


### .h-1rem to .h-60rem
Used for fixed heights. The sizes are 1,2,4,6,8, 12, 16, 18, 20, 24,36,48 and 60.  
A limited number are chosen to not bloat things and to create visual consistency.

They are taken from the [Practical Number Sequence](https://en.m.wikipedia.org/wiki/Practical_number) up to 24, and the[Highly Composite Number](https://en.m.wikipedia.org/wiki/Highly_composite_number) sequence above that.  

They are likely numbers most people are already familiar with and will
have no trouple remembering.

Sets height and flex-basis(Only for children of flex-col), max still grow or shrink.

### .max-w-1rem to .max-w-60rem
Can be 1,2,4,6,8, 12, 16, 18, 20, 24,36,48 and 60, sets max-width


### .max-h-1rem to .max-h-60rem
Can be 1,2,4,6,8, 12, 16, 18, 20, 24,36,48 and 60, sets max-height

### .min-h-1rem to .min-h-24rem
Can be 1,2,4,6,8, 12, 16, 18, 20, 24,36,48 and 60, sets min-height

### .h-min-content
height: min-content

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
Note that we have a concept of "convex and concave" inputs. Buttons and labels in toolbars are convex, most others are concave. You can set these to flat styles with variables.

By default most variables are calculated, so you probably don't have to change much.
Start with ones higher up in the list!

Note that the base color definitinons change in dark theme.

```css
:root {
    color-scheme: light dark;

    --black-1: #1c1c1c;
    --black-2: #343A40;
    --black-3: #545862;
    --black-4: #5C555D;

    --grey-1: #e1ded7;
    --grey-2: #f1f1f1;
    --grey-3: #F8F9FA;

    --red: #e03131;
    --yellow: #ffd43b;
    --green: rgb(0, 158, 0);
    --teal: rgb(102, 190, 179);
    --blue: rgb(81, 104, 173);
    --purple: rgb(182, 80, 151);
    --dark-blue: rgb(40 55 102);



    --scrollbar-width: 14px;

    /*Text color*/
    --fg: var(--black-1);
    /*Nontext items like borders*/
    --graphical-fg: var(--black-4);

    /*Headings, links, etc*/
    --accent-color: var(--dark-blue);
    /*Main page bg*/
    --bg: var(--grey-1);
    /*.paper, items*/
    --box-bg: var(--grey-2);
    --highlight-opacity: 25%;

    /*typography*/

    --sans-font: font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --serif-font: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    --mono-font: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

    --main-font: var(--sans-font);
    --font-size: 18px;
    --line-height: calc(2px + 18px + 2px + 4px);
    --heading-font: var(--main-font);
    --control-font: var(--main-font);

    /*Spacing*/
    --padding: 12px;
    --gap: 18px;

    /*Borders*/
    --border-color: color-mix(in srgb, var(--graphical-fg) 50%, rgb(0 0 0 / 0%));
    --border-style: solid;
    --border-radius: 1.2rem;
    --border-width: 1px;

    --border: var(--border-width) var(--border-style) var(--border-color);
    /*Inputs, buttons, etc*/
    --control-height: 1.6rem;
    --control-border-radius: 0.8rem;
    --control-border-width: 1px;

    /*control-bg also applies to small elements like headers*/
    --control-bg: var(--grey-1);
    --control-fg: var(--graphical-fg);


    /*Used for the convex and concave*/
    --3d-highlight: color-mix(in srgb, var(--control-bg) 62%, rgba(241, 241, 241, 100%));
    --3d-shadow: color-mix(in srgb, var(--control-bg) 96%, rgba(0, 0, 0, 100%));

    /*Concave than convex BG needs to be less intense than other shadows
    because we stack it with the inset shadow
    Also, we usually don't want it to be that extremely concave
    */
    --concave-shadow: color-mix(in srgb, var(--3d-shadow) 40%, var(--control-bg));
    --concave-highlight: color-mix(in srgb, var(--3d-highlight) 60%, var(--control-bg));

    --concave-item-bg: linear-gradient(180deg, var(--concave-shadow) 4px, var(--concave-highlight) 43%);
    --convex-item-bg: linear-gradient(180deg, var(--concave-highlight) 0%, var(--concave-shadow) 96%);
    --convex-item-active-bg: linear-gradient(180deg, color-mix(in srgb, var(--concave-shadow) 90%, var(--control-fg)) 3%, color-mix(in srgb, var(--3d-highlight) 90%, var(--control-fg)) 45%);
    --concave-item-box-shadow: inset 0px 0px 4px 2px color-mix(in srgb, var(--fg) 7%, transparent);


    /*Used for headers, trays, and anything smaller than a box and bigger than a button*/
    --alt-control-bg: color-mix(in srgb, var(--control-bg) 90%, #816e23);
    /*#e1dfd7*/

    --window-box-shadow: rgb(0 0 0 / 15%) 1px 5px 12px -3px;
    /*Used for tool bars and cards*/
    --item-box-shadow: 1px 2px 8px -3px rgba(0, 0, 0, 0.1);

    /*Below this line you probably don't need to change stuff*/
    /* fg color for warning and danger */
    --highlight-color: var(--teal);
    --success-color: var(--green);
    --warning-color: var(--yellow);
    --danger-color: var(--red);

    --hover-color: color-mix(in srgb, var(--highlight-color) 30%, var(--control-bg));

    --control-border-color: color-mix(in srgb, var(--graphical-fg) 35%, rgb(0 0 0 / 0%));

    /*Intensity of table borders is less than normal borders, to balance the density*/
    --table-border-strength: 50%;

    --thin-border: 1px solid var(--border-color);
    --control-border: var(--control-border-width) solid var(--control-border-color);


    --heading-text-shadow: none;
    --control-text-shadow: none;
    --slider-thumb: var(--convex-item-bg);
```

## The Color System

### bg
This is a color or image for the whole page

### box-bg
This is the color of windows(Almost all content is supposed to be in a window), and anything with the .paper class.  Cards do not have a background by default.


### fg

Body Text.

### accent-color

Used for the text color of headings, links, and scrollbars

### graphical-fg
Used for icons and borders, but usually "diluted" first with a background color


### control-bg
Used for text areas, plus buttons and inputs when displaying flat. Also used as the base color for scrollbar tracks.


### alt-control-bg
 Used for things you don't directly interact with but act as a container.  Headers and footers are this color.Trays and drag handles should be this color.  Defaults to an automatically created slight variation on the control-bg.

### control-fg
This color is used for buttons and text inputs, and also small indicators and table headings.

### contrasting-bg-color

Normally control-bg, but if you ever set control-bg to something other than a solid color, set this to something that gives approproate contrast with fg. Must not be transparent.



### 3D colors

Normally, you just set 
#### convex-item-bg
Usually a gradient for buttons and labels

#### concave-item-bg
used for selects and text boxes.  Concave and convex can be flattened some or all of the time by setting them to the alt-control-bg.

#### concave-item-box-shadow
text areas, selects, inputs, and similar, should have an inset box shadow unless the theme is ultra flat.

#### 
#### border-color
Defaults to a diluted version of the graphical-fg.



### control-border-color
May differ from the border color, defaults to the border color.




### success, warning, danger, and highlight colors

Pure strong base colors used to derive the foreground and background of highlighted elements.

The highlight color is also used for selected text and slider thumbs. 


### Color Rules
Any fg color except the border color, must always be easily legible on any bg color, except the main bg.

The main bg color does not need to have any particular contrast with anything else.

No two background colors are required to be visually distinct, they are used to make things "look right" but should not be relied on to convey information.  Likewise, no two foreground colors are required to be distinct.

