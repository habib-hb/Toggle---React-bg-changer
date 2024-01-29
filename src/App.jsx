import React,{ useEffect, useState , useRef } from 'react'
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';
import  ThemeProvider    from './ThemeContext';
import WhileSet from './whileSet';




export default function App() {
 
  let name= "Habib" 

  return (
   <>
   <ThemeProvider>
   
    <FunctionContextComponent/>
    <WhileSet text="hello" number={10} name={name}	/>

    {/* <ClassContextComponent/> */}
    </ThemeProvider>
    
    </>
  )
}


