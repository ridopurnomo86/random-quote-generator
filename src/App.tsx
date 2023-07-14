import { useState } from "react";
import ContentDisplay from "./components/ContentDisplay";
import Header from "./components/Header";
import useQuotes from "./hooks/useQuotes";
import ListContentDisplay from "./components/ListContentDisplay";

function App() {
  const [filter, setFilter] = useState<"quotes" | "author_quotes">("quotes");

  const {
    isLoading,
    randomQuote,
    handleGenerateQuote,
    handleGenerateAuthorQuote,
    quotesAuthor,
  } = useQuotes();

  const handleAuthor = async () => {
    setFilter("author_quotes");
    await handleGenerateAuthorQuote(randomQuote.quoteAuthor);
  };

  const handleBack = () => {
    setFilter("quotes");
  };

  return (
    <div className="container">
      <Header
        onGenerateQuote={handleGenerateQuote}
        isRandom={Boolean(filter === "quotes")}
        onBack={handleBack}
      />
      {filter === "quotes" ? (
        <ContentDisplay
          isLoading={isLoading}
          authorName={randomQuote?.quoteAuthor}
          quoteGenre={randomQuote?.quoteGenre}
          onClickAuthor={handleAuthor}
          authorQuote={`${randomQuote?.quoteText}`}
        />
      ) : (
        <ListContentDisplay
          isLoading={isLoading}
          authorName={randomQuote?.quoteAuthor}
          quotes={quotesAuthor}
        />
      )}
    </div>
  );
}

export default App;
