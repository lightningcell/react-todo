import React from "react";
import '../BottomBar.css';

const BottomBar: React.FC = () => {
    return (
        <nav className="bottom-bar">
            <ul className="bottom-bar__list">
                <li className="bottom-bar__item">
                    <a href="#">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li className="bottom-bar__item">
                    <a href="#">
                        <i className="fa fa-tasks" aria-hidden="true"></i>
                        <span>Tasks</span>
                    </a>
                </li>
                <li className="bottom-bar__item">
                    <a href="#">
                        <i className="fa fa-rocket" aria-hidden="true"></i>
                        <span>Goals</span>
                    </a>
                </li>
                <li className="bottom-bar__item">
                    <a href="#">
                        <i className="fa fa-chart-bar" aria-hidden="true"></i>
                        <span>Stats</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default BottomBar;