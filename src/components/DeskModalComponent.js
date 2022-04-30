import { Modal, Button } from "react-bootstrap";
import styled from 'styled-components';


const ModalContainer = styled.div`
    
    
    min-width: 498px;
    
    .flex {
        
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        div {
            width: 50px;
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

const DeskModalComponent = ({handleClose, show}) => {
    return(
        <Modal show={show} onHide={handleClose} size="lg">
            <ModalContainer>
                <div className="line">
                    <div className="flex">
                        <div>rows</div>
                        <input></input>
                    </div>
                    <div className="flex">
                        <div>column</div>
                        <input></input>
                    </div>
                    <div className="flex">
                        <div></div>
                        <Button>생성</Button>
                    </div>
                </div>
                <div className="line">
                    <div className="display">

                    </div>
                </div>
                <div>
                    <div className="button-wrapper">
                        <Button>저장</Button>
                        <Button>취소</Button>
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