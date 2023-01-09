import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Projects from './projects';

 const Home = ({data}) => {
  console.log(data)
  return (
    <div style={{display:'flex',}}>
      <div>
        <div style={{textAlign:'center'}}>
          <img  style={{borderRadius:'50%',width:'150px', height:'150px',marginLeft:'150px'}}  src={data.avatar_url} alt="kuldeep singh" />
          <h3>{data.name}</h3>
          <h1 style={{fontWeight:'600',marginTop:'20px'}}>Tech Stack</h1>
          <p style={{marginTop:'20px'}}>HTML | CSS | javaScript | React Js | TypeScript | Next Js | Redux | Storybook | Chakra UI</p>
          <Link href={'https://drive.google.com/file/d/1Mx76MItsitp5sLdOLOWTNSJSFiVE6LDZ/view?usp=share_link'}><button style={{border:'none',borderRadius:'5px',backgroundColor:'skyblue',color:'black',padding:'5px',marginRight:'20px',marginTop:'20px'}}>RESUME</button></Link>
          <Link href={'https://github.com/Kuldeepsingh921'}><button style={{border:'none',borderRadius:'5px',backgroundColor:'skyblue',color:'black',padding:'5px'}}>Follow Me</button></Link>
          <h1 style={{fontWeight:'600',marginTop:'20px',marginBottom:'10px'}}>Education</h1>
          <h5>Masai, Bangalore,India</h5>
          <h5>bechalors in Vocational in Software development</h5>
          <h5>Higher Seconday School 2017-2018</h5>
        </div>
      </div>
      <div>
        
      </div>
      
    </div>
  )
}
export default Home;

export async function getStaticProps(){
  let res= await axios.get(`https://api.github.com/users/Kuldeepsingh921`)
  let data=await res.data
  console.log(data)
  return{
    props:{
      data
    }
   
  }
}






