const { useEffect } = React;

function App() {
  useEffect(() => {
    document.title = "🎄 Merry Christmas!";
  }, []);

  return (
    <div className="app">
      <h1 className="title">🎄 Merry Christmas 🎄</h1>

      <img
        src="https://images.unsplash.com/photo-1608889175642-20c6b8f1bb09"
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
