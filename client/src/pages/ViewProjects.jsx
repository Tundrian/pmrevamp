import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
export function ViewProjects() {

    async function getData(){
        const request = await fetch(`http://localhost:5000/api/step`)
        const data = await request.json()
        console.log('data: ', data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1>View Projects</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}