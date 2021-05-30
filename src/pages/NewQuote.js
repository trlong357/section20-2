import QuoteForm from "../components/quotes/QuoteForm";
// import QuoteList from "../components/quotes/QuoteList";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
