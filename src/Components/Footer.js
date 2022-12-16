import React from 'react'

const Footer = () => {
  let footerStyle ={ 
    position : "relative",
    width : "100%",
    top : "15vh"
  }
  return (
      <footer className="text-center p-2 bg-dark" style={footerStyle} >
        <p className="text-white my-2">© 2022 Copyright <strong>Made With &#10084; By Sahil Nagar</strong></p>
      </footer>
      
  )
}

export default Footer



