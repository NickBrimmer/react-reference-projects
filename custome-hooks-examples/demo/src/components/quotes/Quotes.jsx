import Quote from './Quote';
import { withList } from '../common/withList';

export default withList(Quote, 'quotes', 'text', 'Quotes');

// const Quotes = ({ quotes }) => {
//   // { character, text, image }
//   // character={quote.character} text={quote.text} image={quote.image}
//   const quoteElements = quotes.map(quote => (
//     <li key={quote.text}>
//       <Quote {...quote} />
//     </li>
//   ));

//   return (
//     <section>
//       <h2>Quotes</h2>
//       <ul>
//         {quoteElements}
//       </ul>
//     </section>
//   );
// };

// Quotes.propTypes = {
//   quotes: PropTypes.arrayOf(PropTypes.shape({
//     character: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired
//   })).isRequired
// };

// export default Quotes;
