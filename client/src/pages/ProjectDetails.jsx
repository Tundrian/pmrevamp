import {useParams} from 'react-router-dom'
import {useState} from 'react'

export function ProjectDetails(){
    const projectId = useParams().projectId
    const [projectDetails, setProjectDetails] = useState({})

    async function getProjectDetails(){
        const request = await fetch(`http://localhost:5000/api/projectStep/all/${projectId}`)
        const data = await request.json()
        // setProjectDetails(data)
        console.log(projectId, data)
    }

    getProjectDetails()
    return(
        <>
            <h1>Project Details</h1>
        </>
    )
}