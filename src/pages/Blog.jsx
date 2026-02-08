import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  TrendingUp,
  User,
} from "lucide-react";
import { blogPosts, categories, featuredPost } from "../assets/assets";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-cyan-50/30">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 pt-24 pb-32 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6">
            <TrendingUp className="size-4 text-white" />
            <span className="text-sm font-semibold text-white">
              Career Insights & Tips
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Resumio Blog
          </h1>
          <p className="text-xl text-cyan-50 max-w-2xl mx-auto mb-10">
            Expert advice, career tips, and industry insights to help you land
            your dream job
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-14 pr-6 rounded-2xl border-2 border-white/20 bg-white/90 backdrop-blur-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-white transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        {/* Categories */}
        <div className="bg-white rounded-2xl border-2 border-cyan-200/60 p-6 mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-2 bg-cyan-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">
              Featured Article
            </h2>
          </div>

          <Link
            to={`/blog/${featuredPost.id}`}
            className="group block bg-white rounded-3xl border-2 border-cyan-200/60 overflow-hidden hover:border-cyan-400 transition-all"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    <Tag className="size-3" />
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="size-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-4 transition-all">
                  <span>Read full article</span>
                  <ArrowRight className="size-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <div className="size-2 bg-cyan-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">
              Latest Articles
            </h2>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-cyan-400 hover:-translate-y-1 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-white/90 backdrop-blur-sm text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <User className="size-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="size-8 text-slate-400" />
              </div>
              <p className="text-slate-600 text-lg">
                No articles found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 text-cyan-600 hover:text-cyan-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 rounded-3xl p-12 text-center mb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-cyan-50 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly career tips, resume advice,
              and industry insights delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-6 rounded-xl border-2 border-white/20 bg-white/90 backdrop-blur-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-white transition-all"
              />
              <button className="h-12 px-8 bg-white hover:bg-cyan-50 text-cyan-600 font-semibold rounded-xl transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blog;
