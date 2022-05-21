import { Modal, Button } from "react-bootstrap";
import styled from 'styled-components';
import { arrCreate } from "../api/deskCreate";
import { useState } from "react";
import { useRef } from "react";
import DeskUnitComponent from "./common/DeskUnitComponent";
import { useDispatch } from "react-redux";
import { deskArr } from "../modules/arr";

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
        background: #ddd;
        margin-top: 1rem;
        // display: flex;
        // justify-content: center;
        position: relative;
        .displayWrapper {
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            tr {
                display: flex;
                td{
                    margin: 5px;
                }
            }
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

`


const DeskModalComponent = ({handleClose, show, setArr, arr}) => {
    const dispatch = useDispatch();
    const [numAlert,setNumAlert] = useState(false); //인풋이 10보다 크면  true
    const [tempArr,setTempArr] = useState([]);
    const onCreate = (col,row) => {
        if(col > 10 || row > 10){
            setNumAlert(true);
            return(
                false
            )
        }
        setTempArr([...arrCreate(col,row)]);
        setNumAlert(false);

    }
    const colRef = useRef();
    const rowRef = useRef();

    const onClose = () => {
        setTempArr([]);
        handleClose();
    }
    const onSave = (arr) => {
        setArr([...arr])
        localStorage.setItem('setArr',JSON.stringify(arr))
        dispatch(deskArr(arr))
        onClose();
    }
    const onDeskClicked = (i,j) => {
        let temp = [...tempArr];
        temp[i][j].toggle = !temp[i][j].toggle
        setTempArr([...tempArr]);
        console.log(tempArr)
        console.log(temp[0][1]===temp[1][1])
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
                        <input ref={colRef} type='number'></input>
                    </div>
                    <div className="flex">
                        <div>rows</div>
                        <input ref={rowRef} type='number'></input>
                    </div>
                    <div className="flex">
                        <div></div>
                        <Button onClick={()=> onCreate(colRef.current.value,rowRef.current.value)}>생성</Button>
                    </div>
                    {numAlert ? 
                        <div style={{color: 'red', textAlign: 'center'}}>10이하의 숫자를 입력해주세요</div>
                        : <div style={{color: 'red', textAlign: 'center',display: 'inline-block'}}></div> }
                    
                </div>
                <div className="line">
                    <div className="display">
                        <table className="displayWrapper">
                            <tbody>
                                {tempArr.map((a,i)=>{
                                    return(
                                        <tr>
                                            {tempArr[i].map((a,j)=>{
                                                    return(
                                                        <td>
                                                            <DeskUnitComponent  modal closed={!a.toggle} onClick={()=>{onDeskClicked(i,j)}} key={j}>
                                                                {a.toggle}
                                                            </DeskUnitComponent>
                                                        </td>
                                                    )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
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