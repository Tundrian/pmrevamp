

export function StepList({ steps, topics }) {

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
    const TYPES = [
        {
            id: "1",
            name: "configuration",
        },
        {
            id: "2",
            name: "import",
        },
        {
            id: "3",
            name: "training",
        },
    ] 
    console.log('steps: ', steps)
    console.log('topics: ', topics)

    return (
        <>
            <div>
                <h1 className="text-4xl">Types</h1>
                <ul>
                    {TYPES.length && TYPES.map(type =>
                        <li key={type.id}>
                            <h2 className="text-2xl indend-5">{type.name}</h2>

                            <h3 className="text-xl indent-10">Topics</h3>
                            <ul className="indent-16">
                                {topics.length && topics.filter(topic => topic.typeName === type.name).map(topic =>
                                    <li key={topic.id}>
                                        <h4><span>{topic.topicOrder}. </span>{topic.name}</h4>
                                        <ul className="indent-24">
                                            {steps.length && steps.filter(step => step.topicID === topic.id).map(step =>
                                                <li key={step.id}><span>{step.orderNumber}. </span>{step.name}</li>
                                            )}
                                        </ul>
                                    </li>
                                )}
                            </ul>

                        </li>
                    )}
                    <li>
                        <h2 className="text-2xl indend-5">Import</h2>
                        <h3 className="text-xl indent-10">Topics</h3>
                        <ul className="indent-16">
                            <li><span>1. </span>Users</li>
                            <li><span>2. </span>Chart of Accounts </li>
                        </ul>
                    </li>

                </ul>


            </div>
        </>
    )
}
/*
    moduleID | typeID | topicID | stepID | topicNum | stepNum

    typeID: enum
    
*/
