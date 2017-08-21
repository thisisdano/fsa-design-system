---
layout: guide
parent: "Applications"
title: "Form Validation"
intro: "Validation and error messaging is an integral part of any FSA Application and efficient workflow for a User. The below guidelines shall be followed."

---

## Form Validation Guidelines

Below are four common themes that should be followed when developing a validation and messaging system that will help to optimize the workflow of a User, and allow for a more positive User Experience when an system error has taken place.

__1. Display error messages at the right place__ - Proper error messaging should appear as close as possible to the area of the application where the error has taken place. Always display validation within the context of the action. If an error has occurred, for instance, from a User typing the wrong format of characters into an online form field, the error message shall appear below the .

__2. Display error messages at the right time__ - It is also important for the error message to appear in a timely manner, so that the User is still in the proper mindset for completing the task. Error messages shall appear when the action has been completed. So in the instance of wrong format of characters in an online form field, when the form field loses focus the error message shall appear.

__3. Use the appropriate color for the message__ - Generally speaking, it is best practice to use the color red, paired with error text messaging to indicated something needs to be corrected to continue. In the case of confirmation or success messaging, the color green, paired with success text messaging should be used. Based on the location and background color of the area of the error, consideration of 508 compliance shall still be used.

__4. Use clear language and provide an actionable resolution__ - The verbiage used when notifying a User of an error should be easy to understand and provide a way to solve the problem. Even if the error messaging is placed in the right spot at the right time, and in the right color scheme, it serves no purpose if the User does not understand how to correct the problem. FSA applications shall use [plain language priciples]({{ site.baseurl }}/guides/content/plain-language/) when displaying validation messaging.


## Example Messaging States

<caption>Unfocused Form Field State</caption><a href="{{ site.baseurl }}img/subcategories/applications/error-1.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/error-1.jpg" alt="Image of a form field in an unfocused state"></a>

<caption>Focused Form Field State</caption><a href="{{ site.baseurl }}img/subcategories/applications/error-2.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/error-2.jpg" alt="Image of form field in a focused state"></a>

<caption>Unfocused State with Error Messaging</caption><a href="{{ site.baseurl }}img/subcategories/applications/error-3.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/error-3.jpg" alt="Image of a form field with error messaging"></a>


The themes above have been programmed into the CSS and form components within the Design system, but it is important to understand the concepts and theory behind them in order to implement validation and messaging that complies with best practice.

## Warning Messages

Some FSA applications will require the system to confirm an action taken by a User by showing a Warning or Confirmation message. For actions that are destructive in nature, such as deleting data, Developers shall utilize a Confirmation modal. To find out more information and guidelines on modal windows, [please review the guide here]({{ site.baseurl }}/guides/applications/modal/).

<caption>Modal Window Confirmation</caption>
<a href="{{ site.baseurl }}img/subcategories/applications/modal-sample2.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/modal-sample2.jpg" alt="Image of sample Modal Window Confirmation"></a>

## Related Resources

 * [Components for Form elements]({{ site.baseurl }}/components/)
 * [Plain Language Guide]({{ site.baseurl }}/guides/content/plain-language/)