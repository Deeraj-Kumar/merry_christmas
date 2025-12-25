const { useEffect } = React;

function App() {
  useEffect(() => {
    document.title = "🎄 Merry Christmas!";
  }, []);

  return (
    <div className="app">
      <h1 className="title">🎄 Merry Christmas Anu Papa!!❤️ 🎄</h1>

      <img
        src="./1.jpg"
        className="photo"
        alt="Christmas"
      />

      <p className="message">
        Wishing you joy, peace, and happiness this Christmas ✨   
      </p>

      <footer>
        Made with ❤️ by <span>Dheeru</span>
      </footer>

      <div className="snow"></div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
