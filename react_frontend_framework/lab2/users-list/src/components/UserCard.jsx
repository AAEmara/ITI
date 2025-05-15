import CardText from "react-bootstrap/CardText";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

const UserCard = ({ userData }) => {
  console.log(userData);
  const user = userData;
  const badgeStyle = () => {
    if (user.role === "admin") {
      return "danger";
    } else if (user.role === "user") {
      return "success";
    } else if (user.role === "moderator") {
      return "warning";
    }
  };

  return (
    <Card
      className="my-4 rounded-5 border border-3 border-info-subtle"
      style={{ width: "400px" }}
    >
      <div className="d-flex justify-content-center pt-4">
        <Card.Img
          variant="top"
          src={user.image}
          className="rounded-circle border border-2 border-info-subtle"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <Badge bg={badgeStyle()}>{user.role}</Badge>
          <CardText className="mb-1">{user.username}</CardText>
          <CardText className="mb-1">{user.email}</CardText>
          <CardText className="mb-1">{user.phone}</CardText>
          <CardText className="mb-1">{user.birthDate}</CardText>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
