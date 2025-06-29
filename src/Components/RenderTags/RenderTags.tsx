import { Chip } from "../CustomUI/Chip/Chip";
interface Tag {
  label: string;
  code: string;
  id: string;
}
export function RenderTags({tags}: { tags: Tag[] }) {
    return (
        <>
            {tags.map((tag, project_idx) => (
                <Chip key={project_idx} tag={tag?.label} color="primary" />
            ))}
        </>
    )
}