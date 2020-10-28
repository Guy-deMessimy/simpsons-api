import React from 'react';
import './DisplaySimpsons.css';

function DisplaySimpsons({ quote }){
    return (
        <figure className="displaySimpsons">
          <img src={quote.image} alt={quote.character} />
        <figcaption>
          <blockquote>quote: {quote.quote}</blockquote>
          <p>
            <cite>character :{quote.character}</cite>
          </p>
        </figcaption>
      </figure>
    );
};

export default DisplaySimpsons
