import React from "react";
import { createRoot } from "react-dom/client";

const Popup = () => {
  return (
    <h6 style={{ textAlign: "center", fontSize: 20 }}>
      You have opened the extension popup!!!
    </h6>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Popup />);
