import React from "react";

interface NavigationItemProps {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
    iconClass?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
    title,
    isActive = false,
    onClick,
    iconClass
}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (onClick) {
            onClick();
        }
    };

    return (
        <li className={`bottom-bar__item ${isActive ? 'bottom-bar__item--active' : ''}`}>
            <a href="#" onClick={handleClick}>
                {iconClass && <i className={iconClass} aria-hidden="true"></i>}
                <span>{title}</span>
            </a>
        </li>
    );
};

export default NavigationItem;
export type { NavigationItemProps };