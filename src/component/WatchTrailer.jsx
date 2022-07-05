import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import YouTube from "react-youtube";

const WatchTrailer = ({ Trailer }) => {
  const [lgShow, setLgShow] = useState(false);
  console.log("Trailer??", Trailer);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <Button onClick={() => setLgShow(true)}>클릭!</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          {
            <YouTube
              videoId={Trailer.results && Trailer.results[0].key}
              opts={opts}
            />
          }
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WatchTrailer;
