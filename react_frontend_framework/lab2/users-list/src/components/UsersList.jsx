import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserCard from "./UserCard.jsx";

const UsersList = ({ usersData }) => {
  return (
    <Row className="justify-content-center">
      {usersData.map((user) => (
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={user.id}
          className="d-flex justify-content-center"
          style={{ width: "300px" }}
        >
          <UserCard userData={user} />
        </Col>
      ))}
    </Row>
  );
};

export default UsersList;
