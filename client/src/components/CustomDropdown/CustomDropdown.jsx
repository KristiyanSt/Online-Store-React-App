import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomDropdown.css';

function CustomDropdown({
    title,
    selected,
    options,
    handleOption
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

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

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                closeDropdown();
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            className={`dropdown ${isOpen ? 'dropdown-active' : ""}`}
            onClick={toggleDropdown}
        >
            <button className="dropdown__button">
                {title ? (`${title}: ${selected}`) : (selected)}
            </button>
            <img className="dropdown__icon" src="/assets/images/down-arrow-svgrepo-com.svg" alt="dropdown-icon" />
            {isOpen && (
                <ul className="dropdown__menu">
                    {options.map(option => {
                        return (
                            <li
                                key={option}
                                className={`dropdown__option ${option === selected ? 'selected' : ""}`}
                                onClick={() => handleOptionClick(option)}>
                                {option}
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