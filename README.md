<!-- ![Screen Shot 2023-12-04 at 17 32 52](https://github.com/chrizgx/memory-game/assets/102369753/335d6e79-488c-4388-b09d-4a655b2b7969) ![Screen Shot 2023-12-04 at 17 33 19](https://github.com/chrizgx/memory-game/assets/102369753/9a23f5ed-18af-4512-95b9-0874d9f1dc03)
![Screen Shot 2023-12-04 at 17 33 45](https://github.com/chrizgx/memory-game/assets/102369753/1059c78c-f1eb-444f-9053-111a7ff23894) ![Screen Shot 2023-12-04 at 17 34 19](https://github.com/chrizgx/memory-game/assets/102369753/ae935014-32b3-470d-a44f-bf5235a0309d)
![Screen Shot 2023-12-04 at 17 34 27](https://github.com/chrizgx/memory-game/assets/102369753/4ff6329f-a3dc-4492-bf0b-5147026791ae) ![Screen Shot 2023-12-04 at 17 34 57](https://github.com/chrizgx/memory-game/assets/102369753/e58a3f5d-723c-4ad2-8649-6b29e1ccc0b0) -->
# Memory Game

This project is a fun and interactive memory game built using Angular. The game is designed to test and improve the player's memory skills.

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <img src="https://github.com/chrizgx/memory-game/assets/102369753/335d6e79-488c-4388-b09d-4a655b2b7969" style="width: 100%; max-width: 400px;">
    <img src="https://github.com/chrizgx/memory-game/assets/102369753/9a23f5ed-18af-4512-95b9-0874d9f1dc03" style="width: 100%; max-width: 400px;">
    <img src="https://github.com/chrizgx/memory-game/assets/102369753/1059c78c-f1eb-444f-9053-111a7ff23894" style="width: 100%; max-width: 400px;">
    <img src="https://github.com/chrizgx/memory-game/assets/102369753/ae935014-32b3-470d-a44f-bf5235a0309d" style="width: 100%; max-width: 400px;">
    <img src="https://github.com/chrizgx/memory-game/assets/102369753/4ff6329f-a3dc-4492-bf0b-5147026791ae" style="width: 100%; max-width: 400px;">
    <img src="https://github.com/chrizgx/memory-game/assets/102369753/e58a3f5d-723c-4ad2-8649-6b29e1ccc0b0" style="width: 100%; max-width: 400px;">
</div>

<style>
    @media (min-width: 600px) {
        img {
            max-width: calc(50% - 10px);
        }
    }

    @media (min-width: 900px) {
        img {
            max-width: calc(33.33% - 10px);
        }
    }
</style>

### Features

- Grid Size Selection: Players can choose between a 4x4 or a 6x6 grid based on their preference and skill level.
- Multiplayer Support: The game supports up to 4 players, making it a fun and competitive experience for groups.
- Card Preview: At the start of the game, all cards are briefly shown to give players a glimpse of the card locations.
- Memory Challenge: After the preview, cards are hidden and players must find matching pairs using their memory.

### Technical Highlights

- Angular: The game is built using Angular, demonstrating proficiency in this popular and powerful framework.
- Routing: The project uses Angular's routing capabilities to navigate between different components and views.
- Guards: The game uses Angular's guard feature to control access to the game component, ensuring a smooth user experience.
- Hash-Based Routing: The project is configured to use hash-based routing for better compatibility with legacy server configurations.

## Setup Installation

1. To run the game locally, you need to have Node.js and npm installed.
2. Then, install Angular CLI globally using npm: `npm i -g @angular/cli`
3. Clone the repository, navigate to the project directory, and install dependencies using `npm i`

### Run

After following the installation steps...
1. use `ng serve` to locally host the game.
2. Open your browser and visit http://localhost:4200 to play the game.

### Build & Host

1. Build the angular app with `npm build` or `ng build`

2. Set PORT environmental variable to the port on which you want to host the file server

3. Start Node.js server using `npm start` or `node server.js`

4. Visit http://localhost:{ PORT } and play!

## Conclusion

This memory game project showcases my skills as a developer, particularly in Angular and front-end development. I'm capable of creating engaging, interactive web applications with a focus on user experience and code quality. I'm open to opportunities where I can further apply and expand my skills.