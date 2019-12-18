import React from "react";
import styled from "styled-components";

//styled component oluştururlurken literasl yerine `` bu şekilde static object içerisine de yazılabilir
const TextStyleQuote=styled.p(props=>({  
//color:props.primary, eğer props kullanırsak App.js de bu özelliklerle alakalı props gönderirsek burda o props u kullanabiliriz App.js de color="red" şeklinde props u TextQuote componenti içerisinde kullanabiliriz    
position: "absolute",
top: "35%",
left: "50%",
transform: "translate(-50%, -50%)",
width: "80%"
}));


const TextQuote=props=>(
    <TextStyleQuote {...props}>
        {props.children}
    </TextStyleQuote>
)

export default TextQuote;