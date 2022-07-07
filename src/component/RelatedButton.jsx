import React from "react";
import { Button, Container } from "react-bootstrap";

const RelatedButton = ({ related, review }) => {
  return (
    <div>
      <Container className="related-btn">
        <Button variant="danger"> REVIEWS ({review.total_results})</Button>

        <Button variant="light">
          RELATED MOVIES ({related.total_results})
        </Button>
      </Container>
    </div>
  );
};

export default RelatedButton;
