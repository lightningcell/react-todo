import React from "react";
import '../style/BoxSelector.css';

interface BoxOptionProps {
    option: string;
    iconClass?: string;
    onClick: () => void;
}

interface BoxSelectorProps {
    options: BoxOptionProps[];
    selectedOption: string;
    onSelect: (option: string) => void;
    style: "compact" | "pill";
}

const BoxSelector: React.FC<BoxSelectorProps> = ({ options, selectedOption, onSelect, style }) => {
    const [currentSelected, setCurrentSelected] = React.useState(selectedOption);

    React.useEffect(() => {
        setCurrentSelected(selectedOption);
    }, [selectedOption]);

    const handleSelect = (option: string) => {
        setCurrentSelected(option);
        onSelect(option);
    };

    return (
        <div className={`box-selector box-selector--${style}`}>
            {options.map((option) => (
                <div
                    key={option.option}
                    className={`box-selector-option ${option.option === currentSelected ? "selected" : ""}`}
                    onClick={() => handleSelect(option.option)}
                >
                    {option.iconClass && <i className={option.iconClass}></i>}
                    {option.option}
                </div>
            ))}
        </div>
    );
};

export default BoxSelector;
