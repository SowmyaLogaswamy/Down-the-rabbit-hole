# Down The Rabbit Hole - A Demonstration of JavaScript Features

#### By Mick Sexton, Joel Bakken, Laura Hamilton, and Sowmya Logaswamy

## Description

This application is a demonstration of objects, constructors, and prototype methods using JavaScript to create an interactive page that showcases  and educates the user about JavaScript and HTML features.

## Code Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|A user clicks on any list element from the left column and a dropdown field with tools or information appears below the list item on the left side|User clicks on item #1 in the left column|A dropdown appears with a button below line #1 in the left column|
|A user interacts with the tools on any list element from the left column and a populated information field appears in the right column under the "What's happening behind the curtain" heading|A user clicks on item #2 in the left column|Information about line item #2 appears in the right column|
|A user clicks on a second line item in the left column and the dropdown field from the first line item disappears|A user first clicks on line item #1 and then clicks on line item #2|The dropdown from line item #1 disappears|
|A user clicks on any list element following interacting with the drop down from any previous list element in the left column and the populated information in the right column from the previous list item disappears from the right side|User clicks on list item #2 in the left column after clicking on the button in list item #1|The information from list item #1 disappears from the right column|
|A user clicks on the "Click Button" list item from the left column and a dropdown field containing a button appears below the list item|User clicks on "Click Button" in the left column|A dropdown appears below the line with a button in the left column|
|A user clicks on the "Click Me" button under the "Click Button" list item from the left column and an information field appears in the right column|User clicks on "Click Me" in the left column|An information dropdown appears in the right column|
|A user clicks on the "Fade" list item from the left column and a dropdown field containing two lines of instructions to fade in and fade out appears below the list item|User clicks on "Fade" in the left column|Two lines of instructions to fade in and fade out appears in a dropdown below the list item in the left column|
|A user clicks on the "Click on this text to see a Fade In" drop down tool from the "Fade" list item from the left column and an information field slowly fades into place in the right column|User clicks on "Click on this text to see a Fade In" under the "Fade" line item|An information field slowly fades into place in the right column|
|A user clicks on the "Click on this text to see a Fade Out" drop down tool from the "Fade" list item from the left column after clicking on the "Click on this text to see a Fade In" above it and the existing information in the right column slowly fades out of view|User clicks on "Click on this text to see a Fade Out" under the "Fade" line item after clicking on "Click on this text to see a Fade In"|The existing information field slowly fades out of view in the right column|
|A user clicks on the "Toggle" list item from the left column and a dropdown field containing a line of instructions to toggle appears below the list item|User clicks on "Toggle" in the left column|One line of instructions to toggle appears in a dropdown below the list item in the left column|
|A user clicks repeatedly on the "Toggle Me" drop down tool from the "Toggle" list item from the left column and the information field in the right column toggles in and out of view|User clicks twice on "Toggle Me" under the "Toggle" line item|An information field toggles in and out of place in the right column|
|A user clicks on the "Image Slider" list item from the left column and a dropdown field containing a line of instructions to see a slideshow appears below the list item|User clicks on "Image Slider" in the left column|One line of instructions to see a slideshow appears in a dropdown below the list item in the left column|
|A user clicks on the "Click this Text to see a Slideshow" drop down tool from the "Image Slider" list item from the left column and a slideshow with pictures and information appears in the right column|User clicks on "Click this Text to see a Slideshow" in the left column|A slideshow with pictures and information appears in the right column|
|A user clicks on the slideshow tools in the right column and the slideshow rotates images or pauses them respectively|User clicks on the play/pause/arrows on the slideshow|The slideshow plays through the images, or pauses on an image respectively|
|A user clicks on the "Mouse Over/Out" list item from the left column and a dropdown field containing an instruction field appears below the list item|User clicks on "Mouse Over/Out" in the left column|A dropdown appears with instructions below the list item|
|A user hovers their cursor on the drop down of the "Mouse Over/Out" list item from the left column and the information field in the right column comes into view and then out of view when the user moves the cursor off the drop down|User moves their cursor on and off the drop down field of the "Mouse Over/Out" list item|An information field comes into view in the right column and then disappears again|
|A user clicks on the "Bouncer" list item from the left column and a dropdown field containing an instruction field appears below the list item|User clicks on "Bouncer" in the left column|A dropdown appears with instructions below the list item|
|A user clicks on the "Click on me to bounce" drop down tool from the "Bouncer" list item from the left column and a bouncing text field appears below the instructions as a dropdown and information appears in the right column|User clicks on "Click on me to bounce" in the left column|A bouncing text field appears below the instructions as a dropdown and information appears in the right column|
|A user clicks on the "XY Coordinates" list item from the left column and a dropdown field containing an instruction field with dynamic coordinates appears below the list item|User clicks on "XY Coordinates" in the left column|A dropdown appears with instructions and dynamic coordinates|
|A user clicks on the "XY Coordinates" drop down from the left column and the information field in the right column comes into view|User clicks on the "XY Coordinates" drop down |An information field comes into view in the right column|
|A user clicks on the "Mouse Up/Down" list item from the left column and a dropdown field containing an instruction field appears below the list item|User clicks on "Mouse Up/Down" in the left column|A dropdown appears with instructions|
|A user clicks multiple times on the instructions drop down from the "Mouse Up/Down" list item in the left column and an information field in the right column comes into view and upon the second click a second drop down appears below the first with a dynamic description of the current mouse function|User clicks three times on the "Mouse Up/Down" drop down|An information field comes into view in the right column first and then a second drop down appears below the first with a changing "MOUSE CLICKED." and "MOUSE RELEASED." action description|
|A user clicks on the "New Window" list item from the left column and a dropdown field containing an instruction field and button appears below the list item|User clicks on "New Window" in the left column|A dropdown appears with instructions and a window position button|
|A user clicks on the "New Window" drop down from the left column and the information field in the right column comes into view|User clicks on the "New Window" drop down |An information field comes into view in the right column|
|A user clicks on the "Window Position" button from the "New Window" drop down in the left column and a new small window appears with the current coordinates listed|User clicks on the "Window Position" button|A small window appears listing coordinates|
|A user moves the window from the "Window Position" button from the "New Window" drop down in the left column and then clicks on the "Window Position" button again, and a new set of the current coordinates append on the list content within the window|User moves the window and then clicks on the "Window Position" button|A new set of coordinates append to the previous coordinates in the window|
|A user clicks on the "Longitude and Latitude" list item from the left column and a dropdown field containing a dynamic map set to Epicodus coordinates appears below the list item with 2 input fields and a button and the information field appears in the right column|User clicks on "Playing with Longitude and Latitude" in the left column|A dropdown appears with a map showing Epicodus, input fields, button, and information in the right column|
|A user clicks on the "Move Map" button from the "Longitude and Latitude" drop down in the left column after entering new Longitude and Latitude values in both fields and the map changes based on the new Longitude and Latitude values|User clicks on the "Move Map" button after entering coordinates|The map displays a new image based on coordinates|
|A user clicks on the "Random Number Generator" list item from the left column and a dropdown field containing a large dice button appears below the list item|User clicks on "Random Number Generator" in the left column|A dropdown appears with a large dice button|
|A user clicks on the dice button from the "Random Number Generator" drop down from the left column and an additional drop down with a numerical value populates below the button and the information field in the right column comes into view|User clicks on the large dice button|An extra drop down with a random number appears below the button and a information field comes into view in the right column|
|A user clicks on the "Math Function" list item from the left column and a dropdown field containing an image of a pie, and input field, and a button appears below the list item|User clicks on "Math Function" in the left column|A dropdown appears with an image of a pie, and input field, and a button|
|A user clicks on the "Give me the pie area to the nearest inch" button from the "Math Function" drop down in the left column after entering a number into the input field and an additional drop down showing the calculation based on the user input appears and the information field appears in the right column|User clicks on the "Give me the pie area to the nearest inch" button after entering a number value|A dropdown appears with a calculation of the pie area and the information appears in the right column|
|A user clicks on the "Give me the pie area to the nearest inch" button from the "Math Function" drop down in the left column after entering a number into the input field and an additional drop down showing the calculation based on the user input appears and the information field appears in the right column|User clicks on the "Give me the pie area to the nearest inch" button after entering 10 in the input field|A dropdown appears with a value of 79 and the information appears in the right column|
|A user enters a new value in the "Math Function" drop down and clicks on the "Give me the pie area to the nearest inch" button in the left column after already calculating an input value and the existing pie area value changes based on the new user input|User enters a value of 20 in the input field and clicks on the "Give me the pie area to the nearest inch" button|The existing value in the dropdown changes to 314|
|A user clicks on the "Code and Color" list item from the left column and a dropdown field containing instructions, a color code field, and a color selector button appears and the information field appears in the right column|User clicks on "Code and Color" in the left column|A dropdown appears with instructions, a color selector, and a color code set to a default of ff000, and information populates in the right column|
|A user clicks on the color selector button in the dropdown of the "Code and Color" list item from the left column and a interactive color wheel window appears that changes the drop down text color instructions when a new color is selected with the color wheel|User clicks on color selector button in the left column and selects a blue color|The text color changes to blue within the instruction dropdown|
|A user clicks on the "Drink Me!" button in the left column and a large jumbotron field appears below the button with the title of the quiz and a button to take the quiz|A user clicks on the "Take The Quiz Here" button|The quiz appears as a large dropdown below the button with a title and button to activate the quiz|
|A user clicks on the "Start The Quiz" button in the left column on the quiz jumbotron field and a multiple choice question appears with radio buttons and a button at the bottom to submit the answer|A user clicks on the "Drink Me!" button|The first question appears with multiple answer choices and a submit button|
|A user clicks on the "Bang" submit button within the quiz after making a correct multiple choice selection|A user selects "HTML" radio button on the "Which language is responsible for displaying the color picker?" question and then clicks the "Bang" button|A popup alert appears with a correct notification message|
|A user clicks on the "Bang" submit button within the quiz after making a incorrect multiple choice selection|A user selects "CSS" radio button on the "Which language is responsible for displaying the color picker?" question and then clicks the "Bang" button|A popup alert appears with a incorrect notification message|
|A user clicks to dismiss the alert popup window in the quiz and the alert window disappears while the quiz window rolls in a new question|A user dismisses the alert window |The popup alert disappears and the user sees the next question|
|A user clicks on the "View Answers" button at the end of the quiz and the answer key list rolls into the quiz window|A user clicks on the "View Answers" button at the end of the quiz|The list of answers rolls in|


## Setup

Install by cloning this repository.

## Technologies Used

JavaScript
jQuery
Bootstrap
HTML

### Legal

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
