import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import School from './pages/school ';
import Skill from './pages/skill';
import About from './pages/About';
import Me from './pages/me';
import Project from './pages/project';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  let [education, setEducation] = useState([]);
  let [skill, setSkill] = useState([]);
  let [project, setProject] = useState([]);
  useEffect(() => {
    let get = async () => {
      try {
        let response = await axios.get(
          'https://raw.githubusercontent.com/minseo1209/JSON/main/Me.json'
        );
        let data = response.data;
        let education = data.학력 || [];
        let skill = data.기술 || [];
        let project = data.프로젝트 || [];
        setEducation(education);
        setSkill(skill);
        setProject(project);
      } catch (error) {
        console.log('에러:', error);
      }
    };
    get();
  }, []);
  let scrollToMain = () => {
    document.getElementById('Main').scrollIntoView({
      behavior: 'smooth',
    });
  };

  let scrollToAbout = () => {
    document.getElementById('About').scrollIntoView({
      behavior: 'smooth',
    });
  };

  let scrollToSkill = () => {
    document.getElementById('Skill').scrollIntoView({
      behavior: 'smooth',
    });
  };

  let scrollToProject = () => {
    document.getElementById('project').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="App" id="Main">
      <Navigation
        scrollToAbout={scrollToAbout}
        scrollToProject={scrollToProject}
        scrollToSkill={scrollToSkill}
        scrollToMain={scrollToMain}
      />
      <div class="container">
        <About />
        <div className="About">
          <h4 className="Title">학력</h4>
          <School education={education} />
          <h4 className="Title" id="Skill">
            기술
          </h4>
          <Skill skill={skill} />
          <h4 className="Title" id="project">
            프로젝트
          </h4>
          <Project project={project} />
          <h4 className="Title" id="About">
            소개
          </h4>
          <Me />
        </div>
      </div>
    </div>
  );
}

function Navigation({
  scrollToAbout,
  scrollToSkill,
  scrollToProject,
  scrollToMain,
}) {
  return (
    <Navbar bg="primary" data-bs-theme="dark" fixed="top" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={scrollToMain}>
          Kim Min Seo
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" onClick={scrollToMain}>
            Main
          </Nav.Link>
          <Nav.Link as={Link} to="#Skill" onClick={scrollToSkill}>
            Skill
          </Nav.Link>
          <Nav.Link as={Link} to="#project" onClick={scrollToProject}>
            Project
          </Nav.Link>
          <Nav.Link as={Link} to="#About" onClick={scrollToAbout}>
            About Me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
