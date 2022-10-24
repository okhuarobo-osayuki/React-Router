import "./style.css";
import RouteApp from "./routes/routes";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

//set error boundary
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="errFallBack">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  );
};


function App() {
  const navigate = useNavigate();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate("/")}>
      <RouteApp />
    </ErrorBoundary>
  )
}

export default App;