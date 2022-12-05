import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

function Pagination(props: ReactPaginateProps) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      pageRangeDisplayed={5}
      previousLabel="< previous"
      renderOnZeroPageCount={() => null}
      className="flex justify-center gap-4"
      activeClassName="text-indigo-400"
      {...props}
    />
  );
}
export default Pagination;
