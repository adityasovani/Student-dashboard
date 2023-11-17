import React from 'react';
import '../Sidebar.css';

type Props = {
    icon: string;
    name: string;
    selected: boolean;
}

const MenuItem: React.FC<Props> = ({ icon, name, selected }) => {
    return (
        <div className='row' style={{marginTop:'0.68rem'}}>
            <div className="col">
                <img src={icon} alt="icon" />
            </div>
            <div className='col'>
                <span className={"name"} style={!selected ? { color: '#ffffff80' } : {}}>{name}</span>
            </div>
        </div>
    )
}

export default MenuItem;