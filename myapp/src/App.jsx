import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import { useState } from "react";

function App() {
  const [value ,setValue] = useState("")

  return (
    <div className="container">
      <Input  type={"text"} size={"md"} onChange={(e)=>{setValue(e.target.value)}}/>

      <Image src={"https://masai-website-images.s3.ap-south-1.amazonaws.com/Arya_Adarsha_Gautam_a72b51d7b3.jpeg"}
      alt={"Himanshu"}
      borderRadius={100}
      width={200}
      height={200}
      fit={"cover"}
      />

      <Pagination total={10}  />
    </div>
  );
}

export default App;
