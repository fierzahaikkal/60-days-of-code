import Card from "react-bootstrap/Card";

const contentCard = () => {
  return (
    <Card
      style={{ width: "18rem" }}
      className=" my-3 mx-5 float-start border"
      bg={"light"}
    >
      <Card.Body>
        <Card.Title className="mb-3">Card Title</Card.Title>
        <Card.Text className="mb-5 d-flex justify-content-center align-items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus
          arcu quis magna lobortis bibendum. Donec fermentum vehicula magna eu
          sollen
        </Card.Text>
        <Card.Link href="#" className="float-end text-decoration-none">
          Delete
        </Card.Link>
        <Card.Link href="#" className="float-end me-3 text-decoration-none">
          View
        </Card.Link>
        <Card.Link href="#" className="float-end me-3 text-decoration-none">
          Edit
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default contentCard;
