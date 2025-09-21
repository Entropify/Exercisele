
# Exercisele

Have you ever found learning and memorizing new gym exercises boring and tedious?

Inspired by Countryle, Worldle, and Capitale, **Exercisele** is a browser-based educational guessing game where players try to identify exercises based on features like primary muscle groups, equipment, and exercise type. Each guess provides feedback on how closely it matches the target exercise, helping users learn proper form and key techniques.
This project is an ongoing passion project where I will periodically add new gym exercises I have personally learned in the gym as well as new features and UX improvements.

## Update 1.01.5 (Youtube Link & Difficulty Rating Improvements)
- Updated Youtube tutorial links for each appropriate exercise (all 42 exercises so far, new ones will be added as I learn more exercises)
- Updated difficulty rating for some of the exercises previously with inaccurate ratings

## Update 1.01 (Exercise List & UX Improvements)
- Added a separate page with all the exercises in the database used in the game
- Added a search bar & search filter to the list page, supporting multi-filter search
- Added a value "youtube" to all the objects in the exercises array, such that each exercise has its own attributed Youtube link (Youtube links are placeholders for now, will be updated with the appropriate video later down the line)
- Added a feature such that when clicking the empty textbox, a dropdown menu of a list of all exercises is shown such that if the user does not know any names, they can still start somewhere
- Added the ability to see the Youtube link of the exercise when the answer is revealed (currently Youtube links are placeholders)

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
4. Use the feedback to refine your guesses and learn proper form.
5. Keep guessing until you find the correct exercise!

## Tech Stack
- **HTML** – page structure
- **CSS** – styling and layout
- **JavaScript** – game logic and dynamic feedback

## Contributing
Contributions are welcome! If you'd like to add more exercises, improve feedback visuals, or enhance gameplay, feel free to submit a pull request.

Made by Zhiyuan (Jerry) Jiang.

## License
This project is licensed under the [MIT License](LICENSE).
