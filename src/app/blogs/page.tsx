'use client'

import BlogCard from "@/components/ui/BlogCard";
import { useGetBloogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";



const BlogPage =  () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const {data:blogs,isLoading,isError}=useGetBloogsQuery('')
  console.log(blogs)

  return (
    <div className="max-w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5">
        Latest Blogs All <span className="text-accent">Blogiz</span>{" "}
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          A platform for all your blogging needs, bringing you the latest
          insights, tips, and stories. all your blogging needs
        </i>
      </p>
      <div className="grid grid-cols-3 gap-1 my-10">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
