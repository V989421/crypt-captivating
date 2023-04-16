import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="text-gray-400 body-font px-20">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">We decentralise stuff</h1>
            <p className="mb-8 leading-relaxed text-xl mr-16">to prosper and maintain product traceability with promise in the agricultural food supply chain</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gradient-to-r from-lime-500 to-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l from-green-500 to-lime-600 rounded text-lg mr-10">Buy things</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-white-200 rounded text-lg ml-10">Contact</button>
            </div>
          </div>
          <div className="-ml-20">
            {/* Image */}
            <Image src="/veggies.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl' />
          </div>
        </div>
      </section>

      <section className="bg-white">
      <h2 className='text-3xl font-bold text-center pt-10'>Do you know how vegetables and fruits are important ?</h2>
      <p className="text-gray-600 text-justify text-xl px-28 py-10">Vegetables and fruits are essential in our lives for a number of reasons. Here are some key points to consider:
      Nutrient Content: Vegetables and fruits are a rich source of essential nutrients such as vitamins, minerals, and fiber that are important for overall health and wellbeing. For example, fruits such as oranges, kiwis, and strawberries are rich in vitamin C, which helps boost our immune system and protect against infections.
      Disease Prevention: Eating a diet rich in vegetables and fruits has been linked to a lower risk of chronic diseases such as heart disease, diabetes, and certain cancers. This is partly due to the high antioxidant content in many fruits and vegetables, which can help protect against cellular damage and inflammation.
      Weight Management: Vegetables and fruits are also low in calories and high in fiber, which can help with weight management and prevent obesity. They are also nutrient-dense, meaning they provide a high level of nutrients relative to their calorie content.
      Digestive Health: The fiber content in vegetables and fruits also promotes healthy digestion and bowel movements. Fiber helps to bulk up stool and prevent constipation, while also promoting the growth of healthy gut bacteria.
      Mental Health: Eating a diet rich in vegetables and fruits has also been linked to better mental health outcomes, including lower rates of depression and anxiety. This may be due to the high nutrient content of these foods, which can help support healthy brain function.
      In summary, vegetables and fruits are essential in our lives for their high nutrient content, disease prevention benefits, weight management support, digestive health benefits, and mental health benefits. A diet rich in fruits and vegetables can help us lead a healthier and happier life.</p>
      </section>


      {/*  Some foods intro */}
      <section className="text-white body-font">
        <h2 className="text-center text-2xl font-bold pt-10">Have a look at what we have</h2>
        <p className='text-center mt-5 text-xl'>"Eat your veggies, they'll keep you fit, strong and hearty,
        A simple, healthy choice that's always a smart party."</p>
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src="/tomato.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl' />
              </a>
              <div className="mt-4">
                <h3 className="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY VEGETABLES</h3>
                <h2 className="text-white-900 title-font text-lg font-medium">Tomato</h2>
                <p className="mt-1">Ξ 0.005 ETH</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src="/onion.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl' />
             </a>
              <div className="mt-4">
                <h3 className="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY VEGETABLES</h3>
                <h2 className="text-white-900 title-font text-lg font-medium">Onion</h2>
                <p className="mt-1">Ξ 0.006 ETH</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src="/potatoes.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl' />
                </a>
              <div className="mt-4">
                <h3 className="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY VEGETABLES</h3>
                <h2 className="text-white-900 title-font text-lg font-medium">Potato</h2>
                <p className="mt-1">Ξ 0.005 ETH</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src="/brinjal.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl' />
                 </a>
              <div className="mt-4">
                <h3 className="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY VEGETABLES</h3>
                <h2 className="text-white-900 title-font text-lg font-medium">Brinjal</h2>
                <p className="mt-1">Ξ 0.005 ETH</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src="/ladyFinger.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl' />

                 </a>
              <div className="mt-4">
                <h3 className="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY VEGETABLES</h3>
                <h2 className="text-white-900 title-font text-lg font-medium">Lady finger</h2>
                <p className="mt-1">Ξ 0.005 ETH</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src="/greenChillies.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl' />
               </a>
              <div className="mt-4">
                <h3 className="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY VEGETABLES</h3>
                <h2 className="text-white-900 title-font text-lg font-medium">Green chillies</h2>
                <p className="mt-1">Ξ 0.005 ETH</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src="/pumkin.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl' />

                 </a>
              <div className="mt-4">
                <h3 className="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY VEGETABLES</h3>
                <h2 className="text-white-900 title-font text-lg font-medium">Pumkin</h2>
                <p className="mt-1">Ξ 0.005 ETH</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src="/brocoli.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl' />
                </a>
              <div className="mt-4 -mb-10">
                <h3 className="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY VEGETABLES</h3>
                <h2 className="text-white-900 title-font text-lg font-medium">Brocoli</h2>
                <p className="mt-1">Ξ 0.005 ETH</p>
              </div>
            </div>
          </div>
        </div>
        <span className='ml-52'/><button className="inline-flex items-center bg-gradient-to-r from-lime-500 to-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l from-green-500 to-lime-600 text-white border-0 py-2 px-5 rounded text-base -mt-20 mb-10 ml-96 md:mt-0">Search More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </section>
      <section className="text-dark-500 bg-white">
      <h1 className='text-center text-4xl font-bold pt-10'>Not Impressed Yet ?... </h1>
      <p className='text-center text-3xl fonr-semibold mt-5'>Here is a poem for you</p>
      <p className='text-center text-2xl text-gray-600 pl-80 pr-80 mt-5 pb-20'>Vegetables, oh vegetables,
      How we adore your colors and smells,
      From the greens of kale to the reds of beets,
      Your nutritional value can't be beat.
      
      You come in all shapes and sizes,
      From the tiny cherry tomato to the giant zucchini surprises,
      The crunch of carrots and the snap of snap peas,
      All make for a perfect veggie feast.
      
      From the fields to our plates,
      You provide us with vitamins, minerals, and fiber, oh greats,
      The goodness of broccoli, the sweetness of corn,
      Eating you is never a bore.
      
      Peppers, onions, and mushrooms too,
      Sautéed or roasted, you add flavor anew,
      Spinach, lettuce, and arugula in our salads,
      You keep us healthy, oh how we're glad.
      
      Vegetables, oh vegetables,
      How we are grateful for your miracles,
      You make our bodies strong and our souls light,
      Forever, you are a precious sight</p>
      </section>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 pt-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1"></h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Some blogs on future Agriculture</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">"The Future of Agriculture:"</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base"> This blog post explores the role of technology in the future of agriculture, from drones and robotics to precision agriculture and data analytics. It discusses how technology is helping farmers to increase yields, reduce waste, and operate more sustainably. </p>
            <Link href="https://www.forbes.com/sites/ashleystahl/2021/06/01/the-future-of-agriculture-7-trends-to-watch/?sh=3a8e2b9075f5" className="mt-3 text-green-500 inline-flex items-center" >
            Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">"The Future of Agriculture"</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">This blog post discusses the importance of sustainable agriculture in the future of food production. It explores the role of regenerative agriculture, organic farming, and agroforestry in promoting soil health, reducing greenhouse gas emissions, and improving food security.</p>
            <Link href="https://www.forbes.com/sites/ashleystahl/2021/06/01/the-future-of-agriculture-7-trends-to-watch/?sh=3a8e2b9075f5" className="mt-3 text-green-500 inline-flex items-center" >
            Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">"Vertical Farming"</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">This blog post explores the potential of vertical farming as a solution to the challenges of food production in an increasingly urbanized world. It discusses the benefits of vertical farming, including year-round production, reduced water usage, and minimized transportation costs, and highlights examples of successful vertical farming operations around the world.</p>
            <Link href="https://www.forbes.com/sites/ashleystahl/2021/06/01/the-future-of-agriculture-7-trends-to-watch/?sh=3a8e2b9075f5" className="mt-3 text-green-500 inline-flex items-center" >
            Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 bg-white body-font relative">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-12">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Any ideas that you have please feel free to share with us.</p>
  </div>
  <div className="lg:w-1/2 md:w-2/3 mx-auto">
    <div className="flex flex-wrap -m-2">
      <div className="p-2 w-1/2">
        <div className="relative">
          <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className="p-2 w-1/2">
        <div className="relative">
          <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="relative">
          <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>
      <div className="p-2 w-full">
        <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Message</button>
      </div>
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <a className="text-green-500">adminCryptCaptivating@gmail.com</a>
        <p className="leading-normal my-5">Crypt Captivating INC.
          <br />Since 2023
        </p>
        <span className="inline-flex">
          <a className="text-green-800">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-4 text-green-800">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-4 text-green-800">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-4 text-green-800">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </div>
</div>
</section>
    </>
  )
}

export default Hero 