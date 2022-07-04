import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailAction } from "../redux/actions/detailAction";
import { useDispatch } from "react-redux";

const WatchTrailer = () => {
  let { id } = useParams();
  const videoId = useSelector((state) => state.detailMovie);
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    dispatch(detailAction.getMovieDetail(id));
  }, []);

  return (
    <div>
      <Button onClick={() => setLgShow(true)}>클릭!</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>{<YouTube videoId={videoId.key} opts={opts} />}</Modal.Body>
      </Modal>
    </div>
  );
};

export default WatchTrailer;
