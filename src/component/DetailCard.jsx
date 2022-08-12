import React from "react";
import { Container, Row, Col, Badge, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import YouTube from "react-youtube";

const DetailCard = ({ detail, youtube }) => {
  console.log("디테일?", detail);
  const [show, setShow] = useState(false);
  const opts = {
    height: "720px",
    width: "1280px",

    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  return (
    <Container>
      <Row>
        <Col className="detail-card">
          <img
            className="detail-img"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${
              detail.popularDetail.poster_path &&
              detail.topRatedDetail.poster_path &&
              detail.upcomingDetail.poster_path
            }`}
            alt="detailImg"
          />
        </Col>
        <Col className="detail-title">
          {/* <div>장르 추가!!</div> */}
          <h1>
            {detail.popularDetail.title &&
              detail.topRatedDetail.title &&
              detail.upcomingDetail.title}
          </h1>
          <h4>
            {detail.popularDetail.tagline &&
              detail.topRatedDetail.tagline &&
              detail.upcomingDetail.tagline}
          </h4>
          <div className="detail-info">
            <span>
              ⭐
              {detail.popularDetail.vote_average &&
                detail.topRatedDetail.vote_average &&
                detail.upcomingDetail.vote_average}
            </span>
            <span>
              👥
              {detail.popularDetail.popularity &&
                detail.topRatedDetail.popularity &&
                detail.upcomingDetail.popularity}
            </span>
            <span>
              <Badge pill bg="danger">
                {detail.adult ? "청불" : "전체관람"}
              </Badge>
            </span>
            {/* overview */}
          </div>
          <div className="detail-overview">
            <p>
              {detail.popularDetail.overview &&
                detail.topRatedDetail.overview &&
                detail.upcomingDetail.overview}
            </p>
          </div>
          {/* budget , revenue , release_date , runtime */}
          <div className="detail-budgets">
            <div>
              <Badge pill bg="danger" className="detail-budget">
                Budget
              </Badge>
              <span>
                $
                {detail.popularDetail.budget &&
                  detail.topRatedDetail.budget &&
                  detail.upcomingDetail.budget}
              </span>
            </div>
            <div>
              <Badge pill bg="danger" className="detail-revenue">
                Revenue
              </Badge>
              <span>
                $
                {detail.popularDetail.revenue &&
                  detail.topRatedDetail.revenue &&
                  detail.upcomingDetail.revenue}
              </span>
            </div>
            <div>
              <Badge pill bg="danger" className="detail-release">
                Release Day
              </Badge>
              <span>
                {detail.popularDetail.release_date &&
                  detail.topRatedDetail.release_date &&
                  detail.upcomingDetail.release_date}
              </span>
            </div>
            <div>
              <Badge pill bg="danger" className="detail-runtime">
                Run Time
              </Badge>
              <span>
                {detail.popularDetail.runtime &&
                  detail.topRatedDetail.runtime &&
                  detail.upcomingDetail.runtime}
              </span>
            </div>
          </div>
          <div className="youtube-btn">
            <Button onClick={() => setShow(true)}>🍿 Trailer View</Button>
          </div>

          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <div className="modalPop">
              {
                <YouTube
                  videoId={youtube.results && youtube.results[0].key}
                  opts={opts}
                />
              }
            </div>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailCard;
