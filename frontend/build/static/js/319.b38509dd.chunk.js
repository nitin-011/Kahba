"use strict";(self.webpackChunkkahba_final=self.webpackChunkkahba_final||[]).push([[319],{319:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var n=i(43),a=i(579);const s={contactSection:{display:"flex",justifyContent:"space-between",padding:"50px",backgroundColor:"#F8A928",color:"white"},formSection:{width:"50%"},formTitle:{color:"black",display:"flex",justifyContent:"center",fontFamily:"Holistic Haircut, sans-serif",fontSize:"2rem",fontWeight:"bold",marginBottom:"20px"},form:{display:"flex",flexDirection:"column"},input:{width:"100%",marginBottom:"20px",padding:"10px",fontSize:"1rem",border:"none",borderBottom:"2px solid white",background:"transparent",color:"white",outline:"none"},textarea:{height:"100px",width:"100%",padding:"10px",fontSize:"1rem",border:"none",borderBottom:"2px solid white",background:"transparent",color:"white",outline:"none",marginBottom:"20px"},newsletter:{display:"flex",alignItems:"center",marginBottom:"20px"},submitBtn:{width:"150px",padding:"10px",backgroundColor:"#F4CE5E",border:"none",cursor:"pointer",fontSize:"1rem",fontWeight:"bold",borderRadius:"5px"},infoSection:{width:"40%",textAlign:"right"},address:{fontSize:"1rem",marginBottom:"20px"},map:{width:"100%",height:"auto",marginBottom:"20px"},contactDetails:{fontSize:"1rem",marginBottom:"20px"},socialIcons:{fontSize:"1.5rem"}},r=()=>{const[e,t]=(0,n.useState)({name:"",email:"",phone:"",message:"",newsletter:!1}),[i,r]=(0,n.useState)(""),l=i=>{const{name:n,value:a,type:s,checked:r}=i.target;t({...e,[n]:"checkbox"===s?r:a})};return(0,a.jsxs)("div",{style:s.contactSection,children:[(0,a.jsxs)("div",{style:s.formSection,children:[(0,a.jsx)("h2",{style:s.formTitle,children:"Get in Touch"}),(0,a.jsxs)("form",{onSubmit:async i=>{if(i.preventDefault(),e.name&&e.email&&e.phone&&e.message)try{(await fetch("http://localhost:5000/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(r("Form submitted successfully!"),t({name:"",email:"",phone:"",message:"",newsletter:!1})):r("Failed to submit the form.")}catch(n){r("An error occurred. Please try again later.")}else r("Please fill in all required fields.")},style:s.form,children:[(0,a.jsx)("label",{htmlFor:"name",children:"Name"}),(0,a.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:l,required:!0,style:s.input}),(0,a.jsx)("label",{htmlFor:"email",children:"Email"}),(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:l,required:!0,style:s.input}),(0,a.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,a.jsx)("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:l,required:!0,style:s.input}),(0,a.jsx)("label",{htmlFor:"message",children:"Message"}),(0,a.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:l,required:!0,style:s.textarea}),(0,a.jsxs)("div",{style:s.newsletter,children:[(0,a.jsx)("input",{type:"checkbox",id:"newsletter",name:"newsletter",checked:e.newsletter,onChange:l}),(0,a.jsx)("label",{htmlFor:"newsletter",children:"Would you like to receive our newsletter?"})]}),(0,a.jsx)("button",{type:"submit",style:s.submitBtn,children:"Submit"})]}),i&&(0,a.jsx)("p",{children:i})]}),(0,a.jsxs)("div",{style:s.infoSection,children:[(0,a.jsxs)("p",{style:s.address,children:["JQW2+VP2, Gmada Aerocity,",(0,a.jsx)("br",{}),"Chachu Majra, Punjab 140306"]}),(0,a.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54908.83172945944!2d76.67466090418857!3d30.66770405133338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb513f26dfdb%3A0x82d0dddfea68b940!2sKAHBA%20Design%20Studio!5e0!3m2!1sen!2sin!4v1727760236963!5m2!1sen!2sin",width:"100%",height:"300",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",style:{border:0,width:"100%",height:"300px"},title:"Google Map"}),(0,a.jsxs)("div",{style:s.contactDetails,children:[(0,a.jsxs)("p",{children:["Email: ",(0,a.jsx)("a",{href:"mailto:kahbadesignstudio@gmail.com",children:"kahbadesignstudio@gmail.com"})]}),(0,a.jsxs)("p",{children:["Phone: ",(0,a.jsx)("a",{href:"tel:+918585981411",children:"8585981411"})]}),(0,a.jsx)("p",{children:"Location: Mohali, Chandigarh"})]}),(0,a.jsxs)("div",{style:s.socialIcons,children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-instagram"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-linkedin"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-whatsapp"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"far fa-envelope"})})]})]})]})};var l=i(657),o=i(601);const d=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{children:(0,a.jsx)(l.A,{})}),(0,a.jsx)("div",{children:(0,a.jsx)(r,{})}),(0,a.jsx)("div",{children:(0,a.jsx)(o.A,{})})]})}}]);
//# sourceMappingURL=319.b38509dd.chunk.js.map