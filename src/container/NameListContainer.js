import NameListComponent from "../components/NameListComponent"
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { studentsArr, desksArr } from "../modules/arr";


const NameListContainer = () => {
    const [arr,setStudentsArr] = useState([{name: "강지현"}, {name: "이재철"}]); 
    const tempArr = useSelector(state => state.arr.studentsArr);
    const dispatch = useDispatch();
   
    
    //최초 이름 명단 가져오기
    useEffect(()=>{
        if(tempArr != undefined){
        setStudentsArr([...tempArr])
        }
    },tempArr);
    
    //학생 이름 추가하기
    const addStudentName = (name) => {
        let id = localStorage.getItem('id');
        localStorage.setItem('id',JSON.stringify(id++));
        setStudentsArr([...tempArr, {name: name, id: id }])
        dispatch(studentsArr([...tempArr, {name: name, id: id }]))
        localStorage.setItem("studentsArr",JSON.stringify([...tempArr, {name: name, id: id }]))
    }
    // useEffect(()=>{

        
    //     if(tempArr ===null){
    //         setStudentsArr([{name:"강지현"}])
    //         localStorage.setItem('studentsArr',JSON.parse([{name:"강지현"}]))
    //         console.log('test')
    //     } else {
    //         setStudentsArr([...tempArr])
    //     }
    //     console.log('test')
    // },[])
    return(
        <NameListComponent studentsArr={arr} addStudentName={addStudentName}/>
    )
}

export default NameListContainer;