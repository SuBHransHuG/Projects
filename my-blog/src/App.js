import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import Footer from './components/Footer';
import postImage1 from './image1.jpg';
import postImage2 from './image2.jpg';
import postImage3 from './image3.jpg';
// import './App.css'; // You can import global styles here if needed

const App = () => {
  // Sample posts data
  const posts = [
    {
      id: 1,
      title: 'Sports',
      author: 'Subhranshu',
      date: '2022-04-20',
      image: postImage1, // Sample image URL
    },
    {
      id: 2,
      title: 'Street',
      author: 'Aakash',
      date: '2022-04-21',
      image: postImage2, // Sample image URL
    },
    {
      id: 3,
      title: 'Trip',
      author: 'Pawan',
      date: '2022-04-22',
      image: postImage3, // Sample image URL
    },
  ];


  return (
    <div>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 App">
            <PostList posts={posts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
