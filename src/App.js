import "./App.css";
import DiceCard from "./Components/DiceCard";

function App() {
	let result = [];
	for (let i = 0; i < 100; i++) {
		result.push(<DiceCard />);
	}
	return <div className="App">{result}</div>;
}

export default App;
