function NameList() {
  const names = ["Om", "Amit", "Ravi"];
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
export default NameList;
