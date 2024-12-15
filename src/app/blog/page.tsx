import React from 'react';
import SearchBar from '../searchbar';
import FeatureSection from '../FeatureSection';
import Image from 'next/image';

function BlogPostLayout() {
  const posts = [
    {
      title: 'Going all-in with minimal design',
      image: '/blog1.jpg',
      date: '2023-11-23',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      title: 'Exploring new ways of decorating',
      image: '/blog2.jpg',
      date: '2023-11-20',
      author: 'Jane Smith',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      title: 'Handmade pieces that look like time to create',
      image: '/blog3.jpg',
      date: '2023-11-17',
      author: 'Michael Johnson',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
  ];

  return (
    <section className="bg-white bg-center">
      <Image
        src='/blog22.jpg'
        alt='Blog Header'
        width={1200} // Set width
        height={500} // Set height
        className="w-full object-cover h-64"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {posts.map((post, index) => (
              <div key={index} className="mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}  // Set width for post images
                  height={400}  // Set height for post images
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center mb-4 space-x-4">
                  <div className="text-gray-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="ml-2">{post.date}</span>
                  </div>
                  <div className="text-gray-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75L12 11.25l3.75-1.5" />
                    </svg>
                    <span className="ml-2">{post.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar for search and categories */}
          <div className="md:col-span-1">
            <SearchBar />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Categories</h2>
            <ul className="text-semibold space-y-2">
              <li><a href="#" className="text-lg md:text-2xl hover:underline">Design</a></li>
              <li><a href="#" className="text-lg md:text-2xl hover:underline">Home Decor</a></li>
              <li><a href="#" className="text-lg md:text-2xl hover:underline">DIY</a></li>
              <li><a href="#" className="text-lg md:text-2xl hover:underline">Lifestyle</a></li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">Recent Posts</h2>
            <ul className="space-y-4">
              {posts.slice(0, 3).map((post, index) => (
                <li key={index} className="text-base md:text-lg hover:underline">
                  <a href="#">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FeatureSection />
    </section>
  );
}

export default BlogPostLayout;
