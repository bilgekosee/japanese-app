import { useState, useEffect } from "react";

const Character = ({ name, img, phrase, bubbleType, index, side }) => {
  const [showBubble, setShowBubble] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 430);
  const bubbleImg = bubbleType === 1 ? "/baloncuk1.png" : "/baloncuk2.png";

  const handleClick = () => {
    setShowBubble(true);
    playSoundChar(name);

    setTimeout(() => {
      setShowBubble(false);
    }, 2000);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const playSoundChar = (name) => new Audio(`sounds/${name}.mp3`).play();

  const style = {
    position: "absolute",
    top: `${index * 25 + 10}%`,
    [side]: isSmallScreen ? "10px" : side === "right" ? "-120px" : "-123px",
  };

  return (
    <div className="character-wrapper floating" style={style}>
      {showBubble && (
        <div className="speech-wrapper">
          <img src={bubbleImg} className="speech-bubble" alt="bubble" />
          <div className="speech-text">{phrase}</div>
        </div>
      )}
      <img
        src={img}
        alt={name}
        className="character-img"
        onClick={handleClick}
      />
    </div>
  );
};

export default Character;
