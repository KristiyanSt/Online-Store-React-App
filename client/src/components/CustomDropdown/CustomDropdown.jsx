import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomDropdown.css';

function CustomDropdown({
    title,
    selected,
    options,
    handleOption
}) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(options, selected);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const closeDropdown = () => {
        setIsOpen(false);
    }
    const handleOptionClick = (option) => {
        closeDropdown();
        handleOption(option);
    }

    return (
        <div className="dropdown" onClick={toggleDropdown}>
            <button className="dropdown__button" >
                {title ? (`${title}: ${selected}`) : (selected)}
            </button>
            <img className="dropdown__icon" src="/assets/images/down-arrow-svgrepo-com.svg" alt="dropdown-icon" />
            {isOpen && (
                <ul className="dropdown__menu">
                    {options.map(option => {
                        return (
                            <li
                                className={`dropdown__link ${option === selected ? 'selected' : ""}`}
                                onClick={() => handleOptionClick(option)}>
                                <Link>{option}</Link>
                            </li>
                        )
                    }
                    )}
                </ul>
            )}
        </div>
    );
}

export default CustomDropdown;