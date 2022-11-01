import "../style.css";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Loader from "../components/loading";
import ErrorPage from "./404";

function User() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=5&seed=abc`
  );

  const pages = 30;

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
          const location = `${each.location.city}, ${each.location.state}`;
          const age = each.dob.age;
          const email = each.email;
          const pic = each.picture.large;
          return (
            <li className="list" key={name.toLowerCase().replaceAll(" ", "")}>
              {index + 1}.
              <div className="single-user">
                <div>
                  <img src={pic} alt={name} />
                </div>
                <div>
                  <span>Name:</span> {`${name}`}
                </div>
                <div>
                  <span>Location:</span> {`${location}`}
                </div>
                <div>
                  <span>Age:</span> {`${age}`}
                </div>
                <div>
                  <span>Email:</span> {`${email}`}
                </div>
              </div>
            </li>
          );
        })}
        <div className="pagination">
          {
            <button
              className="prev"
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              prev
            </button>
          }
          {Array.from({ length: pages }, (value, index) => index + 1).map(
            (each) => (
              <button className="pages" onClick={() => setPage(each)}>
                {each}
              </button>
            )
          )}
          {
            <button
              className="next"
              disabled={page >= pages}
              aria-disabled={page >= pages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              next
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default User;
