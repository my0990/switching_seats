export const arrCreate = (columns,rows) => {
    let tempArr = []
    let colArr = []
    for(let i = 0;i<rows;i++){
        colArr.push(0)
    }
    for(let i = 0;i<columns;i++){
        tempArr.push(colArr)
    }
    return(
        tempArr
    )
}

