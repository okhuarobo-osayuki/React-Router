import { useRouteError } from "react-router-dom";
import "../style.css";

function Error() {
  const error = useRouteError();
  return (
    <div className="error">
      <h1>EWO!</h1>
      <p>{error.message || error.statusText}</p>
    </div>
  );
}
export default Error;
