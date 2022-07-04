import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import WatchTrailer from "./WatchTrailer";

const DetailCard = ({ detail }) => {
  console.log("detail", detail);

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
          {/* <div>장르 가져오기?</div> */}
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
          <div>
            <WatchTrailer />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailCard;
