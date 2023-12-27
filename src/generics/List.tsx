type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return <div key={item.id} onClick={() => onClick(item)}></div>;
      })}
    </div>
  );
};

/*
<List items={['Mango', 'Apple', 'Banana']} onClick={(item)=> console.log(item)}/>
    <List items={[1, 2, 3]} onClick={(item)=> console.log(item)}/>

      <List
        items={[
          { id: 1, first: "Bruce", last: "Wayne" },
          { id: 2, first: "Clark", last: "Kent" },
          { id: 3, first: "Princes", last: "Diana" },
        ]}
        onClick={(item) => console.log(item)}
      />
*/
