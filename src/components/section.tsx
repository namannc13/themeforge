import Heading from "./heading";

function Section({
  header = "",
  children,
}: {
  header?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 py-4">
      <Heading>{header}</Heading>
      {children}
    </div>
  );
}

export default Section;
