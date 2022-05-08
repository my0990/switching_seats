import styled, {css} from "styled-components"

const DeskUnit = styled.div`
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    width: 40px;
    height: 23px;
    
    



    ${(props) =>
        props.closed && 
     css`
        border: none;   
        
     `}
     ${(props) =>
        props.modal && 
     css`
     &:hover{
        transform: scale(1.1);
        transition: transform 200ms ease-in;
        cursor: pointer; 
        /* @media screen and (max-width: 990px) {
            width: 25px;
            height: 13px;
        } */
    }`
    }
    ${(props) =>
        props.large && 
     css`
     margin: 3px;
     width: 4vw;
     height: 0;
     padding-bottom: 43%;
    //  @media screen and (max-width: 990px) {
    //     width: 3vw;
    //     height: 3vh;
    // }
    `
    }
`

const DeskUnitComponent = ({children, ...props}) => {
    return(
        <DeskUnit {...props}>{children}</DeskUnit>
    )
}

export default DeskUnitComponent;