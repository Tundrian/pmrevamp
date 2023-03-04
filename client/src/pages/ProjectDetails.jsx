import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Accordion, Form, Card, Button } from 'react-bootstrap'
import {ImAttachment} from 'react-icons/im'

export function ProjectDetails() {
    const projectId = useParams().projectId
    const [projectDetails, setProjectDetails] = useState([])
    const [modules, setModules] = useState([])
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])

    async function getProjectDetails() {
        const request = await fetch(`http://localhost:5000/api/projectStep/all/${projectId}`)
        const data = await request.json()
        setProjectDetails(data)

        setModules(Array.from(new Set(data.map(x => x.module))))
        setTypes([...new Set(data.map(x => {
            return {
                ['module']: x.module,
                ['type']: x.type
            }
        }).map(y => JSON.stringify(y)))].map(s => JSON.parse(s)))
        setCategories([...new Set(data.map(x => {
            return {
                ['module']: x.module,
                ['category']: x.category
            }
        }).map(y => JSON.stringify(y)))].map(s => JSON.parse(s)))
        console.log(projectDetails)
    }

    useEffect(() => {
        const fetchData = async () => {
            await getProjectDetails()
        }
        fetchData().catch(console.error)
    }, [])

    return (
        <>
            <h1 className="text-5xl font-light my-5 text-center">Project Details</h1>
            {modules.length && modules.map((module, i) => {
                return (
                    <Accordion key={module} defaultActiveKey="0" className="m-4">
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>{module}</Accordion.Header>
                            <div className="flex">
                                {types.length && types.filter(type => type.module === module).map(type => {
                                    return (
                                        <Accordion.Body key={type.type} >
                                            <h2 className="text-4xl font-light underline border-t-2 border-l-4 pl-2">{type.type}</h2>
                                            {categories.length && categories.filter(category => category.module === module && projectDetails.filter(step => step.module === module && step.category === category.category && step.type === type.type).length > 0).map(category => {
                                                return (
                                                    <div className="pl-2 border-l-4" key={category.category}>
                                                        <h3 className="text-xl font-light border-t-2 border-l-2 p-2 indent-2 ml-2">{category.category}</h3>
                                                        {projectDetails.length && projectDetails.filter(step => step.module === module && step.category === category.category && step.type === type.type).map((step) => {
                                                            return (
                                                                <Card key={step._id} className="my-3 ml-5">
                                                                    <Card.Body>
                                                                        
                                                                        <div className="flex flex-row justify-between">
                                                                        
                                                                            <Card.Title className="nowrap w-auto">{step.task}</Card.Title>
                                                                        
                                                                            <Form.Select aria-label="Status select" className="w-auto ml-10">
                                                                                <option  value={step.status}>{step.status}</option>
                                                                                <option value="Active">Active</option>
                                                                                <option value="N/A">N/A</option>
                                                                                <option value="Complete">Complete</option>
                                                                                <option value="Waiting on client">Waiting on client</option>
                                                                            </Form.Select>
                                                                        
                                                                        </div>
                                                                        
                                                                        <Card.Text>{step.description}</Card.Text>
                                                                        <Card.Text>{step.notes}</Card.Text>
                                                                        <Card.Link href={step.linkToDocs}>
                                                                            <Button variant="primary" size="md">
                                                                                <ImAttachment />
                                                                            </Button>
                                                                        </Card.Link>
                                                                    </Card.Body>
                                                                </Card>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </Accordion.Body>
                                    )
                                })}
                            </div>
                        </Accordion.Item>
                    </Accordion>
                )
            })}
        </>
    )
}