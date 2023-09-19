import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import FetchComponent from '../higherOrderComponents/fetchComponent';

export interface Person {
    name: {
      first: string;
      last: string;
    };
    email: string;
    // Add more fields as needed
}
  
const RandomStuffapi = ({data, loading, error}: any) => {

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div> 
            {loading? <div>loading</div> : data?.results?.map((person: Person, index: number) => (<div key={index}> {person.name.first} </div>)) }
        </div>
    );
}

export default FetchComponent(RandomStuffapi);
