// Mock data for destinations
const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII war ship.",
    longDescription: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats, as well as its rich cultural heritage and vibrant arts scene. Visitors can explore ancient temples, attend traditional dance performances, and sample delicious Balinese cuisine. The island's natural beauty, from its stunning beaches to its lush rice terraces, makes it a paradise for nature lovers and photographers.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    ],
    price: 1200,
    currency: "USD",
    rating: 4.8,
    location: "Southeast Asia",
    duration: "7-10 days",
    bestTimeToVisit: "April to October",
    tags: ["beach", "culture", "nature"],
    featured: true,
    reviews: [
      {
        id: 101,
        user: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        date: "2023-05-15",
        comment: "Bali was absolutely magical! The beaches were pristine, and the local culture was so rich and welcoming."
      },
      {
        id: 102,
        user: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 4,
        date: "2023-04-22",
        comment: "Great experience overall. The temples were breathtaking, though some tourist spots were a bit crowded."
      },
      {
        id: 103,
        user: "Emma Wilson",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        rating: 5,
        date: "2023-03-10",
        comment: "I'll never forget the sunrise at Mount Batur. Absolutely worth the early wake-up call!"
      }
    ]
  },
  {
    id: 2,
    name: "Santorini, Greece",
    description: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape and its iconic whitewashed, cubiform houses of its two principal towns.",
    longDescription: "Santorini is a volcanic island in the Cyclades group of the Greek islands. It is located between Ios and Anafi islands. It is famous for its dramatic views, stunning sunsets from Oia town, the white-washed houses, and its very own active volcano. Santorini's beauty has made it one of the most popular tourist destinations in Greece. The island is shaped like a crescent with the caldera lagoon in the middle. The main towns of Fira and Oia cling to the cliffs overlooking the caldera and volcano. The island's pumice quarries have made it a major exporter of the material, which is used in construction and as an abrasive. Santorini is also known for its unique agricultural products, particularly its cherry tomatoes and white eggplants, which are made sweeter and more flavorful by the island's volcanic soil.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    ],
    price: 1800,
    currency: "USD",
    rating: 4.9,
    location: "Europe",
    duration: "5-7 days",
    bestTimeToVisit: "April to October",
    tags: ["romantic", "beach", "luxury"],
    featured: true,
    reviews: [
      {
        id: 201,
        user: "David Miller",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "2023-06-20",
        comment: "The most beautiful sunset I've ever seen was in Oia. This place is heaven on earth!"
      },
      {
        id: 202,
        user: "Jessica Taylor",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        rating: 5,
        date: "2023-05-17",
        comment: "We had our honeymoon in Santorini and it was perfect. The views are even better than in photos."
      },
      {
        id: 203,
        user: "Robert Garcia",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        rating: 4,
        date: "2023-04-05",
        comment: "Beautiful island but quite expensive. Still, the experience was worth every penny."
      }
    ]
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    description: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
    longDescription: "Kyoto served as Japan's capital and the emperor's residence from 794 until 1868. It is now the country's seventh largest city with a population of 1.4 million people and a modern face. Over the centuries, Kyoto was destroyed by many wars and fires, but due to its exceptional historic value, the city was dropped from the list of target cities for the atomic bomb and escaped destruction during World War II. Countless temples, shrines and other historically priceless structures survive in the city today. Some of Kyoto's most famous temples include Kiyomizu-dera, a magnificent wooden temple supported by pillars off the slope of a mountain; Kinkaku-ji, the Temple of the Golden Pavilion; and Ginkaku-ji, the Temple of the Silver Pavilion. The city's numerous Buddhist temples, Shinto shrines, palaces and gardens, many of which are listed collectively by UNESCO as a World Heritage Site, are among Japan's most treasured cultural assets.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    price: 1500,
    currency: "USD",
    rating: 4.7,
    location: "Asia",
    duration: "7-10 days",
    bestTimeToVisit: "March to May and September to November",
    tags: ["culture", "history", "temples"],
    featured: true,
    reviews: [
      {
        id: 301,
        user: "Thomas Wright",
        avatar: "https://randomuser.me/api/portraits/men/39.jpg",
        rating: 5,
        date: "2023-04-12",
        comment: "Kyoto is like stepping back in time. The temples and gardens are incredibly peaceful and beautiful."
      },
      {
        id: 302,
        user: "Sophia Kim",
        avatar: "https://randomuser.me/api/portraits/women/51.jpg",
        rating: 4,
        date: "2023-03-28",
        comment: "I visited during cherry blossom season and it was magical. Just be prepared for crowds during this time."
      },
      {
        id: 303,
        user: "James Wilson",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 5,
        date: "2023-02-15",
        comment: "The food in Kyoto is amazing! Don't miss trying traditional Kaiseki cuisine while you're there."
      }
    ]
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    description: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar.",
    longDescription: "Machu Picchu stands 2,430 meters above sea level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height; its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments. The natural setting, on the eastern slopes of the Andes, encompasses the upper Amazon basin with its rich diversity of flora and fauna. The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish conquest. Although known locally, it was not known to the Spanish during the colonial period and remained unknown to the outside world until American historian Hiram Bingham brought it to international attention in 1911. Machu Picchu was built in the classical Inca style, with polished dry-stone walls. Its three primary structures are the Intihuatana, the Temple of the Sun, and the Room of the Three Windows. Most of the outlying buildings have been reconstructed in order to give tourists a better idea of how they originally appeared.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
      "https://images.unsplash.com/photo-1548791693-0a9ece428c5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    price: 1600,
    currency: "USD",
    rating: 4.9,
    location: "South America",
    duration: "3-5 days",
    bestTimeToVisit: "May to September",
    tags: ["history", "hiking", "adventure"],
    featured: false,
    reviews: [
      {
        id: 401,
        user: "Daniel Brown",
        avatar: "https://randomuser.me/api/portraits/men/83.jpg",
        rating: 5,
        date: "2023-05-30",
        comment: "The trek to Machu Picchu was challenging but absolutely worth it. One of the most incredible places I've ever seen."
      },
      {
        id: 402,
        user: "Olivia Martinez",
        avatar: "https://randomuser.me/api/portraits/women/39.jpg",
        rating: 4,
        date: "2023-04-18",
        comment: "Make sure to book your tickets well in advance. The views are breathtaking but it can get crowded."
      },
      {
        id: 403,
        user: "William Lee",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        rating: 5,
        date: "2023-03-22",
        comment: "Seeing the sunrise over Machu Picchu was a spiritual experience. Don't miss it!"
      }
    ]
  },
  {
    id: 5,
    name: "Paris, France",
    description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
    longDescription: "Paris is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres. The City of Paris is the centre and seat of government of the Île-de-France, or Paris Region, which has an estimated official 2020 population of 12,278,210, or about 18 percent of the population of France. The Paris Region had a GDP of €709 billion in 2017. According to the Economist Intelligence Unit Worldwide Cost of Living Survey in 2018, Paris was the second most expensive city in the world, after Singapore, and ahead of Zürich, Hong Kong, Oslo and Geneva. Another source ranked Paris as most expensive, on a par with Singapore and Hong Kong, in 2018. The city is a major railway, highway, and air-transport hub served by two international airports: Paris-Charles de Gaulle and Paris-Orly. Opened in 1900, the city's subway system, the Paris Métro, serves 5.23 million passengers daily; it is the second busiest metro system in Europe after the Moscow Metro.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80",
      "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    price: 1700,
    currency: "USD",
    rating: 4.6,
    location: "Europe",
    duration: "5-7 days",
    bestTimeToVisit: "April to June and October to early November",
    tags: ["culture", "food", "art", "romantic"],
    featured: true,
    reviews: [
      {
        id: 501,
        user: "Jennifer Adams",
        avatar: "https://randomuser.me/api/portraits/women/18.jpg",
        rating: 5,
        date: "2023-06-10",
        comment: "Paris is always a good idea! The food, the art, the architecture - everything was perfect."
      },
      {
        id: 502,
        user: "Ryan Thompson",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 4,
        date: "2023-05-05",
        comment: "The Louvre alone is worth the trip. Plan to spend at least a full day there."
      },
      {
        id: 503,
        user: "Lisa Wang",
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        rating: 5,
        date: "2023-04-15",
        comment: "We visited during spring when the cherry blossoms were blooming. It was magical walking along the Seine."
      }
    ]
  },
  {
    id: 6,
    name: "Cape Town, South Africa",
    description: "Cape Town is a port city on South Africa's southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain's flat top, from which there are sweeping views of the city.",
    longDescription: "Cape Town is the oldest and second-largest city in South Africa, after Johannesburg, and also the legislative capital of the country. Colloquially named the Mother City, it is the largest city of the Western Cape province and forms part of the City of Cape Town metropolitan municipality. The Parliament of South Africa sits in Cape Town. The other two capitals are located in Pretoria (the executive capital where the Presidency is based) and Bloemfontein (the judicial capital where the Supreme Court of Appeal is located). The city is known for its harbour, for its natural setting in the Cape Floristic Region, and for landmarks such as Table Mountain and Cape Point. Cape Town is home to 64% of the Western Cape's population. The city was named the World Design Capital for 2014 by the International Council of Societies of Industrial Design. In 2014, Cape Town was named the best place in the world to visit by both The New York Times and The Daily Telegraph.",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    images: [
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1564389179878-c5ca6a72b2cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    price: 1400,
    currency: "USD",
    rating: 4.7,
    location: "Africa",
    duration: "7-10 days",
    bestTimeToVisit: "October to April",
    tags: ["nature", "adventure", "wildlife"],
    featured: false,
    reviews: [
      {
        id: 601,
        user: "Christopher Davis",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        rating: 5,
        date: "2023-03-15",
        comment: "The views from Table Mountain are unbelievable. Cape Town has the perfect mix of city, mountains, and beaches."
      },
      {
        id: 602,
        user: "Amanda Wilson",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 4,
        date: "2023-02-20",
        comment: "We did a day trip to the Cape of Good Hope and saw penguins at Boulders Beach. Highly recommend!"
      },
      {
        id: 603,
        user: "Mark Johnson",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        rating: 5,
        date: "2023-01-10",
        comment: "The food scene in Cape Town is amazing and very affordable compared to other major cities."
      }
    ]
  },
  {
    id: 7,
    name: "New York City, USA",
    description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers.",
    longDescription: "New York City (NYC), often called simply New York, is the most populous city in the United States. With an estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the U.S. state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass. With almost 20 million people in its metropolitan statistical area and approximately 23 million in its combined statistical area, it is one of the world's most populous megacities. New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    price: 2000,
    currency: "USD",
    rating: 4.5,
    location: "North America",
    duration: "5-7 days",
    bestTimeToVisit: "April to June and September to early November",
    tags: ["city", "culture", "food", "shopping"],
    featured: true,
    reviews: [
      {
        id: 701,
        user: "Emily Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 4,
        date: "2023-05-25",
        comment: "So much to see and do! We barely scratched the surface in a week. The museums are world-class."
      },
      {
        id: 702,
        user: "Jason Kim",
        avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        rating: 5,
        date: "2023-04-10",
        comment: "The food scene is incredible - from Michelin star restaurants to the best pizza slices and bagels."
      },
      {
        id: 703,
        user: "Samantha Clark",
        avatar: "https://randomuser.me/api/portraits/women/57.jpg",
        rating: 4,
        date: "2023-03-05",
        comment: "Central Park is a must-visit. It's amazing to have such a beautiful green space in the middle of the city."
      }
    ]
  },
  {
    id: 8,
    name: "Maldives",
    description: "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. It's known for its beaches, blue lagoons and extensive reefs.",
    longDescription: "The Maldives, officially the Republic of Maldives, is a small archipelagic state in South Asia, situated in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 700 kilometres from the Asian continent's mainland. The chain of 26 atolls stretches from Ihavandhippolhu Atoll in the north to Addu Atoll in the south. Comprising a territory spanning roughly 298 square kilometres, the Maldives is one of the world's most geographically dispersed sovereign states as well as the smallest Asian country by land area and population, with around 515,696 inhabitants. Malé is the capital and the most populated city, traditionally called the 'King's Island' where the ancient royal dynasties ruled for its central location. The Maldives is one of the world's most geographically dispersed countries, as well as the smallest Asian country by both land area and population, with around 515,696 inhabitants. It is also the smallest Muslim-majority country by land area.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"
    ],
    price: 3000,
    currency: "USD",
    rating: 4.9,
    location: "Asia",
    duration: "7-10 days",
    bestTimeToVisit: "November to April",
    tags: ["beach", "luxury", "romantic", "snorkeling"],
    featured: true,
    reviews: [
      {
        id: 801,
        user: "Alexander White",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        rating: 5,
        date: "2023-06-05",
        comment: "Paradise on Earth! The overwater bungalows are worth every penny for a once-in-a-lifetime experience."
      },
      {
        id: 802,
        user: "Natalie Green",
        avatar: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 5,
        date: "2023-05-12",
        comment: "The snorkeling and diving are incredible. We saw so many colorful fish, rays, and even sharks!"
      },
      {
        id: 803,
        user: "Brian Taylor",
        avatar: "https://randomuser.me/api/portraits/men/78.jpg",
        rating: 4,
        date: "2023-04-20",
        comment: "Beautiful but expensive. Make sure to book an all-inclusive package to manage costs."
      }
    ]
  }
];

export default destinations;