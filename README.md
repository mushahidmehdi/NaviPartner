# NaviPartner tech test

## Get started

Run `yarn install` and `yarn start`

## Project Structure

Feel free to create new files to help you complete these tasks. Additional dependencies can be installed.

`src/entry.tsx` is your react entry point.

`src/data` directory is a mocked-API which exposes methods to get/delete/update user & blog-post information.

Your tasks will be to add further logic to display and manipulate the data returned from these functions, without modifying data/index.js. Code addition should be unit tested.

## Tasks

1. Render a table of all users.
2. Render the table in a performant way.
3. When you click on a user row, it should expand the row and show the blog posts that belong to the user.
4. You should be able to click on a blog post row, it should navigate to the blog post page (url should update).
5. When on the blog post page, you should be able to click a Back button to get back to the users list page.
6. You should be able to edit the blog post title & body.
7. You should be able to delete users.
8. You should be able to delete blog posts from the table, and from the blog post page.
9. You should be able to add new blog posts for a user.
10. For state management, you are free to use whatever you like; however, keep in mind the easier it is to read your code, the better.
11. It should be responsive & reasonably pretty.

## Bonus points for:

1. Write appropriate unit-tests using React Testing Library.
2. Consider accessibility.
3. Ensure you are delivering 0 linting errors and 0 test failures.
4. Feel free to add additional features to improve the user experience such as filtering, loading-spinners, anything else creative.

### Completed task

I have completed all the tasks as outlined in the NaviPartner tech test. The project involved building a React application that interacted with a mocked API to display and manipulate user and blog post data. I implemented features such as rendering a table of users, displaying blog posts when a user row is clicked, allowing navigation to specific blog post pages, editing and deleting blog posts, and adding new blog posts.

In order to make the table rendering more performant, I have implemented pagination.

I used React Router for navigation between the users list and blog post pages.

I used hooks for state management and to make it easy to read the code.

I also made sure that the application is responsive and reasonably pretty by using CSS Flexbox and Media Queries for layout and by keeping all the desing with styled-components.
