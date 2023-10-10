import React, { useState } from 'react'; import './App.css';

const BlogPost = ({ post }) => {
const [showContent, setShowContent] = useState(false); return (
<div className="blog-post">
<h2 onClick={() => setShowContent(!showContent)}>{post.title}</h2>
{showContent && (
<>
<p>{post.content}</p>
</>
)}
</div>
);
};
const BlogList = ({ posts }) => { return (
<div className="blog-list">
{posts.map((post) => (
<BlogPost key={post.id} post={post} />
))}
</div>
);
};
const SearchBar = ({ onFilter }) => { const handleInputChange = (e) => { const filterValue = e.target.value; onFilter(filterValue);
};
return (
<input type="text"


placeholder="Search Here" onChange={handleInputChange}
/>
);
};
function App() {
const initialPosts = [
{
id: 1,
title: 'JAVA',
content: 'Java is a high-level, general-purpose, object-oriented, and secure programming language developed by James Gosling at Sun Microsystems, Inc. in 1991. It is formally known as OAK. In 1995, Sun Microsystem changed the name to Java. In 2009, Sun Microsystem takeover by Oracle Corporation.',
},
{
id: 2, title: 'C',
content: 'C is a procedural programming language initially developed by Dennis Ritchie in the year 1972 at Bell Laboratories of AT&T Labs. It was mainly developed as a system programming language to write the UNIX operating system.',
},
{
id: 3,
title: 'REACT',
content: 'ReactJS is an open-source JavaScript library used to create user interfaces in a declarative and efficient way. It is a component-based front- end library responsible only for the view layer of a Model View Controller(MVC) architecture.',
},
{
id: 4,
title: 'JAVASCRIPT',
content: 'avaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes and classes',

},
];
const [posts, setPosts] = useState(initialPosts);
const [filteredPosts, setFilteredPosts] = useState(posts); const handleFilter = (filterValue) => {
const filtered = posts.filter((post) => post.title.toLowerCase().includes(filterValue.toLowerCase())
);
setFilteredPosts(filtered);
};
return (
<div className="App">
<h1>React Blog My Portal</h1>

<SearchBar onFilter={handleFilter} />
<BlogList posts={filteredPosts} />
<marquee>Thank You!!!</marquee>
</div>
);
}
export default App;

