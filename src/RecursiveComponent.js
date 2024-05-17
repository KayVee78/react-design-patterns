const isObject = (x) => typeof x === "object" && x !== null;

export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <div>{data}</div>;
  }

  //returns an array of all key-value pairs of the object
  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};
