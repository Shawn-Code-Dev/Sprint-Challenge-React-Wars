import React from 'react';
import styled from 'styled-components';

const People = props => {
    const Title = styled.h2`
        font-size: 2.5rem;
    `
    const Card = styled.div`
        border-radius: 10px;
        border: 1px solid black;
        margin-bottom: 1rem;
        width: 27%;
    `

    return(
        <Card>
            <Title>{props.name}</Title>
            <p>Birth Year: {props.birthday}</p>
            <p>Height: {props.height}cm</p>
            <p>Weight: {props.mass}kg</p>
        </Card>
    )
}

export default People