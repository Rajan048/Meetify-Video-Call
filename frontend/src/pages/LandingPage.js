// import React from "react";
// import "../App.css";
// import { Link, useNavigate } from "react-router-dom";

// export default function LandingPage() {
//   const router = useNavigate();

//   return (
//     <div className="landingPageContainer">
//       <nav>
//         <div className="navHeader">
//           {/* <h2>Apna Video Call</h2> */}
//           <Link to="/">
//             <img
//               style={{ height: "50px" }}
//               src="../meetify.png"
//               alt="Meetify Logo"
//             />
//           </Link>
//         </div>
//         <div className="navlist">
//           <p
//             onClick={() => {
//               router("/random");
//             }}
//           >
//             Join as Guest
//           </p>
//           <p onClick={() => router("/auth")}>Register</p>
//           <div
//             onClick={() => {
//               router("/auth");
//             }}
//             role="button"
//           >
//             <p>Login</p>
//           </div>
//         </div>
//       </nav>

//       <div className="landingMainContainer">
//         <div>
//           <h1>
//             <span style={{ color: "#FF9839" }}>Connect</span> with your Loved
//             Ones
//           </h1>

//           <p>Cover a distance by apna video call</p>

//           <div role="button">
//             <Link to={"/auth"}>Get Started</Link>
//           </div>
//         </div>
//         <div>
//           <img src="/mobile.png"></img>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div
      className="landingPageContainer"
      style={{
        
        width: "100%",
        minHeight: "100vh",
        background: 'url("/background.png") no-repeat center 70% / cover',
        color: "white",
      }}
    >
      <nav
        style={{
          background: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="navHeader">
          <Link to="/">
            <img
              style={{ height: "50px" }}
              src="../meetify.png"
              alt="Meetify Logo"
            />
          </Link>
        </div>

        <div
          className="navlist"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.6rem",
            cursor: "pointer",
          }}
        >
          <p
            onClick={() => router("/random")}
            style={{ transition: ".3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#FF9839")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Join as Guest
          </p>

          <p
            onClick={() => router("/auth")}
            style={{ transition: ".3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#FF9839")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Register
          </p>

          <div
            onClick={() => router("/auth")}
            role="button"
            style={{
              background: "#D97500",
              padding: "8px 20px",
              borderRadius: "10px",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600 }}>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your Loved
            Ones
          </h1>

          <p style={{ fontSize: "40px", opacity: "0.9" }}>
            Cover a distance by Meetify
          </p>

          <div
            role="button"
            style={{
              background: "#D97500",
              padding: "1rem 1.6rem",
              width: "fit-content",
              borderRadius: "20px",
              marginTop: "1.9rem",
            }}
          >
            <Link
              to={"/auth"}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>

        <div>
          <img
            src="/mobile.png"
            alt="Mobile App"
            style={{
              height: "70vh",
              animation: "floaty 3s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Floating animation */}
      <style>
        {`
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}
      </style>
    </div>
  );
}
