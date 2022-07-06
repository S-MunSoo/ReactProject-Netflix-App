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
          <div>
            {review.results &&
              review.results.map((item) => (
                <div key={item}>
                  <h4>{item.author}</h4>
                  <p>{item.content}</p>
                  <span>{item.created_at}</span>
                </div>
                // 노란줄 빨간줄 뜨면 플레그먼트!!!1
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MovieReview;
