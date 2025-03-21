import Para from "./para";
import Badge from "./badge";
import Highlight from "./highlight";
import Heading from "./heading";
import OuterLink from "./outer-link";
import { ArrowRight } from "lucide-react";

function Project({
  name,
  github,
  githubLink,
  deployment,
  deployedLink,
  description,
  technologies,
  year,
}: {
  name: string;
  github: string;
  githubLink: string;
  deployment: string;
  deployedLink: string;
  description: { text: string; highlight?: boolean }[][];
  technologies: {
    id: number;
    name: string;
  }[];
  year: string;
}) {
  return (
    <div className="flex flex-col gap-2 sm:border sm:p-4 sm:rounded">
      <div className="flex justify-between items-center">
        <Heading className="text-xl">{name}</Heading>
        <Para className="!leading-normal">{year}</Para>
      </div>
      <OuterLink to={deployedLink}>{deployment}</OuterLink>
      <OuterLink to={githubLink}>{github}</OuterLink>
      <div className="flex flex-wrap gap-2 pt-2 pb-1">
        {technologies.map((technology) => (
          <Badge key={technology.id} id={technology.id}>
            {technology.name}
          </Badge>
        ))}
      </div>
      {description.map((item, index) => (
        <Para className=" flex gap-2 items-center" key={index}>
          <ArrowRight className="size-4" />
          <div>
            {item.map((segment, i) =>
              segment.highlight ? (
                <Highlight key={i}>{segment.text}</Highlight>
              ) : (
                segment.text
              )
            )}
          </div>
        </Para>
      ))}
    </div>
  );
}

export default Project;
