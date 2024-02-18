import React from "react";
import './Projects.css';
import { useState } from "react";

export default function Projects(){

    const [showModal, setShowModal] = useState(null); // State variable to manage which modal is open

  // Function to open modal for a specific project
  const openModal = (projectId) => {
    setShowModal(projectId);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(null);
  };

  // Sample project data
  const projects = [
    { id: 1, name: 'StructuralAssistant', description: 'Description of Project 1' },
    { id: 2, name: 'HobbyHouse', description: 'Description of Project 2' }
    // Add more project data as needed
  ];

  return (
    <div className="project-showcase">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={`project${project.id}.jpg`} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <button onClick={() => openModal(project.id)}>View Details</button>
        </div>
      ))}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{projects.find((project) => project.id === showModal).name}</h2>
            <p>{projects.find((project) => project.id === showModal).description}</p>
            {/* Additional details for the modal */}
          </div>
        </div>
      )}
    </div>
  );
}