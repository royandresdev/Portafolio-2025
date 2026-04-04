import { useEffect, useState } from "react";
import {
  getProjects,
  updateProject as updateProjectService,
  deleteProject as deleteProjectService,
} from "../services/projects.service";
import { Project } from "services/project.types";

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(Array.isArray(projectsData) ? projectsData : []);
      } catch (error) {
        setProjects([]);
      }
    };
    fetchProjects();
  }, []);

  // Actualiza un proyecto y sincroniza el estado local
  const updateProject = async (id: number, updates: any) => {
    const updated = await updateProjectService(id, updates);
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, ...updated } : project,
      ),
    );
    return updated;
  };

  // Elimina un proyecto y sincroniza el estado local
  const deleteProject = async (id: number) => {
    await deleteProjectService(id);
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return { projects, updateProject, deleteProject };
};

export default useProjects;
