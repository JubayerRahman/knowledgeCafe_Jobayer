const BookMark = ({bookmarked, time , readFunction}) => {

  return (
    <div className=' md:w-1/3'>
        <div className="container flex flex-col justify-center items-center mt-[20px] mb-[20px] p-[20px] rounded-xl bg-[#f3f3f3] md:sticky top-[20px]">
            <h1 className='text-2xl text-[#6047EC] font-bold mb-[20px] '>Spent time on read: {time} min</h1>
        </div>
      <div className="container flex flex-col justify-center p-[20px] rounded-xl bg-[#f3f3f3] md:sticky top-[140px]">
      <h1 className='text-2xl font-bold mb-[20px] '>Bookmarked Blogs:{bookmarked.length}</h1>
      {
        bookmarked.map((bookmark, idx)=> 
        <div key={idx} className="bg-[#fff]  p-[20px] rounded-[10px] flex items-center justify-between my-[5px]">
            <p className='bg-[#fff] txt-[18px] p-[10px] m-[3px] rounded-[10px] font-bold' >{bookmark.course_name}</p>
            <button className=" bg-[red] text-[white] p-[5px] font-bold rounded-[5px] "  onClick={()=>readFunction(bookmark.id)}>Done</button>
        </div>)
      }
      </div>
    </div>
  )
}

export default BookMark
