import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Team = (props) => {
    const cards = props.cards;
    // console.log(props);
    
    const totalSalary = cards.reduce((sum, salary) => parseFloat(sum) + salary.salary, 0);
    return (
        <div>
            <h2 className="text-info">Selected Players Details</h2>
            <h4>Total Selected Players: {cards.length}</h4>
            <h4>Total Salary: ${totalSalary}</h4>
            <h3 className="text-success mt-3">Selected Players Name</h3>
            {
                cards.map(card => <h4><FontAwesomeIcon icon={faCheckCircle} /> {card.name}</h4>)
            }
        </div>
            
    );
};

export default Team;