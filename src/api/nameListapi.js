//맨처음 학생 명단 localstorage에서 가져오기

export const getStudentsArr = ({setStudentsArr}) => {
    let tempArr = JSON.parse(localStorage.getItem('studentsArr'));
    if(tempArr ===null){
        setStudentsArr([{name:"강지현"}])
        localStorage.setItem('studentsArr',JSON.parse([{name:"강지현"}]))
        console.log('test')
    } else {
        setStudentsArr([...tempArr])
    }
    console.log('test')
}

//명단에 학생 이름 추가하기

export const addStudentName = ({name, studentsArr, setStudentsArr, id, setId}) => {
    setStudentsArr([...studentsArr, {name: name}])
}

