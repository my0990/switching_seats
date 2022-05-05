import styled, {css} from "styled-components"

const DeskUnit = styled.div`
    border: 1px solid black;
    padding: 5px;
    
    width: 40px;
    height: 23px;
    
    cursor: pointer; 
    &:hover{
        transform: scale(1.1);
        transition: transform 200ms ease-in;
    }

    ${(props) =>
        props.closed && 
     css`
        border: none;   
        
     `}
`

const DeskUnitComponent = ({children, ...props}) => {
    return(
        <DeskUnit {...props}>{children}</DeskUnit>
    )
}

export default DeskUnitComponent;