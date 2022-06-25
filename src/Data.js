import { Poster } from "./Poster";
import { useState,useEffect } from 'react';
import { APIposter} from './API';

export function Data() {
  const [ posterlist,setposterlist]= useState([]);
  const getposter=()=>{
  fetch(`${APIposter}/Poster`)
  .then((data)=>(data.json()))
  .then((mvs)=>setposterlist(mvs));
  };
  useEffect(()=>getposter(),[]);
 
  return (
    <div className="data">
           <div className="posterlist">
        {posterlist.map(({name,logo,image,imagename,pid}, index) => (
          <Poster key={index}
            name={name} logo={logo}
            image={image} imagename={imagename}
                                    pid={pid} />
        ))}
      </div>
    </div>
  );
}
