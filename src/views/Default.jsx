import { useParams } from "react-router-dom";

import "../assets/css/Default.css";

function DefaultView() {
  let { path } = useParams();
  return (
    <div className="flex justify-center">
      <h1 className="default-path-title">
        You are on the path: <span className="pathSpan">{path}</span>
      </h1>
    </div>
  );
}

export default DefaultView;
