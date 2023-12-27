type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

/*
<Oscar>
        <Heading>Oscar goes to dicpario!</Heading>
      </Oscar>
*/
