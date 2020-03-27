import React from "react";
import { FaCode } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <div className="app" style={{ height: "80%" }}>
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Start Messaging</span>
      </div>
    </>
  );
}

export default LandingPage;
