import { useParams } from "react-router-dom";

function DefaultView() {
  let { path } = useParams();
  return <div>You are on the path: {path}</div>;
}

export default DefaultView;
