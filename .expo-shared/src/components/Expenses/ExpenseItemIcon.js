import React from 'react';
import { Image } from 'react-native';
import foodIcon from '../../assets/images/icons8-bagel-48.png';
import groceryIcon from '../../assets/images/icons8-grocery-bag-48.png';
import transportationIcon from '../../assets/images/icons8-public-transportation-48.png';
import personalIcon from '../../assets/images/icons8-personal-60.png';
import incomeIcon from '../../assets/images/icons8-income-64.png';

const ExpenseItemIcon = ({ type }) => {
    const path = type === 'food' ? foodIcon
        : type === 'grocery' ? groceryIcon
            : type === 'transportation' ? transportationIcon
                : type === 'personal' ? personalIcon
                    : type === 'income' ? incomeIcon : ''

    return <Image source={path} style={{ width: 40, height: 40 }} />
}

export default ExpenseItemIcon