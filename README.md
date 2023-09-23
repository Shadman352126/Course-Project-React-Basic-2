# Course Registration React

## Description

Course Registration is an eco-friendly e-commerce platform that sells sustainable online courses. I hvae built the hole project at my office pc and uploaded it to my personal github private repository. and after coming home i had made few changes and now uploading it.

## Project Features

- When users click on select button for add items to cart, the total price of the items is displayed.
- The total credit hour is prominently shown by default value 0. When add items credit value also add with total credit hour and users cannot proceed with the purchase if it exceeds 20 credits.
- Also have a credit hour remaining of 0 hr. At the same time user can't clicked on a item twice. If from these conditions are false browser show toast.
- Users can browse a variety of eco-friendly products, add them to the cart, and proceed to checkout.
- The React app provides a smooth single-page shopping experience with dynamic updates to the cart and remaining credit.

## State Management

In this project, state management is efficiently handled using React's useState hook. Here's a breakdown of the state variables and their updates:
In this project, state management is efficiently handled using React's useState hook. Here's a breakdown of the state variables and their updates:

### State Variables

- `selectedItems`: An array that stores the selected items in the cart.
- `totalcredit`: A variable that tracks the total credits used.
- `cardTotalPrice`: A variable that tracks the total price of items in the cart.
- `remaining`: A variable that tracks the remaining credits.

### State Updates

- The `selectedBtnHandleClick` function is responsible for updating the state variables when an item is selected. It handles duplicate selection and insufficient credits gracefully.

## Components

The application is divided into different components for a well-structured user interface:

- **Header**: Rendered at the top of the page.
- **Items**: Rendered to allow users to select items and receives the `selectedBtnHandleClick` function as a prop.
- **Carts**: Rendered to display cart information and receives relevant state data (`selectedItems`, `totalcredit`, `cardTotalPrice`, and `remaining`) as props.
- **Footer**: Rendered at the bottom of the page.
