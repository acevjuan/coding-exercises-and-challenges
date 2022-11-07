const titleOutsideFunction = 'This is a variable outside the function'

function App() {
  //You can do something in between
  const titleInFunction = 'This is variable inside the function';
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>{titleOutsideFunction}</h2>
      <h2>{titleInFunction}</h2>
    </div>
  );
}

export default App;
