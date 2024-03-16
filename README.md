# Shopping Cart with Firebase Integration

This project implements a shopping cart application using React functional components and the useState hook. It allows users to:

- View and browse products
- Add products to their cart
- Add products to the shopping list
- Update existing products
- Delete products
- Create new products
- `Sort products on the created time`

`deployed URL`: https://shoppingcart-8f8dc.web.app/  
`Youtube`: https://youtu.be/nUINQkaao5A

## Created Process
1. Initialized Vite React project.
2. Set up ESLint and Prettier for code linting and formatting.
3. Integrated the latest Bootstrap library into `index.html`.
4. Configured and initialized Firebase store.
5. Added Firebase module for backend services.
6. Developed and implemented React frontend alongside Firebase services integration.

`gpt prompt used: "improve my created process"`

## To Build

To build the project, run the following command:
```bash
npm install && npm run dev
```

## Support Tools
1. ESlint, Prettier
2. Bootstrap
3. Firebase
4. React

## Debugging Process
Debugger and console printing are utilized to verify the correctness of objects and inspect the workflow.

## Knowledge Learned
- Deployed a Firebase application and established a connection to a NoSQL database.
- Gained proficiency in using the `useState` hook and functional components.
- Practiced passing data and functions between components.
- Learned how to handle requests effectively within the application and how to handle the render for requested data.

## File Structure
./src
├── App.css
├── App.jsx
├── assets
│   └── react.svg
├── components
│   ├── CreateProductForm.jsx
│   ├── Product.jsx
│   ├── ProductsList.jsx
│   └── ShoppingCart.jsx
├── index.css
├── main.jsx
└── models
    ├── MyFirebase.js
    └── ProductsService.js