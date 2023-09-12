import React from 'react'

const Post = ({post , handelBookmark , readFunction}) => {
    const {id, course_name, cover, hashTags ,author_name, author_img, publish_date, duration } = post
  return (
    <div className=' mb-[30px] '>
    <img src={cover} alt={course_name}/>
    <div className="author p-[10px] flex justify-between items-center">
        <div className="nameSection flex gap-2 items-center">
            <img className=' w-[50px] ' src={author_img} alt={author_name}/>
            <div className="autonrData">
                <h1 className='font-bold text-[16px] md:text-2xl'>{author_name}</h1>
                <p className='text-[14px] md:text-[16px] '>{publish_date}</p>
            </div>
        </div>
        <div className="timeSection flex items-center gap-2">
            <p>{duration} min read</p>
            <button onClick={()=>handelBookmark(post)} className=' text-[darkgreen] text-3xl '><i className="fa-solid fa-book-bookmark"></i></button>
        </div>
    </div>
      <h1 className=' text-25px[] md:text-[40px] font-bold'>{course_name}</h1>
      {
        hashTags.map( (hashTags,idx) => <span key={idx} className='ml-[5px]'><a className='text-[14px] underline text-[#111111]' href=''>#{hashTags}</a></span>)
      }
      <button className=' font-bold text-[#6047EC] text-[20px] underline block' onClick={()=>{readFunction(id)}}>Mark as read</button>
    </div>
  )
}

export default Post
