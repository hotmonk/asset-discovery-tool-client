import React from 'react';
import {Table} from 'react-bootstrap';

function TableComponent({tableData}){

    const rows=Object.keys(tableData).map((x)=>{
                return <tr>
                    <td>{x}</td>
                    <td>{x.mac_address}</td>
                    <td>{x.os}</td>
                </tr>
            })
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>IP Address</th>
                    <th>MAC Address</th>
                    <th>Operating System</th>
                    <th>Last Seen</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </>
    )
}

export default TableComponent;