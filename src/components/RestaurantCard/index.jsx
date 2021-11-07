import React from 'react';  
import ReactStars from 'react-rating-stars-component'

import { Address, Restaurant, RestaurantInfo, Title } from './styles';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Restaurant Name</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
            <Address>Address</Address>
        </RestaurantInfo>
    </Restaurant>
)

export default RestaurantCard;
