import { Modal, Button } from "react-bootstrap";
import styled from 'styled-components';
import { arrCreate } from "../api/deskCreate";
import { useState } from "react";
import { useRef } from "react";
import DeskUnitComponent from "./common/DeskUnitComponent";

const ModalContainer = styled.div`
    
    
    min-width: 498px;
    
    .flex {
        
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        div {
            width: 60px;
            margin-right: 10px;
            text-align: right;
            
        }

        input {
            margin-right: 60px;
        }
        button {
            margin-right: 60px;
            width: 185px;
        }
    }
    .display {
        width: 100%;
        height: 0;
        padding-bottom: 54%;
        background: gray;
        margin-top: 1rem;
        // display: flex;
        // justify-content: center;
        position: relative;
        .displayWrapper {
            position: absolute;
            // top: 50%;
            // left: 50%;
            // // margin-top: 27%;
            // transform: translate(-50%,-50%); 
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        
    }
    
    .line {
        border-bottom: 1px solid #ddd;
        padding: 1rem;
    }
    .button-wrapper {
        width: 160px;
        margin: auto;
        display: flex;
        padding: 1rem;
        justify-content: space-between;
    }
    tr {
        margin: 5px;
        // display: inline-block;
        display: flex;
        
        td{
            margin: 5px;
        }
    }
`


const DeskModalComponent = ({handleClose, show, setArr}) => {
    
    const [tempArr,setTempArr] = useState([]);
    const onCreate = (col,row) => {
        setTempArr([...arrCreate(col,row)]);
    }
    const colRef = useRef();
    const rowRef = useRef();

    const onClose = () => {
        setTempArr([]);
        handleClose();
    }
    const onSave = (arr) => {
        setArr([...arr])
        onClose();
    }
    const onDeskClicked = (i,j) => {
        let temp = [...tempArr];
        console.log(temp[i][j].toggle++)
        // setTempArr([...tempArr]);
        // console.log([...tempArr])
        // console.log(temp)
    }
    return(
        <Modal 
            show={show} 
            onHide={handleClose} 
            size="lg"
            backdrop="static"
        >
            <ModalContainer>
                <div className="line">
                    <div className="flex">
                        <div>columns</div>
                        <input ref={colRef}></input>
                    </div>
                    <div className="flex">
                        <div>rows</div>
                        <input ref={rowRef}></input>
                    </div>
                    <div className="flex">
                        <div></div>
                        <Button onClick={()=> onCreate(colRef.current.value,rowRef.current.value)}>생성</Button>
                    </div>
                </div>
                <div className="line">
                    <div className="display">
                        <div className="displayWrapper">
                        {tempArr.map((a,i)=>{
                            return(
                                <tr>
                                    {tempArr[i].map((a,j)=>{
                                        if(a.toggle){
                                            return(
                                                <td>
                                                    <DeskUnitComponent onClick={()=>{onDeskClicked(i,j)}}>
                                                        {a.toggle}
                                                    </DeskUnitComponent>
                                                </td>
                                            )
                                        } else {
                                            return(
                                                <td>
                                                    <DeskUnitComponent closed>
                                                        
                                                    </DeskUnitComponent>
                                                </td>
                                            )
                                        }   
                                        
                                    })}
                                </tr>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="button-wrapper">
                        <Button onClick={() => onSave(tempArr)}>저장</Button>
                        <Button onClick={onClose}>취소</Button>
                    </div>
                </div>
            </ModalContainer>
            {/* <Modal.Body>
                Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Change
            </Button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default DeskModalComponent;