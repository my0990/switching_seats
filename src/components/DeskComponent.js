import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import DeskModalComponent from "./DeskModalComponent";


const DeskContainer = styled.div`
    .label {
        margin: 2rem;
        height: 5vh;
        text-align: center;
    }
    position: absolute;
    top: 0;
    width: 100%;
    .DeskDisplay {
        background: gray;
        height: 60vh;
    }
    .DeskCreateWrapper {
        text-align: center;
        button {
            font-size: 2rem;
            border-radius: 10px;
            margin-top: 5vh;
            cursor: pointer;
        }
    }
`

const DeskComponent = ({scroll}) => {
    const [show, setShow] = useState(false);
    const [arr,setArr] = useState([]);
    const handleClose = () => {
            scroll(true);
            setShow(false);
        }
    const handleShow = () => {
            scroll(false);
            setShow(true);
        }   
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <DeskContainer>
            <div className="label">
                <h1>책상 배치</h1>
            </div>
            <div className="DeskDisplay">
            {arr.map((a,i)=>{
                            return(
                                <tr>
                                    {arr[i].map((a,j)=>{
                                        return(
                                            <td>
                                                test
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
            </div>
            <div className="DeskCreateWrapper">
                <Button variant="primary" onClick={handleShow}>
                    새로운 배열 생성하기
                </Button>
                <DeskModalComponent show={show} handleClose={handleClose} setArr={setArr}/>

            </div>
        </DeskContainer>
    )
}

export default DeskComponent;