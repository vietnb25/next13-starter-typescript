'use client'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

interface IProps {
    blogs: IBlog[]
}
const TableContent = (props: IProps) => {
    const { blogs } = props;
    console.log("check: ", blogs);

    return (
        <>
            <div
                className='mb-3'
                style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Blogs</h3>
                <Button variant='secondary'>ADD NEW</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => {
                        return (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td >
                                    <Button variant="primary">VIEW </Button>
                                    <Button variant="warning" className='mx-3'>EDIT</Button>
                                    <Button variant="danger">DELETE</Button>
                                </td>



                            </tr>)
                    })}


                </tbody>
            </Table>
        </>
    );
}

export default TableContent;