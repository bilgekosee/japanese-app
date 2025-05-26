import "./App.css";
import HiraCanvas from "./components/HiraCanvas";
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

  return (
    <div className="hira-wrapper">
      <div className="hira-grid">
        {hiraList.map((hira) => (
          <HiraCanvas key={hira} src={`/hiragana/${hira}.png`} label={hira} />
        ))}
      </div>
    </div>
  );
}

export default App;
