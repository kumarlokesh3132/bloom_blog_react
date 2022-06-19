import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "The first Blog", author: "Lokesh Kumar", body: "lorem ipsum....", id: 1 },
        {title: "The second Blog", author: "Lokesh Kumar", body: "lorem ipsum....", id: 2 },
        {title: "The third Blog", author: "Lokesh Kumar", body: "lorem ipsum....", id: 3 },
        {title: "The fourth Blog", author: "Lokesh Kumar", body: "lorem ipsum....", id: 4 },
    ]);
    return ( <div className="home">
        <BlogList blogs={blogs} title="All Blogs"/>
    </div> );
}
 
export default Home;