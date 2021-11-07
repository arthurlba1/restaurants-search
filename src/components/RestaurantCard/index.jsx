import React from 'react';  

import { Address, Restaurant, RestaurantInfo, Title } from './styles';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Restaurant Name</Title>
            <p>Evaluation</p>
            <Address>Address</Address>
        </RestaurantInfo>
    </Restaurant>
)

export default RestaurantCard;
