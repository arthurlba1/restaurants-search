import logo from '../../assets/logo.svg'
import MaterialIcon from '@material/react-material-icon';
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';

import { Card, Map, Modal, RestaurantCard } from '../../components'; 
import { Carousel, Container, Logo, Search, Wrapper } from './style';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 350,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };
    
    const handleChange = (e) => {
        setValue(e.target.value);
      };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setQuery(value);
        }
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
                         <Input type="text" value={value} onKeyPress={handleKeyPress} onChange={handleChange} />
                    </TextField>
                    <Carousel>
                        
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map query={query} />
            <Modal open={modalOpened} onClose ={() => setModalOpened(!modalOpened)} />
        </Wrapper>
    );
};

export default Home;
