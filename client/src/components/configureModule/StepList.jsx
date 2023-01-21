

export function StepList({steps, topics}){

    /* 
        display list of steps
        split steps into types
        then sort in types by number
        then display component cards in those groups sorted
        so pass in the sorted steps, after splitting them by type

        1. get a set of unique types from data array
        2. each element in array is an array of objects
        3. add each step (obj) to each corresponding array
        4. Sort each unique array by step number
        5. pass each sorted unique array into a component card to display in a list on cards

    */

    // let categories = new Set([...data.type])
    console.log('data: ', data.map(x => x.topic) )

    return (
        <>
        
        </>
    )
}
/*
    moduleID | typeID | topicID | stepID | topicNum | stepNum

    typeID: enum
    
*/
