import React from 'react'

export const ProjectCard = ({Image,Title,Discription,Date,contributor,TotalMembers}) => {
  return (
    <div style={{width:'100%',height:'500px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',backgroundColor:'white'}}>
<div style={{ marginTop:'3%',display:'flex', marginLeft:'10px',
alignItems: 'center',gap:"5px"}}>
    <img src='https://i.postimg.cc/gkCZtNs2/profile-pic-2.png'  width='5%' style={{borderRadius:'50%',}} />
<h3>Kavita Mali</h3>
<p style={{color:'gray'}}>is with </p>
<h3>{contributor}</h3>
<p style={{color:'gray'}}>and {TotalMembers-2} others </p>



</div>
<p style={{color:'gray',marginRight:"74%",marginTop:'-2%',fontSize:'15px'}}>{Date} </p>
<h1>{Title}</h1>
<p style={{width:'60%',margin:'auto',textAlign:'justify'}}>{Discription}</p>
<img src ={Image} width={'50%'} />



     </div>
  )
}
