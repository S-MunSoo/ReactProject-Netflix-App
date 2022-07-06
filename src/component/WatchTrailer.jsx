import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import YouTube from "react-youtube";

const WatchTrailer = ({ Trailer }) => {
  const [smShow, setSmShow] = useState(false);
  console.log("Trailer??", Trailer);

  const opts = {
    height: "720px",
    width: "1280px",

    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  return (
    <div>
      <div className="youtube-btn">
        <Button onClick={() => setSmShow(true)} className="me-2">
          Trailer View
        </Button>
      </div>
      <div className="youtube-modal">
        <Modal
          className="modal-title"
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <div className="youtube-player">
            {
              <YouTube
                className="yotu"
                videoId={Trailer.results && Trailer.results[0].key}
                opts={opts}
              />
            }
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default WatchTrailer;
