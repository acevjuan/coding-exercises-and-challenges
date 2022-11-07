const titleOutsideFunction = 'this is a variable outside the function'

const welcome = {
  greeting: 'Hey',
  title: 'React'
}

const arrayDePrueba = [
  1,
  2,
  3,
  4
]

const willkommen = (title) => title;

function App() {
  //You can do something in between
  const titleInFunction = 'this is variable inside the function';
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>{welcome.greeting}, {welcome.title}!</h2>
      <h2>Now, in German: {willkommen('Hey, willkommen!')}</h2>
      <h2>Hello, {titleOutsideFunction}</h2>
      <h2>Hello, {titleInFunction}</h2>
      <h3>{arrayDePrueba[0]}</h3>
      <h3>{arrayDePrueba.map((item) => {
        return (
        <div>{item}</div>
        );
      })}</h3>

    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"/>
    </div>

    </div>
  );
}

export default App;
