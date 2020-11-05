# Sparrow Shot: [Link to Shot](https://sparrow-shot.netlify.app/)
    The Live Website in which one can make Screenshots out of a plain URL.

## Advantages:
    Easy configuration of the request.
    Adjustable Quality of the screenshot.
    Switchable Formats.

## Tech Stack:
    React Front-End
    Express Back-End

## [Front-End}:
    Build using react supported with Reactstrap for its responsiveness.
    Added some animation to maintain the theme of Shot.
    Splitted into Simple components of Navbar, Jumbotron, Form, Footer.
    The Form Class Component takes in charge of the Request and handles Errors.
    Once the The ScreenShot is ready, it is displayed with a Download Button.

## [Back-End]:
    Build using Express Js to respond to the client.
    Node-Webshot package is used for making the screenshots.
    Once the screenshot is ready, server responds with its URL.
    There is a static server Running to serve Files.

## Future Improvemnts:
    Extending the support to include PDF format.
    As Build over React, could be easily scale to Native Application. 
    Automatic Old Files Clearing on the server with user sessions. 
