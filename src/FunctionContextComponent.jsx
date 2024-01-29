import React  from 'react'
import { useTheme , useThemeUpdate } from './ThemeContext'

function FunctionContextComponent() {
    const darkTheme= useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem',
    }
  return (
    <>
    <button  {...darkTheme ? {className:'btn border-2 border-solid border-gray-800'} : {className:'btn border-2 border-solid border-red-800'}}   onClick={toggleTheme}>Toggle</button>
    <div style={themeStyle}>FunctionContextComponent</div>
    </>
  )
}

export default FunctionContextComponent