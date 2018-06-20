import React from "react";
import ReactDOM from "react-dom";
import "./main.sass";

const Index = () => {
  return (
    <div>
      <blockquote>
        ipse Epicurus obit decurso lumine vitae,<br />
        qui genus humanum ingenio superavit et omnis<br />
        restinxit stellas exortus ut aetherius sol.
      </blockquote>
      <blockquote>
        Lucretius, <em>De Rerum Natura</em>
      </blockquote>
      <blockquote>
        Epicurus himself, the light of life expiring, died,<br />
        Who had in mind the human kind excell'd,<br />
        As the risen sun all heaven's stars extinguish'd.
      </blockquote>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
