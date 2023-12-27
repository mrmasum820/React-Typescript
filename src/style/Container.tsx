type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Container styles</div>;
};

/*
<Container
        styles={{
          border: "1px solid red",
          padding: "1 rem",
          display: "inline",
        }}
      />
*/
