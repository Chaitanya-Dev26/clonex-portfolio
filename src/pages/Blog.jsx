import {  ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import React, { useRef, useEffect, useContext, useState } from "react";
import { NavbarColorContext } from "../components/context/NavContext";
import Social from "../components/common/socialMain";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const colorContext = useContext(NavbarColorContext);
  const navColor = colorContext ? colorContext[0] : 'black'; 
  const categories = ['All', 'Design', 'Tech & AI', 'Account'];
  
  const featuredArticles = [
    {
      id: 1,
      title: "Predictive Advertising: AI Revolutionizing Targeting",
      date: " May 9 2025",
      category: "Tech & AI",
      image: "https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5",
      description: "How AI is transforming predictive advertising with unprecedented targeting capabilities."
    },
    {
      id: 2,
      title: "Advice & customer relations: A duo that doesn't need to be briefed, that builds itself",
      date: " May 9 2025",
      category: "Account",
      image: "https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif",
      description: "Building client relationships that go beyond traditional briefs and expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Main Heading */}
      <div className="w-full pt-[20vh] pb-8 ">
        <h2 className='font-[font2] lg:text-[9.5vw] text-6xl uppercase'>Blog</h2>
      </div>

      {/* Header with Categories */}
      <header className="border-b border-black py-2 w-full px-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex-1"></div> {/* Spacer to push categories to right */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-[font1] text-black">Categories:</span>
            <div className="flex space-x-1">
              {categories.map((category) => (
                <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-1.5 py-1 text-xl font-[font2] relative overflow-hidden group 
                  ${activeCategory === category ? 'text-white bg-black' : 'text-black bg-gray-200'}
                `}
                style={{ transition: 'all 0.3s ease-out' }}
              >
                <span className="relative z-10">{category}</span>
                {activeCategory !== category && (
                  <span 
                    className="absolute inset-0 bg-[#D3FD50] transform origin-top transition-transform duration-300 ease-out scale-y-0 group-hover:scale-y-100"
                    style={{
                      zIndex: 0,
                      transformOrigin: 'top',
                      height: '100%',
                      width: '100%',
                      top: 0,
                      left: 0
                    }}
                  ></span>
                )}
              </button>              
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Articles */}
      <main className="w-full py-3 px-4 mb-[15vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
            <article key={article.id} className="cursor-pointer">
              <div className="overflow-hidden">
                {/* Article Image */}
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden rounded-[50px] group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Article Content */}
                <div className="">
                  <p className="pt-4 text-2xl text-black font-[font2] text-left mb-2">{article.date}</p>
                  <h2 className="text-4xl font-[font2] mb-2 font-[600] uppercase">{article.title}</h2>
                  <div className="flex justify-between items-center">
                    <div className="relative group/category">
                      <span className="inline-block bg-gray-200 text-black text-xl font-[font2] px-1.5 py-1 relative overflow-hidden">
                        <span className="relative z-10">{article.category}</span>
                        <span className="absolute inset-0 bg-[#D3FD50] transform origin-top transition-transform duration-300 ease-out scale-y-0 group-hover/category:scale-y-100 z-0"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Social />
    </div>
  );
};

export default Blog;