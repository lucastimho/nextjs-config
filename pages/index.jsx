const Notes = props => props.data.map(note => <div>{note.text}</div>);
export default () => {
  const data = [{ text: 'Hey'}, {text: 'There'}];
  return <Notes data={data} />;
};