import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const endpoint = "https://slately.herokuapp.com";

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${endpoint}/api/projects`);
      setProjects(res.data);
    }
    fetchData();
  }, [])

  console.log(projects);
  return (
    <div>
      {projects.map(project => {
        return <p key={project.id}><Link to={`/project/${project.id}`}>{project.name}</Link></p>
      })}
    </div>
  )
}

export default Projects;