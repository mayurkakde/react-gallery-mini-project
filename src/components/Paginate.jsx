import ReactPaginate from 'react-paginate'

const Paginate = ({ handlePageClick }) => {
    return (
        <div className='cursor-pointer'>
            <ReactPaginate

                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={10}
                onPageChange={handlePageClick}
                containerClassName="flex gap-2 justify-center mt-6"
                activeClassName="text-yellow-400 font-bold"
            />
        </div>
    )
}
export default Paginate