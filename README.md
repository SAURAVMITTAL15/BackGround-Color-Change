# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## BackGround-Color-Change

A dynamic React application that allows users to change the background color of the webpage with a button click, styled using Tailwind CSS.

## 🚀 Features

* React: A JavaScript library for building user interfaces.

* Tailwind CSS: A utility-first CSS framework for rapid UI development.

* Dynamic Background Color: Click the button to change the background color.

## 🛠️ Built With

* React: JavaScript library for building user interfaces.

* Tailwind CSS: Utility-first CSS framework for rapid UI development.

* Vite: Next-generation, fast build tool.


* 📦 Prerequisites

Ensure you have the following installed:

* Node.js (v14 or higher)

* npm (comes with Node.js)

## 🧪 Getting Started

1. Clone the Repository

*  git clone https://github.com/SAURAVMITTAL15/BackGround-Color-Change.git

*  cd BackGround-Color-Change

2. Install Dependencies
 
*  npm install

3. Run the Development Server

*  npm run dev
  
Open your browser and navigate to http://localhost:3000 to see the app in action.

## 🎨 Usage

Click the "Change Background Color" button to cycle through different background colors. The page will update dynamically without a full reload.

## 🔧 React & Tailwind CSS Setup

1. Create a React App with Vite

Vite is a modern build tool that provides a fast development environment.

* npm create vite@latest my-app --template react

* cd my-app

2. Install Tailwind CSS

* npm install tailwindcss @tailwindcss/vite

3. Configure Tailwind CSS
Update the vite.config.js file to include the paths to all of your template files:

import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

  plugins: [
  
    tailwindcss(),
  
  ],

})

4. Add Tailwind Directives to Your CSS

In your src/index.css file, add the following lines:

* @import "tailwindcss";

This will include Tailwind's base, components, and utilities styles into your project.

5. Start the Development Server

* npm run dev

Your application should now be running with React and Tailwind CSS integrated.

## 📸 Screenshot

![Screenshot 2025-05-25 222949](https://github.com/user-attachments/assets/2a4b695c-fee5-4c7c-bdc9-2831e81f00de)
![Screenshot 2025-05-25 222939](https://github.com/user-attachments/assets/089554b4-9e71-4f11-a3bf-fae0f8be22f0)
![Screenshot 2025-05-25 222929](https://github.com/user-attachments/assets/198ba38b-f090-42db-afe9-fd66f2cc3926)
![Screenshot 2025-05-25 222916](https://github.com/user-attachments/assets/92f71e7f-4314-428b-8704-7e2d8eae4e11)

## 🧪 Testing

To run tests (if any):

* npm test

##🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository

2. Create a new branch (git checkout -b feature-name)

3. Commit your changes (git commit -am 'Add new feature')

4. Push to the branch (git push origin feature-name)

5. Open a Pull Request


