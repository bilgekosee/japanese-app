import { useRef, useEffect } from "react";

const HiraCanvas = ({ src }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = src;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  }, [src]);

  return (
    <div className="hira-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default HiraCanvas;
