import { useState } from "react";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("blog added");
        })
    }
    return ( 
        <div className="create">
            <h2>Creare a new Blog</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <textarea required placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            <input type="text" required placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
            <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;