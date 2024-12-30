import React, { useState } from "react";
import {ToggleContainer} from './toggle-switch.styles';

interface ToggleSwitchProps {
  labels: string[];
  initialActive: number;
  onToggle: (activeIndex: number) => void;
}


const ToggleSwitch: React.FC<ToggleSwitchProps> = ({labels= ['Option 1', 'Option 2'], initialActive = 0, onToggle}) => {

  const [active, setActive] = useState(initialActive);

  const handleToggle = (index: any) => {
    console.log("Before setActive:", active);
    setActive(index);
    console.log("After setActive:", active);
    if (onToggle) {
      onToggle(index);
    }
  };

  return (
    <ToggleContainer  className="inline-flex">
        {labels.map((label, index) => (
        <button
          key={label}
          className={`px-4 py-2 transition-colors duration-300 ${active === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => handleToggle(index)}
        >
          {label}
        </button>
      ))}
    </ToggleContainer>
  );
}

export default ToggleSwitch;

