import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "./index";
import styles from "@/styles/Home.module.css";

const About = () => {
    return (
        <>
            <Head>
                <title>Crypt captivating</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <div className="">
                <div className="navbar-theme">
                <div className="container flex flex-wrap p-5 pl-10 flex-col text-white md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                  {/* Logo */}
                  <Image src="/Crypt-logo.png" alt="Crypt logo" height="80" width="80" />
                  <span className="ml-3 -mr-14 text-white text-xl">Crypt Captivating</span>
                </a>
                <nav className="ml-96 mr-20 md:mr-auto flex flex-wrap items-center text-base justify-center">
                  <Link href="/" className="mr-5 hover:text-gray-400">Home
                  </Link>
                  <Link href="/components/about" className="mr-5 hover:text-gray-400">
                    About
                  </Link>
                  <Link href="/components/items" className="mr-5 hover:text-gray-400">
                    Items
                  </Link>
                  <Link href="/components/contact" className="mr-5 hover:text-gray-400">Contact
                  </Link>
                  <Link href="/components/wallet" className="mr-5 hover:text-gray-400">Wallet
                  </Link>
                </nav>
                <Link href="/components/items">
                <button className="inline-flex items-center bg-gradient-to-r from-lime-500 to-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l from-green-500 to-lime-600 text-white border-0 -mr-10 py-2 px-5 rounded text-base mt-4 md:mt-0">Buy Necessity
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                </Link>
                
              </div>
                </div>
                <div className="container mt-14 bg-dark-400">
                <Image src="/farmer.jpg" alt="Farmer" width="600" height="500" className='rounded-2xl ml-80 mb-10 pb-10' />
                    <h2 className="text-5xl pt-5 pl-10 pr-10 font-bold text-center">
                        FARMERS ARE THE PILLARS OF THE WORLD
                    </h2>
                    <p className="mt-10 m-24 -mb-2 text-justify text-xl">
                        Providing the essential food and resources necessary for the
                        sustenance of humanity. Their tireless work in the fields, rain or
                        shine, is often taken for granted, but without them, we would not
                        have the luxury of nutritious and affordable food on our tables.
                        From sowing seeds to harvesting crops, farmers work hard every day
                        to ensure that we have access to a variety of fresh produce
                        throughout the year. Their dedication to their craft and their
                        unwavering commitment to providing for their families and
                        communities is truly awe-inspiring. Despite facing numerous
                        challenges such as unpredictable weather patterns, pests and
                        diseases, and market fluctuations, farmers continue to persevere and
                        adapt to changing circumstances. They are the backbone of our food
                        systems, ensuring that we have access to an abundant supply of food
                        that sustains us and contributes to our health and well-being. In
                        addition to providing for our basic needs, farmers also play a vital
                        role in preserving the environment and ensuring the sustainability
                        of our natural resources.
                    </p>
                    <p className="mt-10 m-24 text-justify text-xl mb-20">
                        They employ sustainable farming practices that help to conserve
                        soil, water, and biodiversity, and mitigate the impacts of climate
                        change. It is essential that we recognize and appreciate the
                        contributions of farmers to our society and take steps to support
                        and empower them. By investing in their skills and providing them
                        with the resources and technology they need to succeed, we can
                        ensure a brighter future for ourselves and for generations to come.
                        In short, farmers are the backbone of our world, and it is our
                        responsibility to support and celebrate them for all that they do.
                        Let us take a moment to thank them for their hard work and
                        dedication and honor their invaluable contributions to our society.
                    </p>
                </div>
                <hr className="ml-20 mr-20 mt-10" />
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                👇🏻 Here are some random Farmers Thoughts 👇🏻
                            </h1>
                            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                                gentrify, subway tile poke farm-to-table.
                            </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-200 p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                  </svg>    
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                    Norman Borlaug, agronomist and Nobel laureate:
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                     "The forgotten world of the family farm is disappearing, and rural America is driving headlong into the Brave New World of big agriculture."
                                    </p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>    
                                </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                    Masanobu Fukuoka, farmer and author:
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                     "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings."
                                    </p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>    
                                </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                    Wendell Berry, farmer and writer: 
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                    "Agriculture is an inherently conservative activity, and it takes a long view. We have to look beyond our lifetimes."
                                    </p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>    
                                </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                    Temple Grandin, animal behavior expert:
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                    "I've always been interested in animal behavior, and I keep reading about it because it's so surprising all the time—so many things are going on around us that we neglect to look at. Part of the passion I have for animals comes from wondering, 'What does the world look like from their point of view?'"
                                    </p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>    
                                </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                    Rachel Carson, environmentalist and writer:
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                     "The 'control of nature' is a phrase conceived in arrogance, born of the Neanderthal age of biology and the convenience of man."
                                    </p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>    
                                </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                    Vandana Shiva, environmental activist and writer: 
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                    "The earth is not a machine. It's a living system. It's our home. It's our only home. And we are killing it."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="ml-20 mr-20 mt-20" />
                    </div>
                </section>
                <div>
                    <h2 className="text-3xl text-bold ml-20 mb-10">Innovative Ideas On Selling goods:</h2>
                    <p className="mt-4 m-24 text-justify text-xl mb-10">
                        One agricultural idea that farmers can implement to avoid giving
                        their produce to third parties is to establish direct-to-consumer
                        sales channels. This involves selling their products directly to
                        consumers, bypassing intermediaries such as wholesalers and
                        retailers. One way to do this is by setting up a farm stand or
                        farmers' market booth, where farmers can sell produce directly
                        to customers in their local community. This allows them to earn a
                        higher profit margin by cutting out the middlemen and also provides
                        an opportunity to build relationships with their customers. Another
                        option is to offer a CSA (Community Supported Agriculture) program,
                        where customers pay upfront for a share of the farm's produce and
                        receive a regular supply of fresh, locally-grown fruits and
                        vegetables throughout the growing season.
                    </p>
                    <p className="mt-4 m-24 text-justify text-xl">This provides farmers with
                        a guaranteed market for their products and allows them to plan their
                        crops and harvest accordingly. Farmers can also sell their products
                        online through e-commerce platforms such as Etsy or Shopify. This
                        allows them to reach a wider audience and sell their products
                        outside of their local area. Additionally, farmers can consider
                        value-added processing, such as making jams, jellies, or sauces from
                        their produce. This allows them to increase the shelf life of their
                        products and sell them for a higher price. By establishing
                        direct-to-consumer sales channels, farmers can retain greater
                        control over their products and earn a higher profit margin. It also
                        allows them to build a loyal customer base and establish a stronger
                        connection to their community.
                    </p>
                </div>
                <hr className="ml-20 mr-20" />
                <div>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                                <div className="sm:w-1/2 mb-10 px-4">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
                                    </div>
                                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Lets gather the Money to harvest</h2>
                                    <p className="leading-relaxed text-base mb-2">Food donation is a wonderful way to help those in need and lead an way for our countries development.</p>
                                    <button className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-900 border-0 focus:outline-none hover:bg-gradient-to-l from-green-500 to-lime-600 text-white border-0 mt-5 py-2 px-5 rounded text-base md:mt-0">Raise a fund
                                  </button>
                                </div>
                                <div className="sm:w-1/2 mb-10 px-4">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
                                    </div>
                                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Donate farmers</h2>
                                    <p className="leading-relaxed text-base mb-2">Donate for the people who worked hard in the day and nights, to make you feel good and full filled.</p>
                                    <button className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l from-green-500 to-lime-600 text-white border-0 mt-20 py-2 px-5 rounded text-base md:mt-0">Donate </button>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <hr className="ml-20 mr-20"/>

                <div>
                <p>
                The fields of green stretch far and wide,
                Agriculture's bounty, a source of pride.
                </p>
               
                </div>
               
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-gray-900">Feel free to reach us</h1>
                            <p className="leading-relaxed mt-4">The agricultural sector is facing numerous challenges such as climate change, soil degradation, water scarcity, and pests and diseases. If you are really happy with helping subscribe here.</p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                            <div className="relative mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                            <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
                            <input type="address" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="inline-flex items-center bg-gradient-to-r from-lime-500 to-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l from-green-500 to-lime-600 text-white border-0 -mr-10 py-2 px-5 rounded text-base mr-0 md:mt-0">Do Subscribe
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                        </div>
                    </div>
                </section>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
    }

export default About;
