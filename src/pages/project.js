import React from 'react';
import { Table } from 'react-bootstrap';

function Project(props) {
  let project = props.project;

  return (
    <div className="Table">
      <p>프로젝트는 개발한 순으로 정렬되어 있습니다</p>
      <Table striped bordered hover variant="white">
        <thead>
          <tr>
            <th>이름</th>
            <th>세부</th>
            <th>기간</th>
          </tr>
        </thead>
        <tbody>
          {project.map((i) => (
            <tr>
              <td>
                <a href={i.주소}>{i.이름}</a>
              </td>
              <td>{i.소개}</td>
              <td>{i.기간}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Project;
