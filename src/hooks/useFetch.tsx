import axios from "axios";
import { useEffect, useState } from "react";
import { Person } from "../components/randomStuffapi";

const useFetch = (url: string) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => axios.get(url).then((res) => { 
                setData(res.data);
            }).catch((err) => {
                setError(err);
            }).finally(() => {
                 setLoading(false);
             }), 2000)
        };
        fetchData();
    }, [url]);
    return { data, loading, error };
}

export default useFetch;