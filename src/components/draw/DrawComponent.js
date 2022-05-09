import { useEffect } from 'react';
import styled, {css} from 'styled-components';
import { useState } from 'react';


const Container = styled.div`
    width: 100%;
    min-width: 1024px;
    height: auto;
`
const TitleWrapper = styled.div`
    height: 5vh;
`

const DeskWrapper = styled.div`
    height: 75vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    

`
const BtnWrapper = styled.div`
    height: 15vh;
    width: 100%;
    background: #ddd;
`

const DeskUnitComponent = styled.div`
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    display: inline-block;
    width: 140px;
    height: 70px;
    // max-height: 5vh;
    
    
    
    @media screen and (min-width: 1024px){
        margin: 6px;
    }    
    @media screen and (min-width: 768px) and (max-width: 1023px){
        background: blue;
        margin: 6px;
    }    
    @media screen and (max-width: 767px){
        background: greenyellow;
        margin: 3px;
    }
    ${(props) =>
        props.closed && 
     css`
        border: none;   
        background-color: white;
     `}
     ${(props) =>
        props.manyCols && 
     css`
        width: 60px;
        height: 35px;
        color: red;
     `}
`

const DrawComponent = ({arr, setArr}) => {

    
    // useEffect(()=>{
        
    //     let temp = JSON.parse(localStorage.getItem('setArr'))
    //     if(temp != null){
    //         // setArr(temp)
    //         console.log(temp.length)
    //     }
        
    // },[localStorage.getItem])
    
    return(
        <Container>
            <TitleWrapper>
                <h1>자리 뽑기</h1>
            </TitleWrapper>
            <DeskWrapper>
            <table>
                    <tbody>
                    {arr.map((a,i)=>{
                                    return(
                                        <tr>
                                            {arr[i].map((a,j)=>{
                                                return(
                                                    <td>
                                                        <DeskUnitComponent closed={!a.toggle} large manyCols={arr.length>6 || arr[0].length>8}>
                                                            {/* {arr.length}/ */}
                                                        </DeskUnitComponent>
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                    </tbody>
                </table>
            </DeskWrapper>
            <BtnWrapper></BtnWrapper>
        </Container>
    )
}

export default DrawComponent;