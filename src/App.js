import io from 'socket.io-client';

function App() {
  const connectSocket = () => {
    io('http://localhost:9999');
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={connectSocket}>Connect</button>
    </div>
  );
}

export default App;
