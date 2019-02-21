# 7.4 Majestic Thai

A dynamic restaurant page

---------------

## Objectives

### Learning Objectives

After completing this assignment, you should:

- Understand how to design and execute a front end application given ambiguous
  requirements by a client.
- Understand how React and Django Rest Framework  fit together to create a dynamic
  frontend application.

### Performance Objectives

After completing this assignment, you should be able to:

- Create wireframes, a domain model, and a outline of objects
  needed as part of the planning process when making a complex front end
  application.
- Execute client requirements to make a complete application.

## Details

### Deliverables

* A repo containing a django project with DRF API and a frontend built with React and SCSS

## I'm a Full Stack Developer Mode

A "client" has approached you and asked you to help them build a web presence.
They are a local Thai restaurant called Majestic Thai. They don't know anything
about the Internet, but they know they need a web page. They want an interactive
menu that displays all of their food choices with prices, descriptions, etc.
They also want the customer to be able to select menu items and create an order
with a total price. When the user saves the order, it should create a new item
on the backend so that the kitchen can process the order.

Create a React + Django app to create a dynamically updating menu page. See Additional Resources for an example of an actual restaurant page.

### Tasks

#### Setup a new Django Project and Install Django Rest Framework
- [ ] Create django project
- [ ] Install django rest framework (add drf to your installed apps)
- [ ] Create a frontend app that will hold your react project (add frontend to installed apps)

#### Getting Started (Thinking in React: Mock + Step 1)
- [ ] Setup the scaffolding and install React
- [ ] Setup a mock of the page (include the different dynamic portions of the application)
- [ ] Produce static data for the menu items (sample JSON)
- [ ] Produce a functional static mockup

#### Menu (Thinking in React: Step 2, 3, & 4)
- [ ] `console.log` the static JSON for the menu items
- [ ] Render a component for each menu item, not according to category.
- [ ] Define a FoodItem component
- [ ] Define a FoodList component that calls FoodItem
- [ ] `console.log` the food object when I click on its price button
- [ ] Using Fetch pull the menu items from your RESTful API

#### Order view
- [ ] Define an Order component
- [ ] Render an instance of Order component
- [ ] Define an order object in your application state
- [ ] Pass the order to the Order component
- [ ] `console.log` the order when I click on the foods price
- [ ] Add the food object to the order
- [ ] In Order, `console.log` the order
- [ ] In Order, `console.log` a food model every time a food model is added to the order
- [ ] Render the data from the order every time the order is updated
- [ ] In Order, define a `subtotal` function that calculates the total price.
- [ ] `console.log`, then render, every time the order is updated

#### Order data
- [ ] Save the order data to your RESTful API when the order is submitted

## Hey Mikey, I Think He Likes It Mode
- Organize the food by category
- Create another page (e.g. admin.html) that gives the owner the ability to view
  the orders and "complete" them.

## Additional Resources
- [Example of a real restaurant app](https://eatstreet.com/angel-thai-cuisine/menu)
