import React from "react";
import "./styles.css";
import CircleLoader from "../CircleLoader";
import { ListContentDisplayPropsType } from "./types";

const ListContentDisplay: React.FC<ListContentDisplayPropsType> = ({
  isLoading,
  quotes,
  authorName,
}): JSX.Element => (
  <div className="list-content-display-container">
    {isLoading ? (
      <CircleLoader />
    ) : (
      <>
        <h2 className="author-name-text">{authorName}</h2>
        <div className="list-quote-container">
          {quotes.map((item) => (
            <div className="quote-container" key={item._id}>
              <div className="flex-container">
                <span className="border-quote"></span>
                <p className="quote-text">{item.quoteText}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);

export default ListContentDisplay;
