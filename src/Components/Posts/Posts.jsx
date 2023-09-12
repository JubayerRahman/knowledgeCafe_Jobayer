import { useEffect, useState } from "react"
import Post from "../post/Post"

const Posts = ({handelBookmark, readFunction}) => {
    const [posts , setPosts] = useState([])

    useEffect(()=>{
        fetch("CourseData.json")
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
  return (
    <div className=" md:w-2/3 mx-2 md:mx-auto my-[20px]">
      {
      posts.map( post => <Post key={post.id} post={post} handelBookmark={handelBookmark} readFunction={readFunction}></Post>)
      }
    </div>
  )
}

export default Posts
