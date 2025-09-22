import React from "react";
import '../TextBox.css';

interface TextBoxProps {
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ value, onChange, placeholder }) => {
    return (
        <div className="text-box-wrapper">
            <i className="fa fa-search text-box-icon"></i>
            <input
                className="text-box"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextBox;