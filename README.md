# Sparrow Shot: [Link to Shot](https://sparrow-shot.netlify.app/)
    The live website in which one can make Screenshots out of a plain URL.

## Advantages:
    Easy configuration of the request.
    Adjustable Quality of the screenshot.
    Switchable Formats.

## Tech Stack:
    React Front-End
    Express Back-End

## ESLint:
    Added to both the server and the client.
    Helps in keeping the code clean and right.
    Checkout the configuration on package.json

## [Front-End:](https://github.com/jeyansaran620/Sparrow_shot/tree/main/client):
    Built using react supported with Reactstrap for its responsiveness.
    Added some animation to maintain the theme of Shot.
    Splitted into simple components of Navbar, Jumbotron, Form, Footer.
    The Form Class Component takes in charge of the Request and handles Errors.
    Once the The ScreenShot is ready, it is displayed with a Download Button.

## [Back-End:](https://github.com/jeyansaran620/Sparrow_shot/tree/main/server):
    Build using Express js to respond to the client.
    Node-Webshot package is used for making the screenshots.
    Once the screenshot is ready, server responds with its URL.
    There is a static server running to serve files.

## Future Improvements:
    Extending the support to include PDF format.
    As built over React, could be easily scale to Native application. 
    Automatic old files clearing on the server with user sessions.
    Over-coming limitaions of the Webshot with site CSS properties.
