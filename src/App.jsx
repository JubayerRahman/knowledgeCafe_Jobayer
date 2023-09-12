import { useState } from 'react'
import Posts from './Components/Posts/Posts'
import BookMark from './Components/BookMark/BookMark'
import Header from './Components/Header/Header'

function App() {

  const [bookmarked , setbookmarked] = useState([])
  const [time , setTime] = useState(0)

  const handelBookmark = post =>{
    console.log(post)
    const newBookmarked = [...bookmarked , post]
    setbookmarked(newBookmarked)
    const newTime = time + parseFloat(post.duration)
    setTime(newTime)
  }
  const readFunction = id => {
    const readedPost  = bookmarked.filter(BookMark => BookMark.id !== id)
    setbookmarked(readedPost)
  }

  return (
    <>
    <Header/>
      <div className=' container mx-auto my-[20px] md:flex gap-[20px]'>
        <Posts handelBookmark={handelBookmark} readFunction={readFunction}/>
        <BookMark bookmarked={bookmarked} time={time} readFunction={readFunction}/>
      </div>
    </>
  )
}

export default App
