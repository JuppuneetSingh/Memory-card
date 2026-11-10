# Pokémon Memory Card Game

A fun memory card game built with **React** and **Vite**, where the goal is to click as many different Pokémon as possible without selecting the same Pokémon twice.

## Features

- Fetches Pokémon data from the [PokéAPI](https://pokeapi.co/).
- Displays 10 randomly selected Pokémon.
- Uses official Pokémon artwork.
- Shuffles the cards after every click.
- Tracks the current score.
- Keeps track of the best score.
- Resets the current score when a Pokémon is clicked twice.
- Responsive card layout.

## Built With

- React
- JavaScript
- HTML5
- CSS3
- Vite
- PokéAPI

## How to Play

1. Click on any Pokémon card to earn a point.
2. The cards shuffle after every click.
3. Remember which Pokémon you have already selected.
4. Clicking the same Pokémon twice resets your current score.
5. Try to beat your best score!

## Getting Started

To run this project locally:

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd memory-card
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to play the game.

## API

This project uses [PokéAPI](https://pokeapi.co/) to fetch Pokémon information and official artwork.

No API key is required.

## What I Learned

Through this project, I practised:

- Working with React components and props.
- Managing state using `useState`.
- Handling side effects using `useEffect`.
- Fetching API data using `async/await`.
- Working with `Promise.all()`.
- Rendering dynamic lists using `map()`.
- Handling click events and conditional logic.
- Implementing the Fisher-Yates shuffle algorithm.

---

Built as part of my React learning journey with The Odin Project.
