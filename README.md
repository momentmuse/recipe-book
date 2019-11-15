## What is this

![](src/assets/desktop1.png 'Just look how cute!')
![](src/assets/desktop2.png 'Hungry yet?')

🍳 A simple yet charming recipe book built in React, using the notoriously finicky RecipePuppy API. 😹
I mostly built this with the purpose of practicing hooks, so you won't find any class components here. Other techologies leveraged: styled-components for flair, Axios for the API call, and Enzyme with Jest for testing. Assets courtesy of flaticon and fontawesome. Puns courtesy of yours truly.

![](src/assets/mobile2.png "It's fully responsive :)")
![](src/assets/mobile1.png 'Check out your previous searches')

### How to start!

🚀 Runs the app in the development mode. That's `npm start` | `yarn start`, depending on your setup. Similarly, running the `test` script prefixed by your package manager should run --watch Jest.

Anyway, open [http://localhost:3000](http://localhost:3000) to view it in your browser, and get cooking!

Ok so the heart icons to add to favourites are just for show and don't do anything. And when you leave or refresh the page, all of your search history disappears, because generally this information would be stored in a session on a server somewhere, and localstorage would only handle the cookie/authentication token, and this was mostly for React practice. But that's for a future iteration 😉

### Observations

🤓 _Room for improvement_

- the CSS could be modularized more, also I'm not very familiar with styled-components best practices, used to sass
- having a design system in place for visual components would be nice, so you're not wasting time calibrating button padding
- some awkward conditional rendering in components like the SearchResults--what code patterns can help rectify these?
- although the proxy server works in order to get the request through, it's still 500-ing randomly
- also, are these thunbnails for ants?! Honestly I would just use a different API or create my own
- testing 🧐 need to take a course or two there
- pull out helper functions and make use of useCallback to reduce load on each rerender
- additionally, start looking into how computationally expensive each operation/function is, especially for asynchronous requests

🦄 _Looking to the future_

- more in-depth testing, with mocks and simulated actions
- design principles and better understanding of code architecture best practices
- backend integration! perhaps spin up an Elixir server
- alternatively, something wild like GraphQL + Apollo
- though hooks were fun, I have to say I miss class components and state
- likewise for Redux, where my reducers at?! 💜
- interested in exploring functional practices for JS on the front-end
- time to finally learn CSS grid
