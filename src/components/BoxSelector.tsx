import React from "react";
import '../BoxSelector.css';

interface BoxSelectorProps {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
}

const BoxSelector: React.FC<BoxSelectorProps> = ({ options, selectedOption, onSelect }) => {
    const [currentSelected, setCurrentSelected] = React.useState(selectedOption);

    React.useEffect(() => {
        setCurrentSelected(selectedOption);
    }, [selectedOption]);

    const handleSelect = (option: string) => {
        setCurrentSelected(option);
        onSelect(option);
    };

    return (
        <div className="box-selector">
            {options.map((option) => (
                <div
                    key={option}
                    className={`box-selector-option ${option === currentSelected ? "selected" : ""}`}
                    onClick={() => handleSelect(option)}
                >
                    {option}
                </div>
            ))}
        </div>
    );
};

export default BoxSelector;
