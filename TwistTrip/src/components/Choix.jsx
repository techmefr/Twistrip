import { useState } from "react";
import meditate from "../assets/images/meditate.jpg";
import temple from "../assets/images/temple.jpg";
import travel from "../assets/images/travel.jpg"
import humanitaire from "../assets/images/humanitaire.jpg"

import "./choix-style.css";

export default function Choix() {
	const [selectedOption, setSelectedOption] = useState("");

	const handleOptionClick = (value) => {
		setSelectedOption(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Vous avez choisi: ${selectedOption}`);
		// Logic
	};

	return (
		<div className="choix-container">
			<h1 className="choix-h1">Choisissez votre type de vacances</h1>
			<div className="choix-options">
				<div
					className={`option ${selectedOption === "culturelle" ? "selected" : ""} ${selectedOption && selectedOption !== "culturelle" ? "not-selected" : ""}`}
					onClick={() => handleOptionClick("culturelle")}
				>
					<img src={temple} alt="Culturelle" />
					<p className="overlay">Culturelle</p>	
				</div>
				<div
					className={`option ${selectedOption === "humanitaire" ? "selected" : ""} ${selectedOption && selectedOption !== "humanitaire" ? "not-selected" : ""}`}
					onClick={() => handleOptionClick("humanitaire")}
				>
					<img src={humanitaire} alt="Humanitaire" />
					<p className="overlay">Humanitaire</p>
				</div>
				<div
					className={`option ${selectedOption === "sportif" ? "selected" : ""} ${selectedOption && selectedOption !== "sportif" ? "not-selected" : ""}`}
					onClick={() => handleOptionClick("sportif")}
				>
					<img src={travel} alt="Sportif" />
					<p className="overlay">sportif</p>
				</div>
				<div
					className={`option ${selectedOption === "se-ressourcer" ? "selected" : ""} ${selectedOption && selectedOption !== "se-ressourcer" ? "not-selected" : ""}`}
					onClick={() => handleOptionClick("se-ressourcer")}
				>
					<img src={meditate} alt="Se Ressourcer" />
					<p className="overlay">Se-ressourcer</p>
				</div>
			</div>
			<form onSubmit={handleSubmit} className="vacation-form">
				<input
					type="hidden"
					name="vacationType"
					value={selectedOption}
				/>
				<button className="choix-button" type="submit">Valider</button>
			</form>
		</div>
	);
}