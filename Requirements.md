# E-Commerce Product Listing App Requirements Checklist

## Project Setup
- [ ] Create a new React project: `npx create-vite ecom-product-app --template react`
- [ ] Navigate to project folder: `cd ecom-product-app`
- [ ] Install dependencies: `npm install`

## Component Structure
- [ ] Plan three-tier component hierarchy (App > ProductList > ProductItem)

## App Component (Parent)
- [ ] Initialize state using useState to store product list
- [ ] Create products with id, name, price, and description attributes
- [ ] Pass product list as props to ProductList component
- [ ] Apply custom CSS styling for main app layout

## ProductList Component
- [ ] Create ProductList component that accepts products as props
- [ ] Implement .map() method to iterate over products
- [ ] Render a ProductItem component for each product
- [ ] Apply custom CSS styling for product list layout

## ProductItem Component
- [ ] Create ProductItem component that accepts individual product data
- [ ] Display product name
- [ ] Display product price
- [ ] Display product description
- [ ] Style each product with visually distinct CSS

## Testing Requirements
- [ ] Verify products list displays correctly on page
- [ ] Confirm state and props are used correctly between components
- [ ] Ensure layout and styling look polished and consistent

## Optional Bonus Features
- [ ] Implement category filtering:
  - [ ] Add "category" attribute to products
  - [ ] Add UI for filtering products by category
- [ ] Add product images:
  - [ ] Include image URLs in product data
  - [ ] Display images in ProductItem component

## Final Submission
- [ ] React components properly structured with state and props
- [ ] CSS applied for responsive, well-styled UI
- [ ] All core requirements implemented and working
- [ ] (Optional) Push project to GitHub
- [ ] (Optional) Submit GitHub repository link

## Development Best Practices
- [ ] Keep components modular and organized
- [ ] Use props efficiently to pass data
- [ ] Test app frequently during development
- [ ] Ensure consistent and appealing UI