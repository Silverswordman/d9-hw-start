import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { REMOVE, RemoveToFavAction } from "../redux/actions";

const Favourites = () => {
  const favorites = useSelector((state) => state.fav.list);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favorites</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favorites.map((fav, i) => (
              <ListGroupItem key={i}>
                <Button
                  className="mr-2"
                  onClick={() => dispatch(RemoveToFavAction(i))}
                >
                  {" "}
                  REMOVE
                </Button>
                <Link to={"/" + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
