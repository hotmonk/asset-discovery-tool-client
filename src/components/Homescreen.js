import {React, useEffect, useState } from 'react';
import TableComponent from './TableComponent';
import styled from 'styled-components'

const TableContainer = styled.div`
    margin-top: 50px;
    width: 1000px;
`
const PageContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

function HomeScreen(){
    const [data, setdata] = useState({});

    const setData=(()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8000', requestOptions)
            .then(response => response.json())
            .then(data => setdata(data));
    })

    useEffect(() => {
        setInterval(function(){ setData() }, 10000);
    }, []);

    return (
        <PageContainer>
            <TableContainer>
                <TableComponent tableData={data}/>
            </TableContainer>
        </PageContainer>

    )
}

export default HomeScreen;