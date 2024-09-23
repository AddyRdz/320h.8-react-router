import React from "react";
import { users } from "../assets/users";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <div>
        {users.map((user) => (
          <Link to={`/profile/${user.id}`} key={user.id}>
            <div>{user.name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
