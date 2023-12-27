type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};

/*
<Heading>React TypeScript Children</Heading>
*/
