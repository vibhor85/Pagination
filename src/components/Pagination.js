import "./Pagination.css";

const Pagination = ({ totalPages, next, previous, specific }) => {
  return (
    <div className="pagination">
      <span onClick={previous}>⬅️</span>
      {[...Array(totalPages)].map((_, i) => (
        <span key={i} onClick={() => specific(i + 1)}>
          {i + 1}
        </span>
      ))}
      <span onClick={next}>➡️</span>
    </div>
  );
};

export default Pagination;
