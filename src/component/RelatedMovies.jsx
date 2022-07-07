import React from "react";

const RelatedMovies = ({ related }) => {
  console.log("related?", related);
  return (
    <div>
      <div>
        <img
          width={200}
          height={200}
          src="https://img.huffingtonpost.com/asset/5d808be22300001c0555597c.jpeg?ops=scalefit_630_noupscale"
          alt="img"
        />
      </div>
    </div>
  );
};

export default RelatedMovies;
