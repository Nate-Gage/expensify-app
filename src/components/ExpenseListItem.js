import React from 'react';
import { Link } from 'react-router-dom';

//dispatch can be part of the destructured object
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;