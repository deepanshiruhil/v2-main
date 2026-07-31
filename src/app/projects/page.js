import Link from "../components/Link";
import ProjectSearch from "../components/ProjectSearch";

export default function Projects() {
  return (
    <>
      <ProjectSearch />
      <p>
        You can find the rest of my projects{" "}
        <Link href="https://github.com/deepanshiruhil?tab=repositories">
          here
        </Link>
        .
      </p>
    </>
  );
}