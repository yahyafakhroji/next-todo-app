# Todo App with Next.js

This is a simple Todo App application built with Next.js. It provides basic functionality for managing data.

## Technologies Used

- **Next.js v14 (Typescript)**: Next.js is a React framework that enables server-side rendering, static site generation, and more for React-based web applications. 
- **Jotai**: Jotai is a simple and atomic state management library for React. 
- **React Hot Toast**: React Hot Toast is a minimalistic and flexible toast library for React.
- **Sass**: Sass is a preprocessor scripting language that is interpreted or compiled into CSS.
- **ESLint**: A pluggable JavaScript linter.
- **Prettier**: An opinionated code formatter.
- **Stylelint**: A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- **Docker**: Docker is a platform for developing, shipping, and running applications using containerization technology.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `pnpm install`. ([Guide for Setup `pnpm`](https://pnpm.io/installation))
3. Start the development server using `pnpm dev`.
4. Visit `http://localhost:3000` in your browser to view the application.

## Folder Structure

- `/src`: Main Source Folder
	- `/app`: Contains Next.js app for routing.
	- `/components`: Contains React components used in the application.
	- `/interfaces`: Contains TypeScript type definitions or interfaces used throughout the application.
	- `/layouts`: Layouts Folder that define the overall structure or layout of different pages within the application.
	- `/states`: Contains state management for managing the application's using Jotai.
	- `/libraries`: Contains libraries function that used in the application.
- `/public`: Contains static assets such as images, fonts, etc.
