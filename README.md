# HANGMAN
#### Video Demo:  <URL HERE>
#### Description:

The **Hangman** game is a web-based implementation of the classic word-guessing game. The project incorporates dynamic JavaScript functionality, engaging visuals, and responsive design to provide a fun and interactive user experience. Players must guess the hidden word by entering one letter at a time, avoiding incorrect guesses that draw a progressively complete hangman figure.

This project is a showcase of integrating front-end technologies like HTML, CSS, and JavaScript, while applying best practices in user interface design and user experience. The application runs entirely in the browser and is lightweight and responsive.

Features
--------

*   **Dynamic Gameplay**: The game dynamically updates the display based on user input.

*   **Error Messaging**: Invalid inputs (e.g., non-English characters) or repeated guesses trigger appropriate on-screen messages.

*   **Visual Feedback**: The hangman figure updates progressively with each incorrect guess, providing visual feedback to the player.

*   **Responsive Design**: The game layout adjusts for different screen sizes to ensure accessibility on desktops and mobile devices.

*   **Keyboard Integration**: Players can submit their guesses by pressing the "Enter" key for a seamless experience.

*   **Stylized Logo and Design**: A visually appealing black-themed logo and gradient backgrounds enhance the user interface.


Project Structure
-----------------

The project is structured with separate files for HTML, CSS, JavaScript, and assets to maintain modularity and clarity.

### Files and Their Roles

1.  **index.html**:

    *   The landing page of the game.

    *   Contains a stylized "Hangman" logo and a "Start Game" button to navigate to the game interface.

2.  **game.html**:

    *   The main game interface.

    *   Displays the hangman figure, hidden word, lives, guessed letters, and input for user interaction.

    *   Includes a message container for error and status messages.

3.  **style.css**:

    *   Defines the visual appearance of the game.

    *   Includes gradient backgrounds, button styles, responsive layouts, and custom logo design.

    *   Ensures consistency across devices with responsive adjustments.

4.  **script.js**:

    *   Implements game logic and interactivity.

    *   Key functionalities include:

        *   Word selection from a predefined list.

        *   Display updates for correct and incorrect guesses.

        *   Validation of input to ensure only valid English letters are accepted.

        *   Message handling for win, loss, and invalid input scenarios.

        *   Automatic submission of guesses when the Enter key is pressed.

5.  **words.js**:

    *   Contains a comprehensive list of potential words for the game.

    *   Words are selected randomly to provide variety in gameplay.

6.  **static/images**:

    *   Contains images representing the different stages of the hangman figure (hangman\_step\_0.jpeg through hangman\_step\_10.jpeg).

    *   Includes hangman\_step\_10.jpeg as the favicon.


Design Choices
--------------

### Game Flow

*   **Word Validation**: To ensure a smooth user experience, only valid English letters (A-Z) are accepted. Characters like Ö or numbers are rejected with an on-screen message.

*   **Win/Loss Conditions**: The game concludes with bold, color-coded messages:

    *   Green for a win.

    *   Red for a loss.

*   **Refocusing Input**: The input field is always focused to minimize user frustration.


### Visual Design

*   **Logo**: The "HANGMAN" logo uses the Cinzel font for an elegant, serif-based design. A black color scheme with subtle shadows creates a professional appearance.

*   **Background**: Gradient backgrounds were chosen for a clean and modern look.

*   **Responsive Design**: CSS media queries ensure the game remains accessible on smaller screens.


Challenges and Considerations
-----------------------------

1.  **Input Validation**:

    *   Initially, validating inputs such as preventing non-English characters required research into JavaScript’s RegExp capabilities.

    *   The final solution uses /^\[A-Z\]$/ to allow only uppercase English letters.

2.  **Focus Management**:

    *   Ensuring the input box remained focused after every guess or reset required precise placement of .focus() calls.

3.  **Dynamic Messaging**:

    *   On-screen messages involved careful integration of a message container with styled feedback for different scenarios.

4.  **Visual Aesthetics**:

    *   Balancing readability, functionality, and aesthetics demanded iterative adjustments in font sizes, colors, and layout.


How to Run
----------

1.  Clone or download the project files.

2.  Open index.html in any modern web browser to access the game.


Future Improvements
-------------------

*   **Score Tracking**: Add functionality to track and display the player's score across multiple rounds.

*   **Multiplayer Mode**: Allow two players to take turns guessing or competing.

*   **Theme Options**: Provide light and dark theme toggles.

*   **Accessibility Enhancements**: Include features like screen reader compatibility and adjustable font sizes.


This project reflects a well-rounded application of front-end development principles and provides a solid foundation for further enhancements.
