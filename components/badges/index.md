---
layout: page
parent: "Components"
title: "Badges"
shortName: "component__badges"
intro: "Badges are used as indicators of an update or action items that have yet to be completed."
jump_menu: true
---

<div class="ds-preview">
  <span class="fsa-level">
    <span><span class="fsa-badge">1</span></span>
    <span><span class="fsa-badge fsa-badge--neutral">8</span></span>
    <span><span class="fsa-badge fsa-badge--general">11</span></span>
    <span><span class="fsa-badge fsa-badge--alert">11</span></span>
    <span><span class="fsa-badge fsa-badge--warning">22</span></span>
    <span><span class="fsa-badge fsa-badge--success">99+</span></span>
  </span>
</div>

## Variations

Badges are styled with `class="fsa-badge fsa-badge--[type] fsa-badge--[size]"`.

* **Read-only**: use a `<span>` element.
* **Invoke an action**: use a `<button>` element.
* **Navigate somewhere**: use an `<a>` elment.

```html
<span class="fsa-badge">1</span>
<button class="fsa-badge" type="button">1</button>
<a class="fsa-badge" href="link.html">1</a>
```

### Default

<div class="ds-preview">
  <span class="fsa-badge">1</span>
</div>
```html
<span class="fsa-badge">1</span>
```

### Neutral

<div class="ds-preview">
  <span class="fsa-badge fsa-badge--neutral">8</span>
</div>
```html
<span class="fsa-badge fsa-badge--neutral">8</span>
```

### General

<div class="ds-preview">
  <span class="fsa-badge fsa-badge--general">11</span>
</div>
```html
<span class="fsa-badge fsa-badge--general">11</span>
```

### Alert

<div class="ds-preview">
  <span class="fsa-badge fsa-badge--alert">11</span> Bugs Found
</div>
```html
<span class="fsa-badge fsa-badge--alert">11</span> Bugs Found
```

### Warning

<div class="ds-preview">
  <span class="fsa-badge fsa-badge--warning">22</span> Issues Recorded
</div>
```html
<span class="fsa-badge fsa-badge--warning">22</span> Issues Recorded
```

### Success

<div class="ds-preview">
  <span class="fsa-badge fsa-badge--success">99+</span> Feature Updates
</div>
```html
<span class="fsa-badge fsa-badge--success">99+</span> Feature Updates
```

### Large

<div class="ds-preview">
  <span class="fsa-level">
    <span><span class="fsa-badge fsa-badge--large">1</span></span>
    <span><span class="fsa-badge fsa-badge--large fsa-badge--neutral">8</span></span>
    <span><span class="fsa-badge fsa-badge--large fsa-badge--general">8</span></span>
    <span><span class="fsa-badge fsa-badge--large fsa-badge--alert">11</span></span>
    <span><span class="fsa-badge fsa-badge--large fsa-badge--warning">22</span></span>
    <span><span class="fsa-badge fsa-badge--large fsa-badge--success">99+</span></span>
  </span>
</div>
```html
<span class="fsa-level">
  <span><span class="fsa-badge fsa-badge--large">1</span></span>
  <span><span class="fsa-badge fsa-badge--large fsa-badge--neutral">8</span></span>
  <span><span class="fsa-badge fsa-badge--large fsa-badge--general">8</span></span>
  <span><span class="fsa-badge fsa-badge--large fsa-badge--alert">11</span></span>
  <span><span class="fsa-badge fsa-badge--large fsa-badge--warning">22</span></span>
  <span><span class="fsa-badge fsa-badge--large fsa-badge--success">99+</span></span>
</span>
```

### Extra Large

<div class="ds-preview">
  <span class="fsa-level">
    <span><span class="fsa-badge fsa-badge--extra-large">1</span></span>
    <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--neutral">8</span></span>
    <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--general">8</span></span>
    <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--alert">11</span></span>
    <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--warning">22</span></span>
    <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--success">99+</span></span>
  </span>
</div>
```html
<span class="fsa-level">
  <span><span class="fsa-badge fsa-badge--extra-large">1</span></span>
  <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--neutral">8</span></span>
  <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--general">8</span></span>
  <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--alert">11</span></span>
  <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--warning">22</span></span>
  <span><span class="fsa-badge fsa-badge--extra-large fsa-badge--success">99+</span></span>
</span>
```

### Actionable

Badge styles can be applied to nearly any HTML element, defaulting to non-actionable `<span>` elements as shown above. Below are `<a>` and `<button>` elements:

<div class="ds-preview">
  <span class="fsa-level">
    <span><a class="fsa-badge" href="link.html">A</a> Anchor</span>
    <span><button class="fsa-badge" type="button">B</button> Button</span>
    <span><button class="fsa-badge" type="button" disabled="disabled">Z</button> Disabled</span>
  </span>
</div>
```html
<span class="fsa-level">
  <span><a class="fsa-badge" href="link.html">A</a> Anchor</span>
  <span><button class="fsa-badge" type="button">B</button> Button</span>
  <span><button class="fsa-badge" type="button" disabled="disabled">Z</button> Disabled</span>
</span>
```

### Example: Dark Background

<div class="ds-preview" style="background-color: #666;">
  <span class="fsa-level">
    <span><span class="fsa-badge">1</span></span>
    <span><span class="fsa-badge fsa-badge--neutral">8</span></span>
    <span><span class="fsa-badge fsa-badge--general">11</span></span>
    <span><span class="fsa-badge fsa-badge--alert">11</span></span>
    <span><span class="fsa-badge fsa-badge--warning">22</span></span>
    <span><span class="fsa-badge fsa-badge--success">99+</span></span>
  </span>
</div>
```html
<div style="background-color: #666;">
  <span class="fsa-level">
    <span><span class="fsa-badge">1</span></span>
    <span><span class="fsa-badge fsa-badge--neutral">8</span></span>
    <span><span class="fsa-badge fsa-badge--general">11</span></span>
    <span><span class="fsa-badge fsa-badge--alert">11</span></span>
    <span><span class="fsa-badge fsa-badge--warning">22</span></span>
    <span><span class="fsa-badge fsa-badge--success">99+</span></span>
  </span>
</div>
```

## Usage

{% capture usage_do %}
* If an application requires a notification system with minimal footprint.
* If an application button requires a notification badge within it.
{% endcapture %}

{% capture usage_dont %}
* Within text paragraphs to indicate something other than a notification.
* With color as the only indicator of variation as this is not Accessible.
{% endcapture %}

{% include do-dont.html %}

## General Guidance

* Badges should be used for real-time notifications with minimal footprint.
* See [Accessibility Section]( {{ site.baseurl }}guides/accessibility/color-and-contrast ) for more information on color guidelines.
