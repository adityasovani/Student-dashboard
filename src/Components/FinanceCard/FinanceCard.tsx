import React from 'react';
import './FinanceCard.css';

type Props = {
    imagePath: any;
    amount: string;
    caption: string;
    selected: boolean;
}

const FinanceCard: React.FC<Props> = ({ imagePath, amount, caption, selected }) => {
    return (
        <div className={`card ${selected ? 'selected' : ""}`}>
            <img src={imagePath} className='card-image' alt="card-image" />
            <span className="amount mt-1">{amount}</span>
            <span className="caption">{caption}</span>
        </div>
    )
}

export default FinanceCard