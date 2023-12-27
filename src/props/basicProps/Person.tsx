import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

/*
const person = {
  first: "John",
  last: "Does",
};

<Person name={person} />
*/
