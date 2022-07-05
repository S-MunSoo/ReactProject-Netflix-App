import React from "react";
import { Button, Container } from "react-bootstrap";

const MovieReview = ({ review }) => {
  console.log("review??", review);
  return (
    <div>
      <Container>
        <div className="review-btn">
          <Button variant="danger">REVIEWS ({review.total_results})</Button>
        </div>
        <div className="review-area">
          <div className="review-content">
            <h4> {review.results && review.results[0]?.author}</h4>
            <p> {review.results && review.results[0]?.content}</p>
            <span>{review.results && review.results[0]?.created_at}</span>
          </div>
          <div className="review-content">
            <h4> {review.results && review.results[1]?.author}</h4>
            <p> {review.results && review.results[1]?.content}</p>
            <span>{review.results && review.results[1]?.created_at}</span>
          </div>
          <div className="review-content">
            <h4> {review.results && review.results[2]?.author}</h4>
            <p> {review.results && review.results[2]?.content}</p>
            <span>{review.results && review.results[2]?.created_at}</span>
          </div>
          <div className="review-content">
            <h4> {review.results && review.results[3]?.author}</h4>
            <p> {review.results && review.results[3]?.content}</p>
            <span>{review.results && review.results[3]?.created_at}</span>
          </div>

          {/* <p>
              {review.results &&
                review.results.map((item) => <p>{item.content}</p>)}
            </p> */}
        </div>
      </Container>
    </div>
  );
};

export default MovieReview;
