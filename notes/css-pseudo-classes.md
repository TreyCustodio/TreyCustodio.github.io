#   CSS Pseudo-Classes

##   Common State Pseudo-Classes
:hover – when the user points to the element with a mouse.

:active – while the element is being clicked or tapped.

:focus – when the element gains keyboard or input focus.

:visited – when a link has been visited.

:link – when a link has not been visited yet.

:enabled / :disabled – when a form element is enabled or disabled.

:checked – when checkboxes or radio buttons are checked.

:indeterminate – when checkboxes/radios are in an indeterminate state.

:placeholder-shown – when an input shows placeholder text.

:required / :optional – for required or optional form fields.

:valid / :invalid – for fields with valid or invalid values.

:read-only / :read-write – for fields that can/can’t be edited by the user.

:default – for default option or button among a set.

:in-range / :out-of-range – for numeric fields/sliders within or outside allowed ranges.

:blank – for empty user-input elements (experimental).

:autofill – when a browser autofills an input.

:open, :modal, :fullscreen, :popover-open, :picture-in-picture – for elements in special dialog/display states.

##  Structural & Positional Pseudo-Classes
:first-child / :last-child – when element is first/last child of its parent.

:nth-child(n) / :nth-of-type(n) – for nth children/types.

:not(selector) – to target elements that do not match another selector.

##  Custom Elements & Functions
:state(custom) – for custom web component states.

:lang(language-code) – for language-specific elements.

:target – when element is targeted by a fragment (URL).

Advanced / Less Common
:root – the document root element.

:empty – elements with no children or text.

:scope – elements serving as a scope for queries.

##  Notes
Note: Some pseudo-classes apply mainly to form elements, others to anchors, structural or custom elements. Most can be combined: for example, img:hover:active.

A full reference with details and examples is available on W3Schools and MDN.