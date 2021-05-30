import QuoteList from "../components/quotes/QuoteList";

const DUM_data = [
  { id: "q1", author: "Long", text: "abcdef" },
  { id: "q2", author: "LongABC", text: "abcdefgasdfsd" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUM_data} />;
};

export default AllQuotes;
