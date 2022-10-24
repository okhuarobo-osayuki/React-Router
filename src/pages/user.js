import "../style.css";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Loader from "../components/loading";
import ErrorPage from "./404";

function User() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );

  const PER_PAGE = 5;
  const pages = 50;
  const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <Loader />;
  }

  if (!loading && error) {
    return <ErrorPage />;
  }

  return (
    <div className="user">
      <h2>List of Users</h2>
      <div className="user-list">
        {data?.results.map((each, index) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          return (
            <li key={name.toLowerCase().replaceAll(" ", "")}>{`${
              index + 1
            }.${name}`}</li>
          );
        })}
        {
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            prev
          </button>
        }
        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each) => (
            <button onClick={() => setPage(each)}>{each}</button>
          )
        )}
        {
          <button
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            next
          </button>
        }
        
      </div>
    </div>
  );
}

export default User;
