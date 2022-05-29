import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import DeskModalComponent from "./DeskModalComponent";
import DeskUnitComponent from "./common/DeskUnitComponent";
import { useEffect } from "react";


const DeskContainer = styled.div`
    .label {
        margin: 2rem;
        height: 2vh;
        text-align: center;
    }
    position: absolute;
    top: 0;
    width: 100%;
    .DeskDisplay {
        // background: gray;/
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        td{
            padding: 5px;
        }
        overflow: hidden;
        
    }
    .DeskCreateWrapper {
        text-align: center;
        
        button {
            font-size: 2rem;
            border-radius: 10px;
            margin-top: 2vh;
            cursor: pointer;
        }
    }
`

const DeskComponent = ({scroll, desksArr, setDesksArr, studentsArr, setStudentsArr}) => {
    const [show, setShow] = useState(false);

    // 책상 배열 생성창 열기
    const handleShow = () => {
        scroll(false); //스크롤 막기
        setShow(true);
    }   

    // 책상 배열 생성창 닫기
    const handleClose = () => {
        scroll(true); //스크롤 허용
        setShow(false);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <DeskContainer>
            <div className="label">
                <h1>책상 배치</h1>
            </div>
            <div className="DeskDisplay">
                <table>
                    <tbody>
                    {desksArr.map((a,i)=>{
                        return(
                            <tr>
                                {desksArr[i].map((a,j)=>{
                                    return(
                                        <td>
                                            <DeskUnitComponent closed={!a.toggle} large />
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="DeskCreateWrapper">
                <Button variant="primary" onClick={handleShow}>
                    새로운 배열 생성하기
                </Button>
                <DeskModalComponent 
                    show={show} 
                    handleClose={handleClose} 
                    setDesksArr={setDesksArr} 
                    desksArr={desksArr}
                    studentsArr={studentsArr}
                    setStudentsArr={setStudentsArr}
                />
            </div>
        </DeskContainer>
    )
}

export default DeskComponent;