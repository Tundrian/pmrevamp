import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Accordion, Form, Card, Button, InputGroup } from 'react-bootstrap'
import { ImAttachment } from 'react-icons/im'

export function ProjectDetails() {
    const projectId = useParams().projectId
    const [projectDetails, setProjectDetails] = useState([])
    const [modules, setModules] = useState([])
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])
    const [project, setProject] = useState({})

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
    }

    async function getProject() {
        const request = await fetch(`http://localhost:5000/api/project/${projectId}`)
        const data = await request.json()
        setProject(data)
    }

    useEffect(() => {
        const fetchData = async () => {
            await getProjectDetails()
            await getProject()
        }
        fetchData().catch(console.error)
    }, [])

    return (
        <div className="min-h-screen mt-20">
            {/* Project Header */}
            <section className="mx-3">
                <h2 className="text-5xl font-light my-5 text-center">{project.name}</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{project.name}</Accordion.Header>
                        <Accordion.Body className="grid grid-cols-3">
                            {/* <p><span className="font-bold text-red-500">Name:</span> {project.name}</p> */}
                            <p><span className="font-bold text-red-500">Customer:</span> {project.customer}</p>
                            <p><span className="font-bold text-red-500">CSM Name:</span> {project.csmName}</p>
                            <p><span className="font-bold text-red-500">CSM Email:</span> {project.csmEmail}</p>
                            <p><span className="font-bold text-red-500">Client ID:</span> {project.clientId}</p>
                            <p><span className="font-bold text-red-500">SOW Attachment:</span> {project.sowAttachment}</p>
                            <p><span className="font-bold text-red-500">Go-Live Date:</span> {project.goLiveDate && new Date(project.goLiveDate).toDateString()}</p>
                            <p><span className="font-bold text-red-500">Status:</span> {project.status}</p>
                            <p><span className="font-bold text-red-500">Start Date:</span> {project.startDate && new Date(project.startDate).toDateString()}</p>
                            <p><span className="font-bold text-red-500">Auth Expiry Date:</span> {project.authExpiry && new Date(project.authExpiry).toDateString()}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>

            {/* Project Details */}
            <h2 className="text-5xl font-light my-5 text-center">Project Details</h2>

            {/* Modules Loop */}
            {modules.length && modules.map((module, i) => {
                return (
                    <Accordion key={module} defaultActiveKey="0" className="m-4">
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>{module}</Accordion.Header>
                            <div className="">

                                {/* Types Loop */}
                                {types.length && types.filter(type => type.module === module).map(type => {
                                    return (
                                        <Accordion.Body key={type.type} >
                                            <h2 className="text-4xl font-light underline border-t-2 border-l-4 pl-2">{type.type}</h2>

                                            {/* Categories Loop */}
                                            {categories.length && categories.filter(category => category.module === module && projectDetails.filter(step => step.module === module && step.category === category.category && step.type === type.type).length > 0).map(category => {
                                                return (
                                                    <div className="pl-2 border-l-4" key={category.category}>
                                                        <h3 className="text-xl font-light border-t-2 border-l-2 p-2 indent-2 ml-2">{category.category}</h3>

                                                        {/* Steps Loop */}
                                                        {projectDetails.length && projectDetails.filter(step => step.module === module && step.category === category.category && step.type === type.type).map((step) => {
                                                            return (
                                                                <Card key={step._id} className="my-3 ml-5">
                                                                    <Card.Body>

                                                                        <div className="flex flex-row justify-between">

                                                                            <Card.Title className="nowrap w-auto">{step.task}</Card.Title>

                                                                            <Form.Select aria-label="Status select" className="w-auto ml-10">
                                                                                <option value={step.status}>{step.status}</option>
                                                                                <option value="Active">Active</option>
                                                                                <option value="N/A">N/A</option>
                                                                                <option value="Complete">Complete</option>
                                                                                <option value="Waiting on client">Waiting on client</option>
                                                                            </Form.Select>

                                                                        </div>


                                                                        <Card.Text>{step.description}</Card.Text>
                                                                        <Card.Text>
                                                                            <InputGroup>
                                                                                <InputGroup.Text>Answer</InputGroup.Text>
                                                                                <Form.Control as="textarea" aria-label="With textarea" value={step.answer}/>
                                                                            </InputGroup>
                                                                        </Card.Text>
                                                                        <Card.Text>
                                                                            <InputGroup>
                                                                                <InputGroup.Text>Notes</InputGroup.Text>
                                                                                <Form.Control as="textarea" aria-label="With textarea" value={step.notes}/>
                                                                            </InputGroup>
                                                                        </Card.Text>
                                                                        
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
        </div>
    )
}