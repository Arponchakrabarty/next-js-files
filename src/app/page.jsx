import Link from "next/link";

import Image from "next/image";
import { usePhones } from "./phone-hunter";

const Phn= ()=>{
    const newPhn= usePhones
    console.log(newPhn);

    const phone= newPhn.map((item,index)=><div key={item.id} className="grid grid-cols-2 border-2 border p-20 gap-5  ">

        
           <Image width={100} height={80} className="h-80 w-100" src={item.image} alt={item.name} />
            
            <h1>name: {item.name}</h1>
            <h1>price:{item.price}</h1>
            <Link href={`/phone/${item.id}`} > see details</Link>
        
        {console.log(item)}
    </div>)

 return<>
 <div className="grid grid-cols-2 p-5 gap-5  ">
    {phone}
 </div>
 </>

}
export default Phn 








