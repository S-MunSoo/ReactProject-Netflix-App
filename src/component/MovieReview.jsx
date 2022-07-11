import React from "react";
import { Container, Button, Modal, Badge } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
              <div className="review-content" key={item.id}>
                <h4>
                  <div></div>
                  <FontAwesomeIcon icon={faUser} />
                  {item.author}
                </h4>
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
          <div className="related-modal">
            <Modal.Header
              closeButton
              style={{
                backgroundColor: "#212529",
                border: "none",
                width: 1100,
              }}
            ></Modal.Header>
            <div className="related-area">
              {related.results &&
                related.results.map((item2) => (
                  <div key={item2.id} className="related-content">
                    <img
                      src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item2.poster_path}`}
                      alt=""
                    />
                    <h4>{item2.title}</h4>
                    <div className="related-info">
                      <Badge pill bg="danger">
                        <span>{item2.adult ? "청불" : "전체관람"}</span>
                      </Badge>
                      <Badge bg="dark">
                        <span>{item2.release_date}</span>
                      </Badge>
                      <span> ⭐ {item2.vote_average}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default MovieReview;
