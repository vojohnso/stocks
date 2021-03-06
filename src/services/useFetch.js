import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
        //console.log(data);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch Error')
        } else {
          setIsPending(false);
          setError(error.message);
        }
      })
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;