# Pomodoro Timer

This project is a Pomodoro Timer built with React. The Pomodoro Technique is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.

## Project Structure

The project is structured into several React components:

- `Pomodoro`: This is the main component that manages the state of the timer and controls the flow of the application.
- `Timer`: This component displays the current time left in the session.
- `TimerControls`: This component provides the controls for starting, pausing, and resetting the timer.
- `BreakSessionDisplay` and `SessionLengthDisplay`: These components display the current lengths of the break and work sessions, respectively.
- `BreakSessionAdjuster` and `SessionLengthAdjuster`: These components allow the user to adjust the lengths of the break and work sessions, respectively.

## Features

- Start, pause, and reset the timer.
- Switch between work and break sessions automatically.
- Adjust the length of work and break sessions.
- Play a sound when the timer reaches zero.

## Usage

To use this application, clone the repository and install the dependencies with `npm install`. Then, start the development server with `npm start`.

## Dependencies

- React
- useState, useEffect, useMemo from React for state management and side effects.

## Future Improvements

- Add the ability to customize the length of the intervals and breaks.
- Add a feature to save and load different timer configurations.
- Improve the user interface for a more engaging user experience.

## License

This project is licensed under the MIT License.

## Acknowledgements

This project was inspired by the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique).