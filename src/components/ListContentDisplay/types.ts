import { QuotesApiType } from "../../types/quotes-api";

export type ListContentDisplayPropsType = {
  isLoading: boolean;
  quotes: QuotesApiType[];
  authorName: string;
};
