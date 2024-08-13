import React from "react"
import './style.scss'

interface button {
    onClick: () => void
}

const button: React.FC<button> = ({ onClick }) => {

    return (
        <button onClick={onClick} className="button">
            Login Now
        </button>
    )
}


export default button;