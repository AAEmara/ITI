import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchByEmail, setSearchByEmail] = useState("");

  const handleSearch = () => {
    onSearch(searchByEmail);
    setSearchByEmail("");
  };

  return (
    <>
      <h1>Users</h1>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search by Email"
          value={searchByEmail}
          onChange={(e) => setSearchByEmail(e.target.value)}
          className="me-4"
        />
        <Button onClick={handleSearch} variant="dark">
          Search
        </Button>
      </InputGroup>
    </>
  );
};

export default Search;
