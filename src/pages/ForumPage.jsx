import React, { useEffect, useState } from "react";
import ForumIcon from "/forum/forum_icon.png";
import Love from "/forum/Love.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ForumPage() {

  
  const [posts, setPosts] = useState([
    {
      Image: "/forum/1.png",
      Title: "Healthy Gluten-Free Lunch Recipes",
      Tags: ["keto", "nut-free", "dairy"],
      Author: "HealthyEater",
      Posting_date: "2024-07-25",
      No_of_views: 21989,
      No_of_likes: 197,
      No_of_comments: 171,
      likes: false,
    },
    {
      Image: "/forum/2.png",
      Title: "Healthy Vegan Lunch Recipes",
      Tags: ["keto", "vegan", "dairy"],
      Author: "HealthyEater",
      Posting_date: "2024-07-20",
      No_of_views: 21129,
      No_of_likes: 662,
      No_of_comments: 65,
      likes: false,
    },
    {
      Image: "/forum/3.png",
      Title: "Quick and Easy Paleo Breakfast Ideas",
      Tags: ["paleo", "dairy-free", "low-carb"],
      Author: "FitFoodie",
      Posting_date: "2024-07-21",
      No_of_views: 17432,
      No_of_likes: 312,
      No_of_comments: 142,
      likes: true,
    },
    {
      Image: "/forum/4.png",
      Title: "Delicious Dairy-Free Dessert Recipes",
      Tags: ["dairy-free", "vegan", "gluten-free"],
      Author: "SweetTooth",
      Posting_date: "2024-07-17",
      No_of_views: 29104,
      No_of_likes: 529,
      No_of_comments: 210,
      likes: false,
    },
    {
      Image: "/forum/5.png",
      Title: "Hearty Plant-Based Dinner Recipes",
      Tags: ["vegan", "high-protein", "gluten-free"],
      Author: "GreenChef",
      Posting_date: "2024-07-22",
      No_of_views: 18357,
      No_of_likes: 387,
      No_of_comments: 98,
      likes: true,
    },
  ]);

  
  const toggle = (index) => {
  
    const newPosts = [...posts];
    newPosts[index].likes = !newPosts[index].likes;
    setPosts(newPosts); 
  
  };

  useEffect(()=>{

  }, [posts])

  return (
    <div className=" max-w-screen-2xl container mx-auto min-h-screen pt-32 py-10 bg-custom-gradient">
      <div className="container min-h-60 lg:w-4/6 mx-auto flex flex-col font-poppins w-11/12">
        <div className="glass top rounded-xl bg-[#FFA13B] py-4 px-6 w-full flex justify-center items-center">
          <div className=" h-12 w-12 lg:h-14 lg:w-14 lg:mr-5">
            <img className="h-full mt-1 outline-none" src={ForumIcon} />
          </div>
          <div className="w-3/4 h-3/4 mr-5">
            <input
              className="w-full m-2 lg:m-0 rounded-md px-4 py-2 focus:outline-none active:border-[#FF6934] placeholder:text-gray-500 bg-gray-100  lg:text-base text-xs"
              type="text"
              name=""
              id=""
              placeholder="Let's share whats cooking on your mind ..."
            />
          </div>
          <div>
            <button className="bg-[#FF6934] hover:bg-[#ff4400] rounded-md text-white font-semibold lg:px-4 lg:py-2 text-[10px] lg:text-base transition-all duration-300">
              Create Post
            </button>
          </div>
        </div>

        <div className="posts flex flex-col justify-between items-center mt-5">
          {posts.map((post, index) => (
            <div
              key={index}
              className="glass bg-[#FFA13B] opacity-90 rounded-xl w-full py-5 px-8 mb-5 flex justify-between items-center lg:flex-row flex-col"
            >
              <div className="image rounded-2xl overflow-hidden lg:w-1/5 lg:h-/5 w-full ">
                <img className="w-full h-full" src={post.Image} alt="" />
              </div>
              <div className="right w-full lg:w-4/5 h-full py-4 lg:px-10 px-0 ">
                <div className="top flex justify-between items-center w-full">
                  <div className="text-md lg:text-3xl font-bold text-black">{post.Title}</div>
                  <div className="h-10 w-10" >
                    <img
                      className={post.likes ? "h-full cursor-pointer" : "h-full grayscale cursor-pointer"}
                      src={Love}
                      onClick={()=>(toggle(index))}
                      
                    />
                  </div>
                </div>
                <div className="tags w-full flex justify-start items-center mt-2 mb-4">
                  {post.Tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-white h-6 px-3 mr-1 text-xs rounded-full font-semibold text-black flex justify-center items-center"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-end mt-10">
                  <div className="flex h-full flex-col justify-between items-start">
                    <div className="text-[10px]">By {post.Author}</div>
                    <div className="text-[10px]">{post.Posting_date}</div>
                  </div>
                  <div className="lg:text-base text-[10px]">{post.No_of_views} views</div>
                  <div className="lg:text-base text-[10px]">{post.No_of_likes} likes</div>
                  <div className="lg:text-base text-[10px]">
                    {post.No_of_comments} comments
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForumPage;
