const App = () => { // ES6
  const data = {
    name: 'John',
    age: 40,
  }
  return (
    <div className="App">
      <Child data={data} />
    </div>
  );
}

// prop drilling!

// one way data binding 

const Child = ({ data }) => { // ES6
  return (
    <div>
      <SecondChildComponent data={data} />
    </div>
  )
}

const SecondChildComponent = ({ data }) => {
  return (
    <div>
      <ThirdComponent data={data} />
    </div>
  )
}

const ThirdComponent = ({ data }) => {
  return (
        <div>
      {data.name}
      <br />
      {data.age}
    </div>
  )
}

export default App;
