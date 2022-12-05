import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
function Pagination(props: ReactPaginateProps) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      pageRangeDisplayed={5}
      previousLabel="< previous"
      renderOnZeroPageCount={() => null}
      {...props}
    />
  );
}
export default Pagination;
