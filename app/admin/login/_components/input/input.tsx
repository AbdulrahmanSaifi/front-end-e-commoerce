import React from "react";
import './style.scss';

interface InputProps {
    label: string;
    icon: string;
    value: string;
    onChange: (value: string) => void;
    type:string;
}

const Input: React.FC<InputProps> = ({ label, icon, value, onChange,type }) => {
    return (
        <div className="input-box">
            <div className="input-box__label">
                <label htmlFor="">{label}</label>
            </div>
            <div className="input-box__input">
                <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
                <div className="input-box__icon">
                    <img src={`/icons/${icon}`} alt="icon" />
                </div>
            </div>
        </div>
    );
};

export default Input;
