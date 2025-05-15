import Container from "react-bootstrap/Container";
import Search from "./Search.jsx";
import UsersList from "./UsersList.jsx";
import users from "../data/users.js";
import { useState } from "react";

const UsersContainer = () => {
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleFiltering = (searchByEmail) => {
    // Filtering users according to search value.
    const filteredUsersData = users.filter((user) => {
      return user.email.includes(searchByEmail);
    });
    setFilteredUsers(filteredUsersData); // updating users list to render.
  };

  return (
    <>
      <Container className="mt-4">
        <Search onSearch={handleFiltering} />
        <div className="mt-4">
          <UsersList usersData={filteredUsers} />
        </div>
      </Container>
    </>
  );
};

export default UsersContainer;
