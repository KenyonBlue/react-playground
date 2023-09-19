import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';

export interface Person {
    name: {
      first: string;
      last: string;
    };
    email: string;
    // Add more fields as needed
}
  
const RandomStuffapi = () => {
    const { data, loading, error } = useFetch('https://randomuser.me/api/?results=10');

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div> 
            {loading? <div>loading</div> : data?.results?.map((person: Person, index: number) => (<div key={index}> {person.name.first} </div>)) }
        </div>
    );
}

export default RandomStuffapi;
