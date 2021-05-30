import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
// import QuoteList from "../components/quotes/QuoteList";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
