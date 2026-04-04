import { supabase } from "../shared/lib/supabase";

export const getProjects = async () => {
  const { data, error } = await supabase.from("Projects").select();
  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  } else {
    return data;
  }
};
