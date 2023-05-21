import './styles/main.css';
import PostList from './components/PostList/PostList';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(()=> {
    fetchPosts()
  }, [])
  
  async function fetchPosts() {
    const response =await axios.get('https://cloud.codesupply.co/endpoint/react/data.json')
    setPosts(response.data)
  }


  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}/>
      <PostList posts={posts} search={search}/>
    </div>
  );
}

export default App;
