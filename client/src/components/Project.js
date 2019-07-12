import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Project = (props) => {
  const [project, setProject] = useState({});
  const { id } = props.match.params;

  const endpoint = "https://slately.herokuapp.com";

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${endpoint}/api/projects/${id}`);
      setProject(res.data);
    }
    fetchData();
  }, [])

  if(Object.keys(project).length === 0) {
    return <p>Loading...</p>
  }
  
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul>
      {project.actions.map(action => {
        return <li key={action.id}>{action.description}</li>
      })}
      </ul>
    </div>
  )
}

export default Project;