import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'

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

    return (
        <>
            <div className="w-full">
                <Card className="mt-3 p-3 shadow-lg" >

                    <h1 className="text-4xl mb-3 text-center">Steps</h1>
                    <ul>
                        {TYPES.length && TYPES.map(type =>
                            <li key={type.id} className="border mb-4 p-2 shadow-sm rounded-lg">
                                <h2 className="text-2xl indend-5 text-blue-700 text-center border-b border-b-slate-300 pb-2 mb-3">
                                    <span className="uppercase">{type.name[0]}</span>
                                    {type.name.slice(1)}
                                </h2>

                                {/* <h3 className="text-xl indent-10">Topics</h3> */}
                                <ul className="w-11/12">
                                    {topics.length && topics.filter(topic => topic.typeName === type.name).sort((a, b) => a.topicOrder - b.topicOrder).map(topic =>
                                        <li key={topic.id} className="mb-4">
                                            <h4 className="text-slate-500 text-2xl"><span>{topic.topicOrder}. </span>{topic.name}</h4>
                                            <Table striped className="indent-10">
                                                <thead>
                                                    <tr className="text-gray-400">
                                                        <th>#</th>
                                                        <th>Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {steps.length && steps.filter(step => step.topicID === topic.id).sort((a, b) => a.orderNumber - b.orderNumber).map(step =>
                                                        <tr>
                                                            <td>{step.orderNumber}.</td>
                                                            <td>{step.name}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </Table>
                                        </li>
                                    )}
                                </ul>

                            </li>
                        )}
                    </ul>
                </Card>
            </div>
        </>
    )
}
/*
    moduleID | typeID | topicID | stepID | topicNum | stepNum

    typeID: enum
    
*/
