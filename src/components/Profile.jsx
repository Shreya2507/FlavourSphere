import React from 'react'

function Profile() {
    const awards = [
        {
            "image": "/profile/foodie.png",
            "name": "Foodie Master"
        },
        {
            "image": "/profile/recipe.png",
            "name": "Recipe Master"
        },
        {
            "image": "/profile/contributor.png",
            "name": "Contributor"
        },
        {
            "image": "/profile/veggie.png",
            "name": "Veg-UP"
        },

    ]

    const recipes =
        [

            {
                "image": "/recipes/lentil_soup.png",
                "name": "Lentil Soup",
                "cook_time": "30 min",
                "sub_heading": "Hearty lentil soup with vegetables and a touch of herbs."
            },
            {
                "image": "/recipes/Caesar salad.png",
                "name": "Mango Salsa",
                "cook_time": "12 min",
                "sub_heading": "A sweet and spicy salsa with fresh mango, red onion, and cilantro."
            },
            {
                "image": "/recipes/pasta.png",
                "name": "Pasta Primavera",
                "cook_time": "25 min",
                "sub_heading": "Pasta with a variety of fresh vegetables in a light garlic sauce."
            },
            {
                "image": "/recipes/chickpeas.png",
                "name": "Chickpea Curry",
                "cook_time": "22 min",
                "sub_heading": "A flavorful curry with chickpeas, tomatoes, and aromatic spices."
            },


        ]
    return (
        <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4 py-20 bg-custom-gradient min-h-screen">
            <div className=' md:px-10 mt-20 w-full md:w-5/6 m-auto flex flex-col justify-start items-center font-primary'>
                <div className='text-white text-3xl mb-10'>Profile</div>

                <div className='flex justify-start items-center w-5/6 flex-col md:flex-row'>
                    <div className='w-full md:w-1/3 flex justify-center items-center'><img className='w-5/6' src="/profile/Avatar.png" /></div>
                    <div className='text-black mb-5 sm:md-0 w-full md:w-2/3 h-full flex justify-center items-center py-5 px-0 text-sm text-justify md:text-xl md:text-left'>My name is Sarah Mitchell, and I am thrilled to be here today as a candidate for the position of Chef. With a burning passion for culinary arts and a strong commitment to creating exceptional dining experiences, I am excited to share my journey and expertise with you.</div>
                </div>

                <div className='text-white text-3xl mb-5'>Awards</div>
                <div className='grid h-1/4 md:gap-0 gap-4 grid-cols-2 md:grid-cols-4 mb-20'>
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 justify-center items-center">
                            <div className='w-5/6 md:w-2/3'><img className='w-full' src={award.image} /></div>
                            <div className='w-5/6 md:w-8/12 text-center text-sm md:text-md text-black bg-white rounded-full'>{award.name}</div>

                        </div>
                    ))}

                </div>

                <div className='text-white text-3xl mb-5 sm:block hidden'>Activity</div>
                <div className='mb-20 w-full md:w-5/6 m-auto sm:block hidden'><img className='w-full' src="/profile/contri.png" /></div>


                <div className='text-white text-3xl'>Recipes Posted</div>
                <div className="grid grid-cols-2 w-full gap-6 p-5 md:grid-cols-3 lg:grid-cols-4">
                    {recipes.map((recipe, index) => (
                        <div
                            key={index}
                            className="card w-full p-2 lg:p-5 flex flex-col justify-start items-center bg-orange-400 rounded-3xl"
                        >
                            <div className="w-11/12 mb-2 overflow-hidden rounded-[12px]">
                                <img className="w-full" src={recipe.image} />
                            </div>
                            <div className="h-[0.5px] w-full bg-gray-500 opacity-40 mb-3"></div>
                            <div className="bg-black rounded-lg text-[10px] md:text-[1vw] text-white px-7 mb-2 text-center">
                                {recipe.name}
                            </div>
                            <div className="bg-white rounded-full text-[8px] md:text-[0.9vw] text-black px-3 mb-2 sm:mb-5">
                                Cook time : {recipe.cook_time}
                            </div>
                            <div className="text-center text-[8px] md:text-[0.8vw] text-[#593f68]">
                                {recipe.sub_heading}
                            </div>
                        </div>
                    ))}
                </div>


            </div>

        </div>
    )
}

export default Profile
