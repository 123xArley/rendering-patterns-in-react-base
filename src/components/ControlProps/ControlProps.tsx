import React from "react";

type TooggleProps = {
  isToggled?: boolean;
  onToggle?: (value: boolean) => void;
};

export const Toggle: React.FC<TooggleProps> = ({ isToggled = false, onToggle }) => {
  const [internalToggle, setInternalToggle] = React.useState(isToggled);

  const toggle = () => {
    const newToggle = !internalToggle;
    setInternalToggle(newToggle);
    
    if (onToggle) {
      onToggle(newToggle);
    }
  };

  return (
    <button onClick={toggle}>
      {internalToggle ? "On 😎" : "Off 😖"}
    </button>
  );
};

export const ParentComponent = () => {
  const [toggleState, setToggleState] = React.useState(false);

  return (
    <div>
      <p>The toggle is {toggleState ? "On 😎" : "Off 😖"}</p>
      <Toggle isToggled={toggleState} onToggle={setToggleState} />
    </div>
  );
};
