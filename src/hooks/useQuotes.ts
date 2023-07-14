import { useEffect, useState } from "react";
import { QuotesApiType } from "../types/quotes-api";
import axios from "axios";

const URL = "https://quote-garden.onrender.com/api/v3/quotes";

const randomIndex = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const useQuotes = () => {
  const [randomQuote, setRandomQuote] = useState<QuotesApiType>({});
  const [quotesAuthor, setQuotesAuthor] = useState<QuotesApiType[]>([]);
  const [quotes, setQuotes] = useState<QuotesApiType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGenerateQuote = () => {
    setIsLoading(true);
    const index = randomIndex(quotes.length - 1, 0);
    setRandomQuote(quotes[index]);
    setIsLoading(false);
  };

  const handleGenerateAuthorQuote = async (author: string) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${URL}?author=${author}`);
      const { data }: { data: QuotesApiType[] } = res.data;
      if (data) {
        setIsLoading(false);
        setQuotesAuthor(data);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const getQuotes = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${URL}`);
      const { data }: { data: QuotesApiType[] } = res.data;

      if (data) {
        const index = randomIndex(quotes.length - 1, 0);
        setIsLoading(false);
        setQuotes(data);
        setRandomQuote(data[index]);
      }
      return null;
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    void getQuotes();

    return () => {
      void getQuotes();
    };
  }, []);

  return {
    quotes,
    isLoading,
    randomQuote,
    quotesAuthor,
    handleGenerateQuote,
    handleGenerateAuthorQuote,
  };
};

export default useQuotes;
