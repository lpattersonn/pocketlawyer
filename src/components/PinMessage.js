import { pipe, prop, propOr, length, ifElse } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/image.png';
import "../Styles/pin-message.css";

function PinMessage({ pinMessage, onPinMessage }) {
  // const image = propOr(defaultImage, 'imageUrl', pinMessage);
  // const title = pipe(
  //   prop('title'),
  //   ifElse(
  //     item => length(item) > 34,
  //     item => `${item.slice(0, 34)}...`,
  //     item => item,
  //   )
  // )(pinMessage);
  // const text = pipe(
  //   prop('text'),
  //   ifElse(
  //     item => length(item) > 50,
  //     item => `${item.slice(0, 50)}...`,
  //     item => item,
  //   )
  // )(pinMessage);

  return (
    <div className='sc-pin--message'>
      <img
        className='sc-pin--message--img'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVd73xrvpSjrOTxdxgoBC6wahXx1K9HBd2vA&usqp=CAU"
        alt=""
      />
      <div className='sc-pin--message--desc'>
        <div className='sc-pin--message--title'><p>Delon The Second</p></div>
        <div><p>Lawyer</p></div>
      </div>
    </div>
  );
}

// PinMessage.propTypes = {
//   pinMessage: PropTypes.object,
//   onPinMessage: PropTypes.func,
// };

export default PinMessage;
