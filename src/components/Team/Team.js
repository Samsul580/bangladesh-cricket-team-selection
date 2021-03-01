import React from 'react';

const Team = (props) => {
    const cards = props.cards;
    // console.log(props);
    
    const totalSalary = cards.reduce((sum, salary) => parseFloat(sum) + salary.salary, 0);
    return (
        <div>
            <h2>Selected Players Details</h2>
            <h4>Total Selected Players: {cards.length}</h4>
            <h4>Total Salary: {totalSalary}</h4>
            <h3>Selected Players Name</h3>
            {
                cards.map(card => <h4>{card.name}</h4>)
            }
        </div>
            
    );
};

export default Team;