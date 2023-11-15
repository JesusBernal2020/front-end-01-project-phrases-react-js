import { useEffect, useState } from "react";
import "./styles/CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    >
      {/* Puedes colocar aquí la imagen que deseas usar como cursor */}
      <img src="/images/space-rocket_115278.png" alt="Cursor personalizado" />
    </div>
  );
};

export default CustomCursor;
