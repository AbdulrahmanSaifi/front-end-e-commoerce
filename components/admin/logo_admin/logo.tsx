import React from "react";
import Image from "next/image";
import './style.scss'


const Input: React.FC = () => {

    return (
        <div className="box box--logo">
            <div className="box__icon">
                <Image src={'/icon.svg'} alt="icon" width={40} height={40} />
                <h1>DASHBOARD</h1>
            </div>
            <div className="box__text">
                <h3>Login into your account</h3>
            </div>
        </div>
    )
}


export default Input