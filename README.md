# 🧙🏼‍♂️ [Bot Wizard Mini-App Concept](http://bot-wizard.guicheffer.me/)

This is a mini POC/playground to setup a custom bot intents based on customer's preferences aiming to quickly configure an AI bot.

- [The **Demo version** here](http://bot-wizard.guicheffer.me/)

## Summary

- [Demo](http://bot-wizard.guicheffer.me/)
- [Requirements](#requirements)
- [Available Scripts](#available-scripts)
- [Ideas](#ideas)
- [Learn more](#learn-more)

## Requirements

- _Node_ = `14.*`
- _Yarn_ = `1.*`

## Available Scripts

In the project directory, you might run:

### `make start`

It also correctly bundles React in production mode and optimizes the build for the best performance and extract it to the `build` folder and start the application.

### `make dev` or `make run`

**ps**. Remember you can also use production's URL directly [here](http://bot-wizard.guicheffer.me/).

Runs the app in the development mode. 🔥<br />
Make sure you manually open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `make test-stuff`

Launches the test runner in the interactive watch mode.

#### `make test-coverage` (run to generate the coverage reported by Jest's deps)

This will generate a coverage folder with more details to be exported afterwards.

### `make i` | `make install`

Install dependencies from yarn's package.json.

### `make help`

Please execute that in order to be aware of what commands you might be able to run.

## Ideas

- [x] **Architectural/Technology** <br/>
  - The simple architecture choices here were taking agility into account, that's why I considered not improving it a lot;
  - Timeouts
    - I haven't included any, but would be good if I had...
  - GraphQL
    - I started converting our `intents.json` into a searchable thing on GraphQL-ish using Apollo but then I gave up since I wanted to make it as simpler as possible;
  - Tests
    - omg, there were lots of spaces for tests here, however, I only added some because of time-spacing :(
- [x] **Performance** <br/>
  - I believe there's a lot of space for performance here;
- [x] **Reusable Code** <br/>
  - I tried my best, however, I knew if I had more time, (as I've been a bit busy recently), I would tackle it to improve a bit the performance.
  - I also wanted to add [Storybook](https://storybook.js.org/) on this project but then, time was running faster than I thought :(
    - We could use the components from the `components/shared/` folder in order to migrate our Storybook comps, for example.
    - Also common components such as the fake checkbox.
  - **ps**. I also added some comments across the codebase to explain a bit better how things are separated as per the concerns;
- [x] **UX** <br/>
  - I understand there are many things and many other features that could be added in – therefore, I wasn't really worried since I would like to spend, like recommended, a few hours in this little POC :)
- [x] **Acessibility** <br/>
  - I'm really sorry but I wasn't very successful in Acessibility here - I could have that improved a lot!
  - ...honestly, acessibility looks terrible! 😔

## Learn More

Visit my corner on the web: [guicheffer.me](http://guicheffer.me)
