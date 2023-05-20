import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShortLinkList from "./ShortLinkList";
import CreateShortLinkForm from "./CreateShortLinkForm";
import UpdateShortLinkForm from "./UpdateShortLinkForm";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortLinkList />} />
        <Route path="/link/:shortLinkId" element={<UpdateShortLinkForm />} />
        <Route path="/link" element={<CreateShortLinkForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
