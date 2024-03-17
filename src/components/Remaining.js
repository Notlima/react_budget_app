import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [remainingBudget, setRemainingBudget] = useState(budget);

    useEffect(() => {
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        setRemainingBudget(budget - totalExpenses);
    }, [budget, expenses]);

    const alertType = remainingBudget < 0 ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency} {remainingBudget}</span>
        </div>
    );
};

export default Remaining;

