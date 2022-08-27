// code your solution here

function superbowlWin(record){
    let result = record.find(i=>i.result == "W")

    if(result){
        return result.year
    }else{
        return result
    }

}