import { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import Card from './components/Card'
import Paginate from './components/Paginate'

function App() {
  const [imageData, setImageData] = useState([])
  const [page, setPage] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    )
    setImageData(response.data)
  }

  useEffect(() => {
    getData()
  }, [page])

  const handlePageClick = (data) => {
    setPage(data.selected + 1)
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex flex-wrap gap-4 p-2'>
        {imageData.map((elem, ind) => (
          <Card key={ind} elem={elem} />
        ))}
      </div>

      {/* <ReactPaginate

        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={10}
        onPageChange={handlePageClick}
        containerClassName="flex gap-2 justify-center mt-6"
        activeClassName="text-yellow-400 font-bold"
      /> */}
      <Paginate handlePageClick={handlePageClick} />
    </div>
  )
}

export default App