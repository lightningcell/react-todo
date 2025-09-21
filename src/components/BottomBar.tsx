import React from "react";
import NavigationItem from "./NavigationItem";
import type { NavigationItemProps } from "./NavigationItem";
import '../BottomBar.css';

interface BottomBarProps {
    navigationItems: NavigationItemProps[];
}

const BottomBar: React.FC<BottomBarProps> = ({ navigationItems }) => {
    const [activeItem, setActiveItem] = React.useState<string | null>(navigationItems[0]?.title || null);

    const handleItemClick = (item: NavigationItemProps) => {
        setActiveItem(item.title);
        if (item.onClick) {
            item.onClick();
        }
    };

    return (
        <nav className="bottom-bar">
            <ul className="bottom-bar__list">
                {navigationItems.map((item, index) => (
                    <NavigationItem
                        key={index}
                        title={item.title}
                        iconClass={item.iconClass}
                        isActive={activeItem === item.title}
                        onClick={() => handleItemClick(item)}
                    />
                ))}
            </ul>
        </nav>
    )
};

export default BottomBar;