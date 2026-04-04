import { useState } from "react";
import useProjects from "../../hooks/useProjects";
import ProjectEditPanel from "./ProjectEditPanel";

function Admin() {
  const { projects, updateProject } = useProjects();
  const [editingProject, setEditingProject] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleAddProject = () => {
    // Lógica para agregar proyecto
  };

  const handleEditProject = (id) => {
    const project = projects.find((p) => p.id === id);
    setEditingProject(project);
  };

  const handleDeleteProject = (id) => {
    // Lógica para eliminar proyecto
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
  };

  const handleSaveEdit = async (formData) => {
    setSaving(true);
    await updateProject(editingProject.id, formData);
    setSaving(false);
    setEditingProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-primary-400 py-10">
      <div className="bg-primary-600 rounded shadow-lg p-8 w-full max-w-2xl flex flex-col gap-6">
        <h1 className="text-primary-100 text-2xl font-bold text-center mb-4">Panel de administración de proyectos</h1>
        <button
          onClick={handleAddProject}
          className="bg-secondary-base text-primary-400 font-semibold py-2 px-4 rounded hover:bg-secondary-200 transition-colors self-end mb-4"
        >
          Agregar proyecto
        </button>

        {editingProject ? (
          <ProjectEditPanel
            project={editingProject}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
            saving={saving}
          />
        ) : (
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <li key={project.id} className="bg-primary-400 rounded p-4 flex justify-between items-center">
                <span className="text-primary-100">{project.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditProject(project.id)}
                    className="bg-secondary-base text-primary-400 px-3 py-1 rounded hover:bg-secondary-200 transition-colors"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="bg-error text-primary-100 px-3 py-1 rounded hover:bg-error/80 transition-colors"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Admin
