import "./style.css";
import RouteApp from "./routes/routes";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/404";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RouteApp />
    </ErrorBoundary>
  )
}

export default App;
