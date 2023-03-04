import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export function ViewProjects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await fetch(`http://localhost:5000/api/project/all`)
            const data = await request.json()
            setProjects(() => data )
        }
        fetchData().catch(console.error)
    }, [])


    return (
        
        <div className="p-4 min-h-screen bg-slate-100">
            <div className="mb-3 bg-slate-800 px-3 py-2 rounded drop-shadow-md">
                <h1 className="drop-shadow-lg text-gray-200">View Projects</h1>
            </div>
            
            <Table striped bordered hover className="">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Project Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, i) => {
                        return(
                            
                            <tr key={project._id}>
                                <td>{i + 1}</td>
                                <td>{project.customer}</td>
                                <td><Link to={`/projectDetails/${project._id}`}>{project.name}</Link></td>
                                <td>{project.status}</td>
                            </tr>
                       
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}