import axios from 'axios';
import Link from 'next/link';
import React from 'react'

 const Projects = ({projects}) => {
    console.log(projects)
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',width:"70%",margin:'auto',marginTop:'20px',gap:'20px',textAlign:'center'}}>
        {projects.map((el)=>
        <div key={el.id}>
                <Link key={el.id} href={el.html_url}>
                <div style={{height:'200px',width:'200px',border:'1px solid skyblue',}}>
                <h3>{el.name}</h3>
                <h5>Star Count:{el.stargazers_count}</h5>
                <h5>Fork Count:{el.forks_count}</h5>
                <h5>Language:{el.language}</h5>
                </div>
                </Link>
        </div>
        )}
    </div>
  )
}
export default Projects;

export async function getStaticProps(){
  let res = await axios.get(`https://api.github.com/search/repositories?q=user:Kuldeepsingh921+fork:true&sort=updated&per_page=10&type=Repositories`)
  let data= await res.data
  let actualData=data.items
  //console.log(data)
  return{
    props:{
        projects:actualData
    }
  }
}

