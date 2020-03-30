import React, {useEffect, useState} from 'react';
import axios from 'axios';
import People from '../People/People';

const PeopleList = (props) => {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log(response.data.results);
                setPeople(response.data.results);
            })
            .catch(e => {
                console.log(e, `error`)
            })
    }, [])
    
    return(
        <>
            {people.map(person => {
                return (
                    <People
                        name={person.name}
                        birthday={person.birth_year}
                        height={person.height}
                        mass={person.mass}
                    />
                )
            })}
        </>
    )
}

export default PeopleList