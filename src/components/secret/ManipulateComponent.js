import styled, {css} from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: orange;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Modal {
        position: fixed;
        /* bottom: -150vh; */
        background-color: #fff;
        /* width: 100%; */
        height: 100%;
        box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
        right: -150vw;
        padding: 0 12px 12px;
        transition: right 0.3s ease-out;
        z-index: 10;
        width: 300px;
    }
    .Modal.Show {
        right: 0;
    }
    .Overlay {
        background-color: rgba(0, 0, 0, 0.55);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        display: none;
        z-index: 5;
    }
    .Overlay.Show {
        display: block;
    }
`

const Wrapper = styled.div`
    background-color: white;
    width: 80%;
    height: 80%;
    min-width: 1024px;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DeskUnitComponent = styled.div`
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* display: inline-block; */
    width: ${props => 45/props.length * 1.8}vh;
    height: ${props => 45/props.length}vh;
    // max-width: 15vh;
    // max-height: 7vh;
    
    /* background-color: red; */
    vertical-align: middle;
    span{
        display: inline-block;
    }
    cursor: pointer;
    margin: 6px;
    /* @media screen and (min-width: 1024px){
        margin: 6px;
    }    
    @media screen and (min-width: 768px) and (max-width: 1023px){
        background: blue;
        margin: 6px;
    }    
    @media screen and (max-width: 767px){
        background: greenyellow;
        margin: 3px;
    } */
    ${(props) =>
        props.closed && 
     css`
        font-size: 0;
        border: none;   
        background-color: white;
        cursor: default;
     `}
     ${(props) =>
        props.manyCols && 
     css`
        width: 60px;
        height: 35px;
        color: red;
     `}
`

const ManipulateComponent = ({arr}) => {
    const [modalToggle,setModalToggle] = useState(false);
    return(
        <Container>
            <div className={`Modal ${modalToggle? 'Show' : ''}`}>
                test
            </div>
            <div 
                className={`Overlay ${modalToggle ? 'Show' : ''}`}
                onClick={()=>{setModalToggle(!modalToggle)}}
            />
            <h1>조작</h1>
            <Wrapper>
                
                <table>
                    <tbody>
                    
                    {arr.map((a,i)=>(
                                    <tr>
                                        {arr[i].map((a,j)=>{
                                            const cols = parseInt(arr.length);
                                            const rows = parseInt(arr[0].length);
                                            let length = 0;
                                            if(cols>=rows){
                                                length = cols;
                                            } else {
                                                length = rows*0.7;
                                            }
                                            return(
                                                <td>
                                                    
                                                        <DeskUnitComponent closed={!a.toggle} length={length} large onClick={()=>{setModalToggle(!modalToggle)}}>
                                                            {/* <CSSTransition
                                                            // appear
                                                            classNames="item"
                                                            in={test}
                                                            timeout={500}
                                                            >
                                                            <div >
                                                                <span>{a.name}</span>
                                                            </div>
                                                            </CSSTransition> */}
                                                        </DeskUnitComponent>
                                                    
                                                </td>
                                            )
                                        })}
                                    </tr>
                                        
                        )
                    )}
                    
                    </tbody>
                </table>
            </Wrapper>
        </Container>
    )
}

export default ManipulateComponent;