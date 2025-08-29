
#-Q: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-->
    1. getElementById("id") - returns a single element by its ID. This is the fastest .
    2. getElementByClassName - returns multiple elements of html collection by one class. Can’t directly use forEach, need to convert first.
    3. document.querySelector("cssSelector") - return 1st maching single element using css selector. More powerful because it works with any CSS selector.
    4. document.querySelectorAll("cssSelector") - return the nodelist for all maching elements . supports foreach .


#-Q: How do you create and insert a new element into the DOM?

-->
    At first, we have to create an element by text=document.createElement() , secondly we will put any text by text.innerText="habi jhabi" , then finally insert the DOM by appendChild like document.body.appendChild(text).


#-Q: What is Event Bubbling and how does it work?

-->
    Is a way that events propagate through the DOM. When an event happens on an element, like a click, it first triggers on the element itself.  Then the event propagate to its parent, then the parent’s parent, all the way up to the <html> element (unless you stop it).


#-Q: What is Event Delegation in JavaScript? Why is it useful?

--> 
    Event Delegation is a technique where instead of adding an event listener to every single child element, you add one listener to their parent, and then check which child triggered the event. It relies on Event Bubbling, because the event bubbles up from the child to the parent..


#-Q: What is the difference between preventDefault() and stopPropagation() methods?

--> 
  1.  preventDefault() - The purpose is  stops the default browser behavior of an element without stopping the event itself. But It does not stop the event from bubbling.
  2.  stopPropagation() - The purpose is stops the event from bubbling up to parent elements.
