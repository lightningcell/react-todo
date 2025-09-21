import React from "react";

interface NavigationItemProps {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
    iconClass?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ 
    title, 
    iconClass, 
    onClick,
    isActive = false
}) => {
    return (
        <li className={`navigation-item ${isActive ? 'navigation-item--active' : ''}`}>
            <button 
                className="navigation-item__button"
                onClick={onClick}
            >
                <i className={iconClass}></i>
                <span className="navigation-item__title">{title}</span>
            </button>
        </li>
    );
};

export default NavigationItem;
export type { NavigationItemProps };