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

const DeskComponent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <DeskContainer>
            <div className="label">
                <h1>책상 배치</h1>
            </div>
            <div className="DeskDisplay">

            </div>
            <div className="DeskCreateWrapper">
                <Button variant="primary" onClick={handleShow}>
                    새로운 배열 생성하기
                </Button>
                <DeskModalComponent show={show} handleClose={handleClose} />

            </div>
        </DeskContainer>
    )
}

export default DeskComponent;