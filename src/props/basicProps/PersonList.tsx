import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h3 key={name.first}>
            {name.first} {name.last}
          </h3>
        );
      })}
    </div>
  );
};

/*
const personList = [
    { first: "MR", last: "Masum" },
    { first: "MH", last: "Shawan" },
    { first: "Atik", last: "Howlader" },
  ];

  <PersonList names={personList} />
*/
