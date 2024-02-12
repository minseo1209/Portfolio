import React from 'react';
import { Table } from 'react-bootstrap';

function School(props) {
  let education = props.education;

  return (
    <div className="Table">
      <Table striped bordered hover variant="white">
        <thead>
          <tr>
            <th>이름</th>
            <th>세부</th>
            <th>기간</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {education.map((i) => (
            <tr>
              <td>{i.이름}</td>
              <td>{i.세부}</td>
              <td>{i.기간}</td>
              <td>{i.비고}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default School;
