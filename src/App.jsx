import "./App.css";
import HiraCanvas from "./components/HiraCanvas";
import Character from "./components/Character";
function App() {
  const hiraList = [
    "a",
    "i",
    "u",
    "e",
    "o",
    "ka",
    "ki",
    "ku",
    "ke",
    "ko",
    "sa",
    "shi",
    "su",
    "se",
    "so",
    "ta",
    "chi",
    "tsu",
    "te",
    "to",
    "na",
    "ni",
    "nu",
    "ne",
    "no",
    "ha",
    "hi",
    "fu",
    "he",
    "ho",
    "ma",
    "mi",
    "mu",
    "me",
    "mo",
    "ya",
    "yu",
    "yo",
    "ra",
    "ri",
    "ru",
    "re",
    "ro",
    "wa",
    "wo",
    "n",
  ];

  const leftCharacters = [
    {
      name: "kapibara",
      img: "/kapibara.png",
      phrase: "こんにちは",
      bubbleType: 1,
    },
    {
      name: "pikachuuu",
      img: "/pikachuuu.png",
      phrase: "かわいい〜",
      bubbleType: 2,
    },
    {
      name: "tontik",
      img: "/tontik.png",
      phrase: "おはよう！",
      bubbleType: 1,
    },
  ];

  const rightCharacters = [
    {
      name: "totoro",
      img: "/totoro.png",
      phrase: "すごい！",
      bubbleType: 2,
    },
    {
      name: "keltos",
      img: "/keltos.png",
      phrase: "ありがとう",
      bubbleType: 1,
    },
    {
      name: "winniethepooh",
      img: "/winniethepooh.png",
      phrase: "にゃん〜",
      bubbleType: 2,
    },
  ];

  return (
    <div className="hira-wrapper">
      <span className="title-hiragana">Hiragana</span>
      <div className="character-column left">
        {leftCharacters.map((char, i) => (
          <Character
            key={char.name}
            name={char.name}
            img={char.img}
            phrase={char.phrase}
            bubbleType={char.bubbleType}
            index={i}
            side="left"
          />
        ))}
      </div>

      <div className="character-column right">
        {rightCharacters.map((char, i) => (
          <Character
            key={char.name}
            name={char.name}
            img={char.img}
            phrase={char.phrase}
            bubbleType={char.bubbleType}
            index={i}
            side="right"
          />
        ))}
      </div>

      <div className="hira-grid">
        {hiraList.map((hira) => (
          <HiraCanvas key={hira} src={`/hiragana/${hira}.png`} label={hira} />
        ))}
      </div>
    </div>
  );
}

export default App;
