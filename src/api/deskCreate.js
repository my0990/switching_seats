var _ = require('loadsh');

export const arrCreate = (columns,rows) => {
    let arr = []
    let colArr = []
    
    
    for(let i = 0;i<rows;i++){
        colArr.push(_.cloneDeep({toggle: true}))
    }
    for(let i = 0;i<columns;i++){
        arr.push(_.cloneDeep(colArr))
    }

    return(
        arr
    )
}


