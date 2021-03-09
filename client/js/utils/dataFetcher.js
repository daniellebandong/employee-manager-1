const getRequest = async (url)=>{
   const res = await fetch(url);
   const result = await res.json();
   return result
}

const deleteRequest = async (url)=>{
   const requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
       const res = await fetch(url, requestOptions)
       const result = await res.json()
       return result
}

const dataFetcher = {getRequest, deleteRequest}

export default dataFetcher