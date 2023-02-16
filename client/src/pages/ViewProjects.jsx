import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import {ProjectDetails} from './ProjectDetails'

export function ViewProjects() {

    const [projects, setProjects] = useState([])

    async function getData(){
        const request = await fetch(`http://localhost:5000/api/project/all`)
        const data = await request.json()
        setProjects(() => data )
        console.log('data: ', projects)
    }

    return (
        
        <>
            <Button onClick={() => getData()}>Get Projects</Button>
            <h1>View Projects</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Project Name</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, i) => {
                        return(
                            
                            <tr key={project._id}>
                                <td>{i + 1}</td>
                                <td>{project.customer}</td>
                                <td><Link path={'/projectDetails'} element={<ProjectDetails projectId={project._id} />}>{project.name}</Link></td>
                            </tr>
                       
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}