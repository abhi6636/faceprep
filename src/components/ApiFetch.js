import React, { useState, useEffect } from "react";
import "./ApiFetch.css";

function ApiFetch() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //fetch users
  async function fetchUsers() {
    setLoading(true);
    setTimeout(async () => {
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
      );
      const data = await response.json();
      setUsers((users) => [...users, ...data.results]);
      setLoading(false);
    }, 1000);
  }

  //handle scroll
  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading
    ) {
      setPage((page) => page + 1);
      fetchUsers();
    }
  }

  return (
    <div className="card-container">
      {users.map((user) => (
        <div className="card" key={user.login.uuid}>
          <img
            src={user.picture.medium}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <div className="card-details">
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>
      ))}
      {loading && (
        <div className="skeleton-loading">
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
        </div>
      )}
    </div>
  );
}

export default ApiFetch;
