import React, { useEffect, useState } from 'react'
import rgbToHex from "./utils"
const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [ alert,setAlert] = useState(false)
    const bg = rgb.join(',')
    const hex = rgbToHex(...rgb)
    console.log(hex);
    const hexValue = `#${hexColor}`

    useEffect(()=>{
      const timeout = setTimeout(()=>{
        setAlert(false)
      },3000)
      return () => clearTimeout(timeout)
    },[alert])
    return (
      <article 
        className={`color ${index > 10 && 'color-light'}`}
        style={{ backgroundColor:`rgba(${bg})`}}
        onClick={()=>{
          setAlert(true)
          navigator.clipboard.writeText(hexValue)
        }}
      >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexValue}</p>
        {alert && <p className='alert' style={{color:"red"}}>copied to clipboard</p>}
      </article>
      )
}

export default SingleColor