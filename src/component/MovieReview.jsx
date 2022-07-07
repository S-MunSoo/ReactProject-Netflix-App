import React from "react";
import { Container, Button } from "react-bootstrap";

const MovieReview = ({ review, related }) => {
  // console.log("review??", review);

  return (
    <div>
      <Container>
        <div className="reviewRelated-btn">
          <Button variant="danger" className="review-btn">
            REVIEWS ({review.total_results})
          </Button>
          <Button variant="light" className="related-btn">
            RELATED MOVIES ({related.total_results})
          </Button>
        </div>

        <div className="review-area">
          {review.results &&
            review.results.map((item) => (
              <div className="review-content" key={item}>
                <h4>{item.author}</h4>
                <p>{item.content}</p>
                <span>{item.created_at}</span>
              </div>
              // 노란줄 빨간줄 뜨면 플레그먼트!!!1
            ))}
        </div>
      </Container>
    </div>
  );
};

export default MovieReview;
