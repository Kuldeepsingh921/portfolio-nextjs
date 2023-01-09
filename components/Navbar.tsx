import Link from 'next/link'
import React from 'react'

 const Navbar = () => {
  return (
    <div style={{height:'50px',backgroundColor:'skyblue',display:'flex',alignItems:"center",justifyContent:'center',gap:"30px",color:'black'}}>
        <Link href={'/'}>Kuldeep Singh</Link>
        <Link href={'/projects'}>Projects</Link>
        
    </div>
  )
}
export default Navbar
