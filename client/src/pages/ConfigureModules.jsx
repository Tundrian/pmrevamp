import { useState, useRef } from 'react'
import { modules } from '../lists/modules'
import { implementationTypes } from '../lists/implementationTypes'
import { Card, Form, Button } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'

export function ConfigureModules() {
    const [fields, setFields] = useState({
        stepOrder: null,
        module: '',
        type: '',
        category: '',
        task: '',
        description: '',
        linkToDocs: '',
        answer: '',
        notes: '',
        status: '',
    })
    const [dbData, setDbData] = useState([])

    const uniqueTypes = useRef([])
    const uniqueCategories = useRef([])
    const stepsList = useRef([])
    
    const options = [
        '',
        'Company Configuration',
        'Admin',
        'External Authorization',
    ]

    async function submitForm() {
        await pushData()
        await getData()
        await updateList(fields.module)
    }

    async function getData(){
        const request = await fetch(`http://localhost:5000/api/step`)
        const data = await request.json()
        setDbData(data)
    }

    async function pushData(){
        await fetch(`http://localhost:5000/api/step`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(fields)
        })
    }

    async function updateList(module){

        setFields({...fields, module: module})
        
        stepsList.current = dbData.filter(step => step.module === module)

        uniqueTypes.current = Array.from(new Set(stepsList.current.map(step => step.type)))

        uniqueCategories.current = [...stepsList.current.reduce((step, {type, category}) => {

            return(step.set(`${type}-${category}`, { type, category }))

        }, new Map()).values()]

    }

    return (
        <div className="m-4">
            <Button  onClick={() => getData()}>Get Data</Button>
            <Card className="m-3">
                <Card.Body>
                    <Form>
                    <Form.Group className="mb-3">
                            <Form.Label>Step Order</Form.Label>
                            <Form.Control
                                placeholder="1"
                                aria-label="Step Order"
                                onChange={(e) => setFields({ ...fields, stepOrder: e.target.value })}
                            />
                        </Form.Group>
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
                            <Form.Label>Implemetation Type</Form.Label>
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
                                onChange={(e) => setFields({ ...fields, task: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setFields({ ...fields, description: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Link to Attachments</Form.Label>
                            <Form.Control
                                placeholder="https://www.website.com..."
                                aria-label="Link to instructions"
                                onChange={(e) => setFields({ ...fields, linkToDocs: e.target.value })}
                                
                            />
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
                                                    <li key={step._id}>{step.task}</li>
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
        </div>
    )
}