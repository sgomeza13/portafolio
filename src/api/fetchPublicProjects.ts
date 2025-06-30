import { supabase } from "@/lib/supabaseClient";

export interface ProjectItem {
  project_id: string;
  name: string;
  video_url: string;
  reference_urls: string[];
  image_urls: string[];
  extended_description: string;
  tags: {
    id: string;
    code: string;
    label: string;
  }[];
}

export async function fetchPublicProjects(lang: string = "en", id: string) {
  const { data, error } = await supabase
    .from("project_public_view")
    .select("*")
    .eq("project_id", id)
    .eq("lang", lang)
    .single();

  if (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
  return data as ProjectItem;
}

export async function fetchPublicProjectsGrid(
  lang: string = "en",
  page: number = 1,
  pageSize: number = 10
) {
  const { data, error } = await supabase
    .from("project_grid_view")
    .select("*")
    .eq("lang", lang)
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) {
    console.error("Error fetching projects grid:", error);
    return [];
  }
  return data;
}
