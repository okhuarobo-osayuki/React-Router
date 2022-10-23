import { Link } from "react-router-dom";
import "../style.css";

//use error boundry to catch errors
function ErrorFallback() {
    return (
        <div role="alert" className="error">
            <h1>EWO!</h1>
            <img src="https://placedog.net/300/300?id=50" alt="random dog" />
            <p><i>Be like you don enter where you nor know</i></p>
            <p> Oya <Link to={"/"} >start again</Link></p>
        </div>
    )
}

export default ErrorFallback;
