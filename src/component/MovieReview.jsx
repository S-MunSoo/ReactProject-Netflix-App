import React from "react";
import { Button, Container } from "react-bootstrap";

const MovieReview = ({ review }) => {
  console.log("review??", review);
  return (
    <div>
      <Container>
        <div className="review-btn">
          <Button variant="danger">REVIEWS</Button>
        </div>
        <div className="review-area">
          <div className="review-content">
            <p>
              {review.results &&
                review.results.map((item) => <p>{item.content}</p>)}
            </p>
          </div>

          <div className="review-author">
            <h4>
              {review.results &&
                review.results.map((item) => <h4>{item.author}</h4>)}
            </h4>
          </div>
          {/* <span>수정 날짜</span> */}
        </div>
      </Container>
    </div>
  );
};

export default MovieReview;
