import { supabase } from "@/lib/supabaseClient"

export async function fetchPublicProjects(lang: string = 'en') {
  const { data, error } = await supabase
    .from('project_public_view')
    .select('*')
    .eq('lang', lang)

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  return data
}

export async function fetchPublicProjectsGrid(lang: string = 'en', page: number = 1, pageSize: number = 10) {
  const { data, error } = await supabase
    .from('project_grid_view')
    .select('*')
    .eq('lang', lang)
    .range((page - 1) * pageSize, page * pageSize - 1)

  if (error) {
    console.error('Error fetching projects grid:', error)
    return []
  }
  return data
}