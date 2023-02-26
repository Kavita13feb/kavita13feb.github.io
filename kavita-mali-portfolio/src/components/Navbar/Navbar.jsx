import { Flex, Spacer } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import "./navbar.css"
export const Navbar=()=>{
return <div className='navbar' id="nav-menu">
<Link className='link' to ='/'><h3>Home</h3></Link> 
<Link className='link' to ='/about'><h3>About Me</h3></Link> 

<Link className='link' to ='/skills'><h3>Skills</h3></Link>
<Link className='link' to ='/project'><h3>Project</h3></Link>
<Link className='link' to ='Contact'>
<h3>Contact</h3></Link>
<Link className='link' to ='/resume'><h3>Reusme</h3></Link>


 
</div>
}