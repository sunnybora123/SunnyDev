import React from 'react'
import "./navbar.scss";
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar*/}
        <Sidebar/>
        <div className="wrapper">
            <motion.span className='name' initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Sunny.Dev</motion.span>
            <div className="social">
        
                <a href="https://www.instagram.com/"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/sbwcpc/"><img src="/linkedln.png" alt="" /></a>
                <a href="https://github.com/sunnybora123"><img src="/github.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar