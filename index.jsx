import { useState } from "react";


export default function Home(){
    const [posts, setPosts] = useStatetate([]);
    useEffect(() =>{
        axios.get(" https://dummyjson.com/")
        .then((res) => setPosts(res.data))
    }, [])
    console.log(posts)
    return (
        <>
        <div>
        <h2>Lista de Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
                <Link to={`/detalhes/$ {post.id`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
        </>
    );
    }