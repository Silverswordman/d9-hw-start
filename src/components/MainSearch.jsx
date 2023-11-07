import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetJobAction } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const jobsFromRedux = useSelector((state) => state.jobs) || [];
  console.log(jobsFromRedux);
  // const [jobs, setJobs] = useState([]);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(GetJobAction(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
          <Link to="/favorites">Favs</Link>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsFromRedux.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
