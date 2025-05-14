# Product Display App

This project is a product display application built with Next.js and React. It fetches a list of products from an API and displays them in a grid layout, allowing users to view product details. The data is cached in `localStorage` for better performance and to avoid redundant API calls.

## Features
- **Product List**: Displays a grid of products with title, description, rating, price, and thumbnail image.
- **LocalStorage Cache**: Products data is fetched once and stored in `localStorage` for faster access during subsequent visits.
- **Dynamic Navigation**: Clicking on a product takes the user to a product detail page using Next.js dynamic routing.

## Technologies Used
- **Next.js**: A React framework for building server-side rendered applications.
- **React**: The JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs.
- **TypeScript**: A superset of JavaScript that adds static typing.

## Setup

Follow these steps to get the project running locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/product-display-app.git
cd product-display-app


npm install


npm run dev
