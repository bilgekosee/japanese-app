import { useState } from "react";

const Character = ({ name, img, phrase, bubbleType, index, side }) => {
  const [showBubble, setShowBubble] = useState(false);
  const bubbleImg = bubbleType === 1 ? "/baloncuk1.png" : "/baloncuk2.png";

  const playSoundChar = (name) => new Audio(`sounds/${name}.mp3`).play();

  const style = {
    position: "absolute",
    top: `${index * 25 + 10}%`,
    [side]: side === "right" ? "-120px" : "-123px",
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
        onClick={() => {
          setShowBubble(!showBubble);
          playSoundChar(name);
        }}
      />
    </div>
  );
};

export default Character;
