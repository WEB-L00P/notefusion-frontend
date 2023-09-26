const Note = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, body } = props;
  return (
    <>
      <div className="note w-40 h-auto overflow-hidden border-[1px] rounded-md p-2 text-white">
        <h2 className="title font-bold py-2">{title}</h2>
        <p className="body text-sm">{body}</p>
      </div>
    </>
  );
};

export default Note;
