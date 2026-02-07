const AddArticle = ({ name, title, summary, onChangeTitle, onChangeSummary, onClickAdd }: any) => (
  <div>
    <h1>{name}</h1>
    <input placeholder="Title" value={title} onChange={onChangeTitle} />
    <input placeholder="Summary" value={summary} onChange={onChangeSummary} />
    <button onClick={onClickAdd}>Add</button>
  </div>
);
export default AddArticle;