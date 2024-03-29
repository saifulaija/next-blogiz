import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5">
        Latest Blogs From <span className="text-accent">Blogiz</span>{" "}
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          A platform for all your blogging needs, bringing you the latest
          insights, tips, and stories. all your blogging needs
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4 my-5">
        {
            blogs?.slice(0,2).map(blog=><LatestBlogCard key={blog.id} blog={blog}/>)
        }
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {
            blogs?.slice(2,5).map(blog=><BlogCard key={blog.id} blog={blog}/>)
        }
      </div>
    </div>
  );
};

export default LatestBlogs;
