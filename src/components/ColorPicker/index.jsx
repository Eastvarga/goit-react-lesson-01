import React, { Component } from "react";
import "./styles.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };
  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push("ColorPicker__option--active");
    }
    return optionClasses.join(" ");
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Set {label} color</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const OptionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                className={OptionClassName}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => {
                  this.setActiveIdx(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
