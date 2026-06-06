# Paradise Nursery Shopping Application

## Repository Name
`e-plantShopping`

## Project Overview
Welcome to **Paradise Nursery**, a modern, responsive, front-end e-commerce web application designed for houseplant enthusiasts. Built using React and powered globally by Redux Toolkit, this application provides an intuitive platform where users can seamlessly browse various classifications of indoor plants, track their purchases dynamically, and manage a real-time shopping cart prior to checking out.

This project represents the cumulative capstone for Module 4, synthesizing state management, optimized unidirectional data flow pipelines, component modularity, and advanced styling into a production-ready application.

## Key Features
- **Interactive Landing Page:** A welcoming landing view featuring a background layout, informational overview of the company, and a "Get Started" call-to-action button that transitions smoothly into the store catalog.
- **Categorized Product Catalog:** Houseplants are cleanly partitioned into distinct categories (*Air Purifying Plants*, *Aromatic Plants*). Each product card renders a crisp thumbnail image, descriptive text, item price, and a responsive "Add to Cart" button.
- **Dynamic Button Toggling:** To minimize visual clutter and redundant state actions, product buttons automatically swap into a disabled `"Added to Cart"` configuration once clicked.
- **Global Application State Header:** A persistent navigation header accessible from any checkout or product page that displays an active real-time numerical indicator badge showing total items selected.
- **Comprehensive Shopping Cart Management:** A detailed cart sheet allowing users to review thumbnail images, modify unit quantities with responsive `+` or `-` increments, delete items completely, and watch automatic real-time updates for plant subtotals and the grand total price matrix.

## Technology Stack
- **Framework:** React (Functional Components & Hooks)
- **State Architecture:** Redux Toolkit (Slices, Reducers, Actions, Selectors via `useSelector` and `useDispatch`)
- **Styling Paradigm:** Responsive CSS Modules / Styled JavaScript Objects
- **Build Tool:** Vite
- **Deployment Platform:** GitHub Pages

## Deployment Link
*Once deployed via GitHub Pages, insert your live URL link below:*
👉 [Live Application Link](https://mandisi65.github.io/e-plantShopping/)