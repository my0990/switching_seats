import { useEffect, useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import ManipulateComponent from "./secret/ManipulateComponent";


const Wrapper = styled.div`



box-sizing: border-box; 
*{
    box-sizing: inherit;
}
font-size: 10px;
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #57bd84;
}

input[type=checkbox] {
  height: 0;
  width: 0;
  visibility: hidden;
    
  &:checked + label {
    &:after {
      transform: scale(4.2);
    } 
  }
}

label {
  outline: none;
  user-select: none;
  color: #000;
  font-family: 'Lato', sans-serif;
  font-size: 2.5rem;
  letter-spacing: 0.04rem;
  padding: 1.3rem 3rem;
  cursor: pointer;
  border-radius: .4rem;
  border: .5rem solid black;
  background: #fff;
  position: relative;
  overflow: hidden;
  
  &::after {
      
    content: '';
    position: absolute;
    width: 100%;
    height: 100%; 
    top: 0;
    left: 0;
    transform: scale(0);
    transition: transform .3s ease-in;
    mix-blend-mode: difference;
    //Gradient start values are somewhat arbitrary. But this seemed a good fit to avoid overly-blurry circle edge.
    
    background: radial-gradient(
      circle at center, 
      #fff 24%, 
      #000 25%, 
      #000 100%);
  }  

//   box-shadow: 0 3px 0 0 #000;
//   &:active {
//     top: 3px;
//     box-shadow: none;
    
//   }
}
`



const Me = ({scroll, desksArr, setDesksArr, studentsArr, setStudentsArr}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [showButton,setShowButton] = useState(true);
    const [empty,setEmpty] = useState(false);
    const click = () => {
      setTimeout(()=>{ setIsClicked(true) }, 700);
      // setInterval(()=>{
      //   setIsClicked(true)
      // },1000)

    }
    return(
        <Wrapper>
          {showButton && 
              <>
                <input type="checkbox" id="cb1" />
                <label for="cb1" onClick={()=>{click()}}>만든이: 말잇닿을련</label>
                
              </> 
          }
          <CSSTransition
            in={isClicked}
            timeout={300}
            unmountOnExit
            classNames="item"
            onEnter={() => setShowButton(false)}
            onExited={() => setShowButton(true)}
            >
              <ManipulateComponent 
                desksArr={desksArr}
                setDesksArr={setDesksArr}
                scroll={scroll}
                studentsArr={studentsArr}
                setStudentsArr={setShowButton}
                setIsClicked={setIsClicked}
            />
            
          </CSSTransition>
          
          

        </Wrapper>

    )
}

export default Me;