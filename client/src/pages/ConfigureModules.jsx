import { useState, useEffect, useRef } from 'react'
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
    const uniqueTypes = useRef([])
    const uniqueCategories = useRef([])
    const stepsList = useRef([])
    
    let options = [
        'Company Configuration',
        'Admin',
        'External Authorization',
    ]

    function submitForm() {
        console.log(fields)
        testData.push(fields)
        options.push(fields.category)
        updateList(fields.module)
    }

    useEffect(() => {
        updateList('Company')
    }, [])

    async function updateList(module){
        setFields({ ...fields, module: module })
        stepsList.current = testData.filter(step => step.module === module)
        uniqueTypes.current = Array.from(new Set(stepsList.current.map(step => step.type)))
        uniqueCategories.current = [...stepsList.current.reduce((step, {type, category}) => {
            return(step.set(`${type}-${category}`, { type, category }))
        }, new Map()).values()]

        console.log(uniqueCategories)
    }

    return (
        <>
            <Card className="m-3">
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Module</Form.Label>
                            <Form.Select
                                value={fields.module}
                                onChange={(e) => updateList(e.target.value)}
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
                    {uniqueTypes.current.length !== 0 && uniqueTypes.current.map(type => (
                        <Card key={type} className="m-3">
                            <Card.Header>{type}</Card.Header>
                            <Card.Body>
                                {uniqueCategories.current.length !== 0 && uniqueCategories.current.filter(category => category.type === type).map(category => (
                                    <Card key={category.category} className="m-3">
                                        <Card.Header>{category.category}</Card.Header>
                                        <Card.Body>
                                            <ul>
                                            {stepsList.current.filter(step => step.category === category.category && step.type === type).map(step => {
                                                return (
                                                    <li key={step.id}>{step.name}</li>
                                                )
                                            })}
                                            </ul>
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