import { supabase } from "../shared/lib/supabase";
import { Project } from "./project.types";

export const getProjects = async () => {
  const { data, error } = await supabase.from("Projects").select();
  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  } else {
    return data;
  }
};

/**
 * Actualiza un proyecto por id
 * @param {string|number} id - ID del proyecto a actualizar
 * @param {object} updates - Campos a actualizar
 * @returns {Promise<object>} Proyecto actualizado o error
 */
export const updateProject = async (id: number, updates: Partial<Project>) => {
  const { data, error } = await supabase
    .from("Projects")
    .update(updates)
    .eq("id", id)
    .select()
    .single();
  if (error) {
    console.error("Error updating project:", error);
    throw error;
  }
  return data;
};

/**
 * Elimina un proyecto por id
 * @param {string|number} id - ID del proyecto a eliminar
 * @returns {Promise<void>} Lanza error si falla
 */
export const deleteProject = async (id: number) => {
  const { error } = await supabase.from("Projects").delete().eq("id", id);
  if (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};
