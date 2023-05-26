import { response } from "express"

const handleHtttp=(resp : Response, error: string, ErrorRaw?:any)=>{
    response.status(500);
    response.send({error:error}); 
};

export {handleHtttp};