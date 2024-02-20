import { PuffLoader } from "react-spinners";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Introduction from "./Components/Introduction";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
    {window.history.pushState({}, undefined, "/")}
  }, []);

  return (
    <div>
      {loading ? (
        <div className="show-banner-container">
          <PuffLoader
            color={"#B5C8CB"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Introduction />
      )}
    </div>
  );
}

export default App;
