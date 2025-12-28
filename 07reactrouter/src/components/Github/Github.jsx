import React, {useEffect, useState} from 'react';

function Github(){
    const [data, setData] = useState([]);
    
    useEffect(()=>{
      fetch('https://api.github.com/users/Ankit-51-yadav/followers')
      .then(response => response.json())
        .then(data => {console.log(data);
           setData(data) 
    })
},[]);
   

    return (
        <>
        <div className="text-center m-4 bg-gray-600 text-white p-4 font-bold text-2xl">Github followers: {data.followers}
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="mx-auto my-4"  style={{width: '100px'}}/>
            
        </div>
        </>
    )
}

export default Github;