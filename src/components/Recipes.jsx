import React from 'react'

function Recipes() {
    const recipes =
        [
            {
                "image": "/recipes/quinoa salad.png",
                "name": "Quinoa Salad",
                "cook_time": "15 min",
                "sub_heading": "A refreshing salad with a mix of vegetables, quinoa, and a zesty dressing."
            },
            {
                "image": "/recipes/noodles.png",
                "name": "Spicy Thai Noodles",
                "cook_time": "20 min",
                "sub_heading": "Noodles tossed in a spicy Thai sauce with vegetables and peanuts."
            },
            {
                "image": "/recipes/Caesar salad.png",
                "name": "Classic Caesar Salad",
                "cook_time": "10 min",
                "sub_heading": "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese."
            },
            {
                "image": "/recipes/veggie_stirfry.png",
                "name": "Vegetable Stir-Fry",
                "cook_time": "18 min",
                "sub_heading": "A quick and easy stir-fry with a mix of colorful vegetables."
            },
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
            {
                "image": "/recipes/parfait.png",
                "name": "Greek Yogurt Parfait",
                "cook_time": "5 min",
                "sub_heading": "Layers of Greek yogurt, fresh berries, and granola for a quick breakfast."
            },
            {
                "image": "/recipes/avacado.png",
                "name": "Avocado Toast",
                "cook_time": "10 min",
                "sub_heading": "Creamy avocado spread on toasted bread, topped with fresh herbs and spices."
            },
            {
                "image": "/recipes/tomato.png",
                "name": "Tomato Basil Soup",
                "cook_time": "25 min",
                "sub_heading": "Rich and creamy tomato soup with fresh basil and a hint of garlic."
            },
            {
                "image": "/recipes/blueberry.png",
                "name": "Blueberry Oatmeal",
                "cook_time": "15 min",
                "sub_heading": "Hearty oatmeal topped with fresh blueberries and a drizzle of honey."
            }
        
        ]




    return (
      <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4 py-20 bg-custom-gradient min-h-screen">
        <div className="bg-yellow rounded-2xl flex items-center h-1/3 pt-10 pb-10 text-black">
          <div className="w-5/6 lg:w-1/2 text-center flex flex-col justify-between gap-3 lg:gap-7 items-center m-auto">
            <div className="text-xl lg:text-3xl font-extrabold ">
              Food For the Love of Delicious{" "}
              <span className="text-orange-500">Food</span>
            </div>
            <div className="text-xs lg:text-lg">
              Come with family and feel the joy of mouthwatering sweet treats
              like Tiramisu, Chocolate Fondue, Creme Brülée, Macarons, and more,
              all at affordable prices.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-6 p-1 lg:p-10">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="card h-50 w-full p-3 lg:p-7 flex flex-col justify-start items-center bg-orange-400 rounded-3xl"
            >
              <div className="w-11/12 mb-2 overflow-hidden rounded-[12px]">
                <img className="w-full" src={recipe.image} />
              </div>
              <div className="h-[0.5px] w-full bg-gray-500 opacity-40 mb-3"></div>
              <div className="bg-black rounded-lg text-[12px] lg:text-[1.2vw] text-white px-7 mb-2 text-center">
                {recipe.name}
              </div>
              <div className="bg-white rounded-full text-[10px] lg:text-[1.0vw] text-black px-3 mb-2 lg:mb-5">
                Cook time : {recipe.cook_time}
              </div>
              <div className="text-center text-[10px] lg:text-[0.9vw] text-[#593f68]">
                {recipe.sub_heading}
              </div>
            </div>
          ))}
          {/* <div className="col-span-2 col-start-2">
            <button className="bg-orange-500 w-full rounded-full text-white py-3 hover:bg-orange-600 transition-all duration-300 ">
              Show More
            </button>
          </div> */}
        </div>
      </div>
    );
}

export default Recipes
