import React from "react";
import { ContentDisplayPropsType } from "./types";
import "./styles.css";
import CircleLoader from "../CircleLoader";

const ContentDisplay: React.FC<ContentDisplayPropsType> = ({
  onClickAuthor,
  authorQuote,
  authorName,
  quoteGenre,
  isLoading,
}): JSX.Element => (
  <div className="content-display-container">
    <div className="quote-container">
      {isLoading ? (
        <CircleLoader />
      ) : (
        <>
          <div className="flex-container">
            <span className="border-quote"></span>
            <p className="quote-text">{authorQuote}</p>
          </div>
          <div className="author-container" onClick={onClickAuthor}>
            <div>
              <h2 className="author-name-text">{authorName}</h2>
              <p className="author-job-text">{quoteGenre}</p>
            </div>
            <span className="material-icons white600">arrow_right_alt</span>
          </div>
        </>
      )}
    </div>
  </div>
);

export default ContentDisplay;
