import { useEffect, useState } from "react";
import { getProjects } from "../services/projects.service";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

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

  return { projects };
};

export default useProjects;
