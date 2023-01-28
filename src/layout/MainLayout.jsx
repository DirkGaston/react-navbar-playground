import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Default from "../views/Default";

function MainLayout() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:path" element={<Default />} />
      </Routes>
    </div>
  );
}

export default MainLayout;
