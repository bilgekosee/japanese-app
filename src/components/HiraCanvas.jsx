import { useRef, useEffect, useState } from "react";

const HiraCanvas = ({ src, label }) => {
  const canvasRef = useRef();
  const [showRomanji, setShowRomanji] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = src;

    img.onload = () => {
      const scale = 4;
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [src]);

  return (
    <div
      className="hira-container"
      onClick={() => setShowRomanji(!showRomanji)}
    >
      {showRomanji && (
        <img
          src={`/romaji/${label}.png`}
          alt={label}
          style={{ marginTop: "6px", width: "64px" }}
        />
      )}
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default HiraCanvas;
