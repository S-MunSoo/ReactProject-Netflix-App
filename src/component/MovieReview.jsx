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
        <div>
          <p>{review.results && review.results[0].content}</p>
        </div>
      </Container>
    </div>
  );
};

export default MovieReview;
