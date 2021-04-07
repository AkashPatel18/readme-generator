import React,{useState} from 'react'
// import './assets/rm.svg'

const Header = () =>{

    const white = "#09d3ac"
    
    const [nc,setnc] = useState(white)
    
    const ChangeColor = () => {
        let newColor = "#884292"
        setnc(newColor)
    }  
    
    const Normal =()=>{
        let newColor = white
        setnc(newColor)
    }
    
    return(
    <>
        <header>
            <h2 className="header_h1" onMouseEnter={ChangeColor} onMouseLeave={Normal} style={{color:nc}}>GitHub Profile README Generator</h2>
        </header>
        <hr></hr>
    
    </>)
}


export default Header