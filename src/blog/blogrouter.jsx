import { Route, Routes } from "react-router-dom"
import { Blog } from "./blog"
import { Detail } from "./detail/detail"


export const BlogRouter = ()=>{
    return(
        <div>
    <Routes>
      <Route path='/' element={<Blog/>}></Route>
      <Route path="/healty-food" element={<Detail></Detail>}></Route>
    </Routes>
        </div>
    )
}