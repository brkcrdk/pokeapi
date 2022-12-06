## Pokedex application

This application uses [pokeapi](https://pokeapi.co). It displays list of pokemons and it shows details of selected pokemon.

### TechStack
- NextJS: With NextJS we can get list and details inside serverside. Which is much performant than clientside.
- Typescript: Gives suggestions during development and it gives us type safety which is important to keep our code cleaner. 
- TailwindCSS: Even though this application is not focused on styling, tailwind gives us ability to make application looking better than bare buttons, link etc.
- react-paginate: This could be done by ourselves but this applications focus is not creating elements. react-paginate gives ability to make this task faster.

NOTE: pokeapi doesnt give us to search pokemons by searching their names. But if we really want to search pokemons by their names we have to:
- fetch all pokemons available for us,
- filter them by their names,
- make it work with pagination because paginated data and searched data will be seperate. 

If we really add search function we have to do pagination ourselves too, but this is not the projects aim so we left out searching feature.