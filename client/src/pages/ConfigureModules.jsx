import { useState, useEffect } from 'react'
import { modules } from '../lists/modules'
import { implementationTypes } from '../lists/implementationTypes'
import { Card, Form, Button } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'

let testData = [
    {
        id: '1',
        name: 'Grant Access',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, nemo!',
        module: 'Company',
        type: 'Configuration',
        category: 'External Authorization',
        notes: '',
        answer: '',
        link: '',
        status: '',
        attachment: '',
    },
    {
        id: '2',
        name: 'Set up Admin Role',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, nemo!',
        module: 'Company',
        type: 'Configuration',
        category: 'External Authorization',
        notes: '',
        answer: '',
        link: '',
        status: '',
        attachment: '',
    },
    {
        id: '3',
        name: 'Import COA',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, nemo!',
        module: 'General Ledger',
        type: 'Import',
        category: 'Setup Import',
        notes: '',
        answer: '',
        link: '',
        status: '',
        attachment: '',
    },
    {
        id: '4',
        name: 'Setup entities',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, nemo!',
        module: 'Company',
        type: 'Configuration',
        category: 'Entities',
        notes: '',
        answer: '',
        link: '',
        status: '',
        attachment: '',
    },
]

export function ConfigureModules() {
    const [fields, setFields] = useState({
        module: '',
        type: '',
        category: '',
        name: '',
        description: '',
        // notes: '',
        // status: '',
        // instructionsLink: '',
        // attachments: '',
        // step: null,
        // answer: '',
    })
    const [uniqueTypes, setUniqueTypes] = useState([])
    const [uniqueCategories, setUniqueCategories] = useState([])
    const [stepsList, setStepsList] = useState([])

    let options = [
        'Company Configuration',
        'Admin',
        'External Authorization',
    ]

    // let stepsList = testData.filter(step => step.module === fields.module)
    let types = new Set([...stepsList])

    function submitForm() {
        console.log(fields)
    }

    // async function moduleChange(e){
    //     setFields({...fields, module: e.target.value})
    //     setStepsList(testData.filter(step => step.module === fields.module))
    //     setUniqueTypes(Array.from(new Set(stepsList. map(step => step.type))))
    //     setUniqueCategories(Array.from(new Set(stepsList.map(step => step.category))))
    //     console.log(fields, stepsList, uniqueTypes, uniqueCategories)
    // }

    useEffect(() => {
        // setFields({...fields, module: e.target.value})
        setStepsList(testData.filter(step => step.module === fields.module))
        setUniqueTypes(Array.from(new Set(stepsList.map(step => step.type))))
        setUniqueCategories(Array.from(new Set(stepsList.map(step => step.category))))
        console.log('fields: ', fields, ' | stepsList: ', stepsList, ' | uniqueTypes: ', uniqueTypes, ' | uniqueCategories: ', uniqueCategories)
    }, [fields.module])

    useEffect(() => {
        setStepsList([])
    }, [])
    /*
        then while iterating through unique categories / types, filter a list of steps to match and iterate through
    */
    return (
        <>
            <Card className="m-3">
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Module</Form.Label>
                            <Form.Select
                                value={fields.module}
                                onChange={(e) => setFields({ ...fields, module: e.target.value })}
                            // onChange={moduleChange}
                            >
                                {modules.map(module => (<option key={module}>{module}</option>))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Implenetation Type</Form.Label>
                            <Form.Select value={fields.type} onChange={(e) => setFields({ ...fields, type: e.target.value })}>
                                {implementationTypes.map(implementationType => (<option key={implementationType}>{implementationType}</option>))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Typeahead
                                id="select-category"
                                onChange={(selected) => {
                                    setFields({ ...fields, category: selected[0] })
                                }}
                                options={options}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                placeholder="Instruction name"
                                aria-label="Instruction name"
                                onChange={(e) => setFields({ ...fields, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setFields({ ...fields, dsecription: e.target.value })} />
                        </Form.Group>
                    </Form>
                </Card.Body>

                <Card.Footer>
                    <Button onClick={() => submitForm()}>Submit</Button>
                </Card.Footer>
            </Card>

            <Card className="m-3">
                <Card.Header>Existing Steps</Card.Header>
                <Card.Body>
                    {uniqueTypes.length !== 0 && uniqueTypes.map(type => (
                        <Card key={type} className="m-3">
                            <Card.Header>{type}</Card.Header>
                            <Card.Body>
                                {uniqueCategories.length !== 0 && uniqueCategories.map(category => (
                                    <Card key={category} className="m-3">
                                        <Card.Header>{category}</Card.Header>
                                        <Card.Body>
                                            {stepsList.filter(step => step.category === category && step.type === type).map(step => {
                                                (
                                                    <li key={step.id}>{step.name}</li>
                                                )
                                            })}
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Card.Body>
                        </Card>
                    ))}
                </Card.Body>
            </Card>
        </>
    )
}