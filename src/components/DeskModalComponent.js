import { Modal, Button } from "react-bootstrap";
import styled from 'styled-components';
import { arrCreate } from "../api/deskCreate";
import { useState } from "react";

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
        div {
            position: absolute;
            top: 50%;
            left: 50%;
            // margin-top: 27%;
            transform: translate(-50%,-50%); 
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
        margin: 15px;
        // display: inline-block;
        display: flex;
    }
`

const DeskUnit = styled.span`
    border: 1px solid white;
    margin: 5px;
    width: 20px;
    display: inline-block;
    height: 10px;
`

const DeskModalComponent = ({handleClose, show}) => {
    const [arr,setArr] = useState([]);
    const onCreate = (col,row) => {
        setArr([...arrCreate(col,row)]);
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
                        <input></input>
                    </div>
                    <div className="flex">
                        <div>rows</div>
                        <input></input>
                    </div>
                    <div className="flex">
                        <div></div>
                        <Button>생성</Button>
                    </div>
                </div>
                <div className="line">
                    <div className="display">
                        <div>
                        {arr.map((a,i)=>{
                            return(
                                <tr>
                                    {arr[i].map((a,j)=>{
                                        return(
                                            <td>
                                                <DeskUnit>
                                                   
                                                </DeskUnit>
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="button-wrapper">
                        <Button onClick={()=>{onCreate(8,6)}}>저장</Button>
                        <Button onClick={handleClose}>취소</Button>
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