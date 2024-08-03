import React from 'react'

function RecipeDetail() {
    const detail =

    {
        "image": "/recipes/noodles.png",
        "recipeName": "Spicy Thai Noodles",
        "historyFood": "This dish is inspired by the vibrant and bold flavors of Thai street food. The combination of spicy, sweet, and savory elements creates a tantalizing experience for the taste buds. Traditionally, this dish is enjoyed by locals and travelers alike, offering a taste of Thailand's rich culinary heritage.",
        "ingredients": [
            "Rice noodles",
            "Red bell pepper",
            "Carrot",
            "Green onion",
            "Garlic",
            "Ginger",
            "Peanut butter",
            "Soy sauce",
            "Lime juice",
            "Brown sugar",
            "Chili paste or Sriracha",
            "Peanuts",
            "Cilantro",
            "Sesame oil"
        ],
        "time": "20 minutes",
        "cookSteps": [
            "1. Cook the Rice Noodles: Boil water in a large pot and cook rice noodles according to package instructions. Drain and set aside.",
            "2. Prepare the Vegetables: Julienne the red bell pepper and carrot. Chop green onions, garlic, and ginger.",
            "3. Make the Sauce: In a small bowl, whisk together peanut butter, soy sauce, lime juice, brown sugar, and chili paste or Sriracha until smooth.",
            "4. Stir-fry the Vegetables: In the same pan, add more sesame oil if needed. Add garlic and ginger, and sauté until fragrant. Add red bell pepper, carrot, and green onions, and stir-fry until tender-crisp.",
            "5. Combine and Serve: Add cooked rice noodles and chicken to the pan with the vegetables. Pour the sauce over the noodles and toss to coat evenly. Cook for another 2-3 minutes until everything is heated through.",
            "6. Garnish: Top with chopped peanuts and fresh cilantro. Serve hot."
        ],
        "optionalItems": [
            "Bean sprouts for added crunch",
            "Red pepper flakes for extra spice",
            "Lime wedges for additional tanginess",
            "Sliced green chili for more heat"
        ],
        "comments": [
            "Absolutely delicious! The perfect balance of flavors.",
            "Quick and easy to make, yet tastes like it came from a restaurant.",
            "The peanut sauce is incredibly flavorful.",
            "I love the combination of textures with the crunchy vegetables.",
            "A great meal prep option for busy weekdays."
        ],
        "videoUrl": "https://www.youtube.com/embed/IcPcOpIQKuc",
        "dietaryClass": "/recipeDetail/veg.png"
    };





    return (
        <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4 py-20 bg-custom-gradient min-h-screen">
            <div className=' mt-12 bg-orange-400 rounded-3xl w-full flex flex-col justify-start items-center font-primary '>

                <div className='top m-5 w-full lg:w-5/6 lg:m-auto flex justify-start items-center flex-col-reverse md:flex-row '>
                    <div className='left w-full lg:w-2/3 flex flex-col justify-start items-left lg:p-10 p-4'>
                        <div className='w-full text-2xl text-center lg:text-3xl font-semibold text-black mb-5'>{detail.recipeName}<span><img className='ml-5 -mt-1 lg:-mt-2 w-8 inline-block' src={detail.dietaryClass} alt="" /></span></div>
                        <div className='w-full text-xl text-black'>History of the Food</div>
                        <div className='w-full m-auto text-justify mb-10'>{detail.historyFood}</div>


                        <div className='w-1/2 flex flex-col justify-center items-left'>
                            <div className='w-full text-xl text-black mb-2'>Ingredients</div>
                            <div className='lg:w-1/2 w-full text-center px-3 bg-white text-black text-sm rounded-full mb-4'>Time: {detail.time}</div>
                            <ul className='pl-5 list-disc'>
                                {detail.ingredients.map((i, index) => <li key={index}>{i}</li>)}
                            </ul>
                        </div>

                    </div>

                    <div className='right w-5/6 lg:w-1/2'>
                        <div className='w-full rounded-3xl overflow-hidden'><img className='w-full' src={detail.image} /></div>
                    </div>
                </div>



                <div className="middle w-full px-5 md:px-32 flex flex-col justify-center items-left ">
                    <div className=' w-48 md:w-60 text-sm md:text-xl bg-white rounded-xl px-5 py-2 text-black mb-2'> It's Cooking Time....</div>
                    <div className='w-5/6 text-justify mb-5 md:text-base text-sm'>{detail.cookSteps.map((step, index) => <div className='mb-2' key={index}>{step}</div>)}</div>
                    <div className='md:text-lg mb-1 text-base'>Optional Additions</div>
                    <div className='w-5/6 text-justify text-sm md:text-base'><ul className='pl-5 list-disc'>{detail.optionalItems.map((step, index) => <li className='mb-2' key={index}>{step}</li>)}</ul></div>
                </div>

                <div className='vide px-5 md:px-32 w-full flex flex-col justify-center items-start mt-10 md:mt-20 mb-10'>
                    <div className=' w-full flex justify-start gap-2 items-center mb-5'>
                        <div className='text-xl md:text-2xl font-semibold'>Video</div>
                        <div className='h-[0.5px] w-[790px] bg-gray-500'></div>
                    </div>
                    <iframe
                        width="310vw"
                        height="200vw"
                        src={detail.videoUrl}
                        title={detail.recipeName}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>

                </div>

                <div className=' w-full px-5 md:px-32 mb-16 md:text-xl text-base'>Posted By <span className='font-bold text-lg md:text-base'>Sarah Mitchell</span></div>


                <div className="middle w-full px-5 md:px-32 flex flex-col justify-center items-left">
                    <div className='w-full text-xl text-black mb-2'>Comments</div>

                    <div className='bg-yellow px-2 py-2 md:w-1/2 w-full mb-2 flex justify-start gap-5 items-center'>
                        <div className='rounded-full w-16 overflow-hidden'><img src="/recipeDetail/p1.jpg" alt="" /></div>
                        <div>
                            <div className=' md:text-base text-sm'>mcjaxx25<span className='ml-5 text-gray-600 md:text-sm text-xs'>11 hours ago</span></div>
                            <div className='md:text-base text-xs'>Great Recipe ! My family loved it!</div>
                            <div className='mt-2 text-gray-600 text-sm'><a>Reply</a></div>
                        </div>
                    </div>

                    <div className='bg-yellow px-2 py-2 md:w-1/2 w-full mb-2 flex justify-start gap-5 items-center'>
                        <div className='rounded-full w-16 overflow-hidden'><img src="/recipeDetail/p2.jpg" alt="" /></div>
                        <div>
                            <div className=' md:text-base text-sm'>user-qs8n06de2f<span className='ml-5 text-gray-600 md:text-sm text-xs'>2 hours ago</span></div>
                            <div className='md:text-base text-xs'>@mcjaxx25 Todo los platos se ven DELICIOSOS. 👏👏</div>
                            <div className='mt-2 text-gray-600 text-sm'><a>Reply</a></div>
                        </div>
                    </div>

                    <div className='bg-yellow px-2 py-2 md:w-1/2 w-full mb-2 flex justify-start gap-5 items-center'>
                        <div className='rounded-full w-24 overflow-hidden'><img src="/recipeDetail/p3.jpg" alt="" /></div>
                        <div>
                            <div className='md:text-base text-sm'>mercedesmartinezl22<span className='ml-5 text-gray-600 md:text-sm text-xs'>12 minutes ago</span></div>
                            <div className='md:text-base text-xs'>Bce рецепты хорошие, последний рецепт как пицца овощная понравилась. ❤️</div>
                            <div className='mt-2 text-gray-600 text-sm'><a>Reply</a></div>
                        </div>
                    </div>


                    <div className="w-2/3 md:w-1/5 mt-2 mb-10">
                        <button className="text-sm bg-orange-600 w-full rounded-full text-white py-2 hover:bg-orange-700 transition-all duration-300 ">
                            Comment Now
                        </button>
                    </div>


                </div>








            </div>

        </div>
    )
}

export default RecipeDetail
