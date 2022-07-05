import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import YouTube from "react-youtube";
import ModalBody from "react-bootstrap/ModalBody";

const WatchTrailer = ({ Trailer }) => {
  const [smShow, setSmShow] = useState(false);
  console.log("Trailer??", Trailer);

  const opts = {
    height: "540px",
    width: "960pxx",
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  return (
    <div>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>
      <div className="youtube-modal">
        <Modal
          className="modal-title"
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <ModalBody className="modal-body">
            {
              <YouTube
                videoId={Trailer.results && Trailer.results[0].key}
                opts={opts}
              />
            }
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default WatchTrailer;
