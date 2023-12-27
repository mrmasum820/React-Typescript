type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello ${props.name} you have ${messageCount} unread messages`
          : "Welcome guest"}
      </h2>
    </div>
  );
};

export default Greet;

/*
<Greet name="MR Masum" messageCount={25} isLoggedIn={false} />
*/
