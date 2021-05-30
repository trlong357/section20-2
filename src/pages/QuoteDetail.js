import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUM_data = [
  { id: "q1", author: "Long", text: "abcdef" },
  { id: "q2", author: "LongABC", text: "abcdefgasdfsd" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUM_data.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>no quote found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
