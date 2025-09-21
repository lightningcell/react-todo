import React from "react";
import NavigationItem from "./NavigationItem";
import type { NavigationItemProps } from "./NavigationItem";
import '../BottomBar.css';

interface BottomBarProps {
    navigationItems: NavigationItemProps[];
}

const BottomBar: React.FC<BottomBarProps> = ({ navigationItems }) => {
    return (
        <nav className="bottom-bar">
            <ul className="bottom-bar__list">
                {navigationItems.map((item, index) => (
                    <NavigationItem
                        key={index}
                        title={item.title}
                        iconClass={item.iconClass}
                        isActive={item.isActive}
                        onClick={item.onClick}
                    />
                ))}
            </ul>
        </nav>
    )
};

export default BottomBar;