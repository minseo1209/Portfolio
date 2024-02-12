import React from 'react';
import { Table } from 'react-bootstrap';

function Skill(props) {
  let stack = props.skill;
  return (
    <div className="Table">
      <Table striped bordered hover variant="white">
        <thead>
          <tr>
            <th>이름</th>
            <th>-</th>
            <th>사용경험</th>
          </tr>
        </thead>
        <tbody>
          {stack.map((i) => (
            <tr>
              <td>{i.이름}</td>
              <td>
                <img src={i.이미지} alt={i.이름}></img>
              </td>
              <td>{i.사용경험}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Skill;
