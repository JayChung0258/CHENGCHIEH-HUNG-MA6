import { useState } from 'react';
import './Cell.css';

export default function Cell({ updateCount }) {

    const [isActive, setIsActive] = useState(false);

    // Function to handle cell clicks
    const handleClick = () => {
        // Calculate the new state first due to asynchronous update
        const newIsActive = !isActive;

        // Update both state and count based on the new value
        setIsActive(newIsActive);
        updateCount(newIsActive);
    };



    let className;
    if (isActive) {
        className = 'box active';
    } else {
        className = 'box';
    }

    return (
        <div
            className={className}
            onClick={handleClick}
        ></div>
    );

}
