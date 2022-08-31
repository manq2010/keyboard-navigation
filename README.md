# Keyboard Navigation

## Focus

Remember our Rock, Paper, Scissors example that *didn’t* use semantic HTML from the… well, Semantic HTML lesson? Another issue with using `<div>` and `<span>` elements is that, by default, they aren’t focusable and they don’t have any event handling by default. In order to fix our non-semantic Rock, Paper, Scissors example for keyboard users, we would need to take some extra steps, similar to the below code snippets:

```html
<!-- The `tabindex` attribute makes the `<div>` elements focusable. -->
<div class='button-container'>
  <div class='rock button' tabindex='0'>Rock</div>
  <div class='paper button' tabindex='0'>Paper</div>
  <div class='scissors button' tabindex='0'>Scissors</div>
</div>
```

```js
// We also need to manually add in event handling for both mouse and keyboard events.
const buttons = document.querySelectorAll('.button');

function nameAlerter(e) {
  if (e.type === 'click' || e.key === ' ' || e.key === 'Enter') {
    alert(e.target.textContent);
  }
}

buttons.forEach(button => {
  button.addEventListener('click', nameAlerter)
  button.addEventListener('keydown', nameAlerter)
})
```

Of course, this example then makes it less understandable for screen reader users (remember, these “buttons” won’t provide any context). Not only does using the `<button>` element provide the context screen reader users need, but they’re focusable and have event handling for keyboards by *default*: pressing the “space” or “enter” keys on a keyboard when a `<button>` has focus will trigger the “click” event.

The point is that you need to make sure that any interactive elements are focusable by and have event handling for keyboards. Using the correct semantic HTML can make this a lot easier of a goal to accomplish, but if you ever need to use an element that isn’t focusable or doesn’t have any event handling by default, then you need to add both of those functionalities in manually.

## Focus Style

```css
/* These are so ugh-ly! Let's get rid of them. */
*:focus {
  outline: none;
  border: none;
}
```

## Tab Order

The tab order is the order in which elements on the page will receive focus when pressing the Tab key, and is by default in the same order as the order of elements listed in the HTML file:

```html
<!-- This element is first in the tab order. -->
<div tabindex='0'>This is the first element listed in the HTML.</div>

<!-- This element is second in the tab order. -->
<div tabindex='0'>This is the second element listed in the HTML.</div>
```

Sometimes you may find it necessary to either change the visual order of elements on a page using CSS (the `float` or `order` properties, for example), or the tab order of elements themselves using the `tabindex` attribute. Regardless of which method you may use, you should make sure the tab order matches the visual order of elements. If the tab order is different from the visual order, users could be left confused or frustrated trying to navigate the page with a keyboard, expecting one element to receive focus based on the visual layout and instead another element receives focus.

## Hidden Content

Sometimes you may want to hide some content until a specific event occurs, such as a user clicking on a button to open a menu or a modal box. When you want to hide content for this sort of purpose, you need to make sure the content is not only visually hidden, but also hidden from assistive technologies until that content is meant to be visible.

If you don’t properly hide such content, then keyboard users would be able to tab into that content before they’re meant to, but in doing so they would lose track of any visual focus on the page. These users would be left confused or even frustrated when they’re trying to tab through a page, only for their focus indicator to disappear into that hidden content.

One way to prevent this frustrating behavior is to give each individual item in that hidden content a `tabindex` value of -1, since that prevents an element from receiving focus via the keyboard (though you can still give it focus with JavaScript’s `focus()` method). While this fixes the issue for keyboard users, other assistive technologies would still have access to and could still announce this hidden content

A better solution is giving the container for the hidden content itself either the `display: none` or `visibility: hidden` CSS property when it’s hidden, and removing or overriding that property when it’s meant to be visible. This not only removes the menu items from the tab order, but it also prevents assistive technologies from announcing them.

## Skip Navigation Links

[link]

[link]:https://webaim.org/techniques/skipnav/
