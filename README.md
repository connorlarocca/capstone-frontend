# DECIDE 4 ME!

We've all been there. It's late, you and your friends are hungry...but for what? No one can ever agree. But now they don't have to with the help of DECIDE 4 ME! This app solves the problem of coming up with something to order, now a restaurant is given directly to you.

DECIDE 4 ME uses a Rails backend with a React frontend, and uses Bootstrap for some basic UI/aesthetics.

## Installation
Important note: This is just the backend for the app! The frontend to the app is available here: https://github.com/connorlarocca/decide4me-frontend

Clone down the code into your desired folder, then run this command: 

```bash
npm install
```

This should address any dependencies required for the frontend to work.

## Usage

```bash
npm run dev
```

You'll need to have the backend code (https://github.com/connorlarocca/decide4me-backend) running on http://localhost:3000.
You can view the app on http://localhost:5173.

## Roadmap

DECIDE 4 ME has several functionalities built into the backend that will be fully implemented in the future! Those include:

- a FULLY FUNCTIONAL favorites system, where all necessary CRUD actions can be utilized
- a seperate "portal" for restaurant accounts to add their restaurant/s and edit them accordingly
- a tagging system for both restaurants and users, including dietary restrictions and preferences for users, and accomodation tags for restaurants (with an important nod to spice lovers!)
