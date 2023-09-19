import React from 'react'
import useFetch from '../hooks/useFetch';

const FetchComponent = (Component: any) => {
  function Testomponent() {
    const { data, loading, error } = useFetch('https://randomuser.me/api/?results=10');
        return <Component loading={loading} data={data} error={error}/>
  }
  return Testomponent;
}

export default FetchComponent