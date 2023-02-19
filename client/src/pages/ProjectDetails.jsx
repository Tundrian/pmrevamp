import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Accordion, ListGroup } from 'react-bootstrap'

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
            <h1>Project Details</h1>
            {modules.length && modules.map((module, i) => {
                return (
                    <Accordion key={module} defaultActiveKey="0" className="my-4">
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>{module}</Accordion.Header>
                            <div className="flex">
                                {types.length && types.filter(type => type.module === module).map(type => {
                                    return (
                                        <Accordion.Body key={type.type} >
                                            <h2 className="text-4xl font-light">{type.type}</h2>
                                            {categories.length && categories.filter(category => category.module === module).map(category => {
                                                return (
                                                    <div key={category.category}>
                                                        <h2 className="text-lg font-light">{category.category}</h2>
                                                        {projectDetails.length && projectDetails.filter(step => step.module === module && step.category === category.category && step.type === type.type).map((step) => {
                                                            return (
                                                                <div key={step._id}>
                                                                    <ListGroup>
                                                                        <ListGroup.Item>{step.task}</ListGroup.Item>
                                                                        <ListGroup.Item>{step.description}</ListGroup.Item>
                                                                    </ListGroup>
                                                                </div>
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