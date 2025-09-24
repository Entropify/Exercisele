
# Exercisele

Have you ever found learning and memorizing new gym exercises boring and tedious?

Inspired by Countryle, Worldle, Flagle, and Capitale, **Exercisele** is a browser-based educational guessing game where players try to identify gym exercises based on features like primary muscle groups, equipment, exercise type, and difficulty. Each guess provides feedback on how closely it matches the target exercise and which features are guessed incorrectly, helping users learn proper form and key techniques.
This project is an ongoing passion project where I will periodically add new gym exercises I have personally learned in the gym, as well as new features and UX improvements.

## Features
- Guess exercises and receive feature-based feedback
- Learn about muscles, equipment, and form tips
- Dynamic browser interface with color-coded similarity indicators
- Expandable exercise database
- Currently around ~40 exercises

## How to Play
1. Open the game in your browser.
2. Type or select your exercise guess.
3. View feedback showing how your guess compares to the target exercise in terms of:
   - Primary muscle groups
   - Equipment used
   - Exercise type (compound or isolation)
   - Difficulty of exercise
4. Use the feedback to refine your guesses and learn proper form.
5. Keep guessing until you find the correct exercise!

## Tech Stack
- **HTML** – page structure
- **CSS** – styling and layout
- **JavaScript** – exercise database, game logic, and dynamic feedback

## Contributing
Contributions are welcome! If you'd like to add more exercises, improve feedback visuals, or enhance gameplay, feel free to submit a pull request.

Made by Zhiyuan (Jerry) Jiang.

## License
This project is licensed under the [MIT License](LICENSE).

# Updates

## Update 1.02 (Endless & Daily Mode, Further UX Improvements)
- Added two mode buttons (Endless / Daily) with glow and an animated sliding indicator; added a short mode description under the intro that updates with mode.
- Implemented Daily mode:
   - Deterministic daily answer keyed to Eastern Standard Time so all users see the same puzzle each EST day.
   - Persisted Daily game state in localStorage (per ET day): guesses, attempts, finished/won status — restored on reload so a finished daily puzzle stays revealed and input remains hidden.
   - Fixed attempts handling for Daily mode so the Attempts X/6 display persists and restores correctly after reload.
   - In Endless mode the attempts counter is hidden until the first guess to keep the UI cleaner.

- UX / UI Improvements
   - Smooth expand / collapse animations for the box (slower, eased transitions on padding and max-height) and animated reveal for guesses.
   - Applied an acrylic “liquid glass” look to panels (game-area, tip-section, guess-items, table) and added soft neon glow to the Exercisele title.
   - Improved visuals: glow on mode buttons, subtle pulsing title glow, animated mode indicator.

- Mobile compatibility is still in progress; button-text overlap may persist on certain resolutions mobile devices.

## Update 1.01.5 (Exercise Youtube Link Implementations & Difficulty Rating Improvements)
- Updated YouTube tutorial links for each appropriate exercise (all 42 exercises so far, new ones will be added as I learn more exercises)
- Updated difficulty rating for some of the exercises previously with inaccurate ratings

## Update 1.01 (Exercise List & UX Improvements)
- Added a separate page with all the exercises in the database used in the game
- Added a search bar & search filter dropdown menu to the list page, supporting multi-filter and multi-category search
- Added a perimeter "youtube" to all objects in the exercises database array, such that each exercise has its own attributed Youtube link (Youtube links are placeholders for now, will be updated with the appropriate video later down the line)
- Added a feature such that when clicking the empty textbox on the main game page, a dropdown menu of a list of all exercises is shown, such that if the user does not know any names, they can still start somewhere
- Added the ability to see the YouTube link of the exercise when the answer is revealed (currently, YouTube links are just placeholders)

