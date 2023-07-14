import React from "react";
import "./styles.css";
import { HeaderPropsType } from "./types";

const Header: React.FC<HeaderPropsType> = ({
  onGenerateQuote,
  isRandom = false,
  onBack,
}): JSX.Element => (
  <header className="header-container">
    {isRandom ? (
      <div className="flex-container" onClick={onGenerateQuote}>
        <p className="title-text">random</p>
        <span className="material-icons gray600">autorenew</span>
      </div>
    ) : (
      <div className="flex-container" onClick={onBack}>
        <span className="material-icons gray600">keyboard_backspace</span>
        <p className="title-text">Back</p>
      </div>
    )}
  </header>
);

export default Header;
