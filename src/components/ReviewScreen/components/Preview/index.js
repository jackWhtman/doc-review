import { useEffect, useRef, useState } from "react";
import "./index.css";

function Preview({ imagePath, highlights }) {
  const [zoomLevel, setZoomLevel] = useState("50");
  const [hoveredHighlight, setHoveredHighlight] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const canvasWidth = image.width;
      const canvasHeight = image.height;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.width = zoomLevel + "%";

      ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);

      highlights.forEach((highlight) => {
        const [x1, y1, x2, y2] = highlight.position;
        ctx.fillStyle = highlight.color + 60;
        ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
      });
    };
    image.src = imagePath;
  }, [imagePath, zoomLevel, highlights]);

  const handleZoomChange = (event) => {
    setZoomLevel(event.target.value);
  };

  return (
    <div className="preview">
      <div>
        <select value={zoomLevel} onChange={handleZoomChange}>
          <option value="50">Fit</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>
      </div>
      <div className="canvas-container">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

export default Preview;
