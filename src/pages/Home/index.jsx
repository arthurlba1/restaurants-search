import logo from '../../assets/logo.svg'
import MaterialIcon from '@material/react-material-icon';
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';

import { Container, Logo, Search, Wrapper } from './style'

const Home = () => {
    const [inputValue, setInputValue] = useState('');
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
                </Search>
            </Container>
        </Wrapper>
    );
};

export default Home;
