import logo from '../../assets/logo.svg'
import MaterialIcon from '@material/react-material-icon';
import React, { useState } from 'react';
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';

import { Card, RestaurantCard } from '../../components'; 
import { Carousel, Container, Logo, Search, Wrapper } from './style';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 350,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="web app logo"/>
                    <TextField
                        outlined
                        label="Search"
                        trailingIcon={<MaterialIcon role="button" icon="search" />}>
                        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <Carousel>
                        
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
        </Wrapper>
    );
};

export default Home;
