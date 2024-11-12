import React from "react";

const LoadingDots = ({ size = 15, color = "#4fa94d", text = "Loading", textColor = "green", textStyle = {} }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <div
          className="dot"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: "50%",
            animation: "bounce 0.6s infinite alternate",
          }}
        ></div>
        <div
          className="dot"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: "50%",
            animation: "bounce 0.6s infinite alternate 0.2s",
          }}
        ></div>
        <div
          className="dot"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: "50%",
            animation: "bounce 0.6s infinite alternate 0.4s",
          }}
        ></div>
      </div>
      <span
        style={{
          fontSize: "30px",
          color: textColor,
          fontWeight: "bolder",
          letterSpacing: "2px",
          ...textStyle,
        }}
      >
        {text}
      </span>
      <style>{`
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default LoadingDots;
