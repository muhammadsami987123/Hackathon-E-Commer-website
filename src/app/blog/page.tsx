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
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    },
    {
      title: 'Exploring new ways of decorating',
      image: '/blog2.jpg',
      date: '2023-11-20',
      author: 'Jane Smith',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    },
    {
      title: 'Handmade pieces that look like time to create',
      image: '/blog3.jpg',
      date: '2023-11-17',
      author: 'Michael Johnson',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    },
  ];

  return (
    <section className=" bg-white bg-center" >
        <Image src='blog22.jpg' className='w-full' alt={'blog'} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {posts.map((post, index) => (
              <div key={index} className="mb-8">
                <Image src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-lg mb-4" />
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center mb-4">
                  <div className="text-gray-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {post.date}
                  </div>
                  <div className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75L12 11.25l3.75-1.5" />
                    </svg>
                    {post.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <SearchBar />
            <h2 className="text-3xl font-bold mb-4">Categories</h2>
            <ul className="text-semiblod flex-auto">
              <li><a href="#" className="text-2xl hover:underline">Design</a></li>
              <li><a href="#" className="text-2xl hover:underline">Home Decor</a></li>
              <li><a href="#" className="text-2xl hover:underline">DIY</a></li>
              <li><a href="#" className="text-2xl hover:underline">Lifestyle</a></li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4">Recent Posts</h2>
            {/* Add recent posts here */}
          </div>
        </div>
      </div>
      <FeatureSection />
    </section>
  );
}

export default BlogPostLayout;
