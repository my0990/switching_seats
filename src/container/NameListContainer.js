import NameListComponent from "../components/NameListComponent"
import { useState } from "react";
import { useEffect } from "react";

import { getStudentsArr } from '../api/nameListapi';
import { addStudentName } from '../api/nameListapi';

const NameListContainer = () => {
    const [studentsArr,setStudentsArr] = useState([{name: "강지현"}, {name: "이재철"}]); 

    //최초 이름 명단 가져오기
    useEffect(()=>{
        getStudentsArr({setStudentsArr: setStudentsArr})
    },[])
    return(
        <NameListComponent studentsArr={studentsArr}/>
    )
}

export default NameListContainer;