import React from 'react'
// import Forum from '../components/Forum'
import ForumIcon from '/forum/forum_icon.png'
import Love from '/forum/Love.png'

function ForumPage() {
    const posts =
        [
            {
                "Image": "/forum/1.png",
                "Title": "Healthy Gluten-Free Lunch Recipes",
                "Tags": [
                    "keto",
                    "nut-free",
                    "dairy"
                ],
                "Author": "HealthyEater",
                "Posting_date": "2024-07-25",
                "No_of_views": 21989,
                "No_of_likes": 197,
                "No_of_comments": 171,
                "likes": false
            },
            {
                "Image": "/forum/2.png",
                "Title": "Healthy Vegan Lunch Recipes",
                "Tags": [
                    "keto",
                    "vegan",
                    "dairy"
                ],
                "Author": "HealthyEater",
                "Posting_date": "2024-07-20",
                "No_of_views": 21129,
                "No_of_likes": 662,
                "No_of_comments": 65,
                "likes": false
            },
            {
                "Image": "/forum/3.png",
                "Title": "Quick and Easy Paleo Breakfast Ideas",
                "Tags": [
                    "paleo",
                    "dairy-free",
                    "low-carb"
                ],
                "Author": "FitFoodie",
                "Posting_date": "2024-07-21",
                "No_of_views": 17432,
                "No_of_likes": 312,
                "No_of_comments": 142,
                "likes": true
            },
            {
                "Image": "/forum/4.png",
                "Title": "Delicious Dairy-Free Dessert Recipes",
                "Tags": [
                    "dairy-free",
                    "vegan",
                    "gluten-free"
                ],
                "Author": "SweetTooth",
                "Posting_date": "2024-07-17",
                "No_of_views": 29104,
                "No_of_likes": 529,
                "No_of_comments": 210,
                "likes": false
            },
            {
                "Image": "/forum/5.png",
                "Title": "Hearty Plant-Based Dinner Recipes",
                "Tags": [
                    "vegan",
                    "high-protein",
                    "gluten-free"
                ],
                "Author": "GreenChef",
                "Posting_date": "2024-07-22",
                "No_of_views": 18357,
                "No_of_likes": 387,
                "No_of_comments": 98,
                "likes": true
            }
        ]
    return (

        <div className='w-full h-[200vh] pt-16 bg-custom-gradient'>
            <div className=' h-60 w-4/6 mx-auto flex flex-col font-poppins'>
                <div className='top rounded-xl bg-[#FFA13B] py-4 px-6 w-full flex justify-center items-center'>
                    <div className='h-14 mr-5'><img className='h-full mt-1 outline-none' src={ForumIcon} /></div>
                    <div className='w-3/4 h-3/4 mr-5'><input className='w-full h-full rounded-md px-4 focus:outline-none active:border-[#FF6934] placeholder:text-gray-500' type="text" name="" id="" placeholder="Let's share whats cooking on your mind ..." /></div>
                    <div><button className='bg-[#FF6934] hover:bg-[#ff4400] rounded-md text-white font-semibold px-4 py-2 transition-all duration-300'>Create Post</button></div>
                </div>


                <div className="posts flex flex-col justify-between items-center">
                    {posts.map((post, index) => (
                        <div key={index} className='post bg-[#FFA13B] opacity-90 rounded-xl mt-5 w-full py-5 px-8 flex justify-between items-center'>
                            <div className='image rounded-2xl rounded-es-sm overflow-hidden w-1/5'><img className='w-full' src={post.Image} alt="" /></div>
                            <div className='right w-4/5 h-full py-4 px-10 '>
                                <div className='top flex justify-between items-center'>
                                    <div className='title text-lg font-bold text-black'>{post.Title}</div>
                                    <div className='like h-10'><img className={post.likes == true ? "h-full" : "h-full grayscale"} src={Love} /></div>
                                </div>
                                <div className='tags w-full flex justify-start items-center'>
                                    {post.Tags.map((tag, index) => <div key={index} className='bg-white h-6 px-3 mr-1 text-xs rounded-full font-semibold text-black flex justify-center items-center'>{tag}</div>)}

                                </div>
                                <div className='bottom flex justify-between items-center'>
                                    <div className='flex flex-col justify-between items-center'>
                                        <div>By {post.Author}</div>
                                        <div>{post.Posting_date}</div>
                                    </div>

                                    <div>{post.No_of_views} views</div>
                                    <div>{post.No_of_likes} likes</div>
                                    <div>{post.No_of_comments} comments</div>
                                </div>

                            </div>
                        </div>

                    ))}


                </div>

            </div>

        </div>
    )
}

export default ForumPage
