import React, { Component } from "react";

// class Controls extends Component {
//   render() {
//     return (
//       <div className="Counter__controls">
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by 1
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by 1
//         </button>
//       </div>
//     );
//   }
// }

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Increment by 1
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement by 1
    </button>
  </div>
);
export default Controls;
