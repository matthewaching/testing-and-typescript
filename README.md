# Section 1

git clone https://github.com/matthewaching/testing-and-typescript.git

cd ./testing-and-typescript

npm create vite

Project name: .

Ignore files and continue

React

JavaScript + SWC


npm install

npm run dev

# Section 2
npm install -D typescript

npm install -D @types/react

npm install -D @types/react-dom

npm install -D vite-plugin-checker

npx tsc - -init

In vite.config.js: [react(), checker({ typescript: true })],

In tsconfig.json: “jsx”: “react-jsx”,

# Section 3
git restore .

git checkout install-typescript

npm  install

# Section 4
git checkout install-typescript-solution

# Section 5
npm install -D jest

npm install -D ts-jest

npm install -D jest-environment-jsdom

npm install -D @types/jest

npm install -D @testing-library/react

npm install -D @testing-library/jest-dom

npm install -D @testing-library/user-event

npx ts-jest config:init

In jest.config.js: import { createJsWithTsPreset } from "ts-jest";

testEnvironment: “jsdom”,

///

…createJsWithTsPreset(),

In package.json: “test”: “jest”

# Section 6
git checkout install-jest

npm run test  --  --coverage

# Section 7
git checkout install-jest-solution
