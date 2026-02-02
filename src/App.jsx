import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="builder/:resumeId" element={<ResumeBuilder />} />
        </Route>
        <Route path="view/:resumeId" element={<Preview />} />
      </Routes>
    </>
  );
};

export default App;
