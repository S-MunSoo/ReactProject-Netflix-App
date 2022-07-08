import React from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const MovieReview = ({ review, related }) => {
  const [lgShow, setLgShow] = useState(false);
  console.log("related???", related);

  return (
    <div>
      <Container>
        <div className="reviewRelated-btn">
          <Button variant="danger" className="review-btn">
            REVIEWS ({review.total_results})
          </Button>
          <Button
            variant="light"
            className="related-btn"
            onClick={() => setLgShow(true)}
          >
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

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div>
              {related.results &&
                related.results.map((item2) => (
                  <div className="related-content" key={item2}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item2.poster_path}`}
                      alt=""
                    />
                    <h4>{item2.title}</h4>
                    <div className="related-info">
                      <span>{item2.adult ? "청불" : "전체관람"}</span>
                      <span>{item2.vote_average}</span>
                      <span>{item2.vote_count}</span>
                    </div>
                  </div>
                ))}
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default MovieReview;
