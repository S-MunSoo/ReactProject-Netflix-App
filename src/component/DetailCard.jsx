import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const DetailCard = ({ detail }) => {
  console.log("detail", detail);
  return (
    <Container>
      <Row>
        <Col>
          <img
            className="detail-poster"
            src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${
              detail.popularDetail.poster_path &&
              detail.topRatedDetail.poster_path &&
              detail.upcomingDetail.poster_path
            }`}
            alt="detailimg"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailCard;
