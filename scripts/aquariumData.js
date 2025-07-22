export const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://i.pinimg.com/736x/ab/91/d4/ab91d4493c9143b10412c9a288d33a18.jpg"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://shyandfearfuldogs.com/wp-content/uploads/2017/04/Dory-Moments.jpg"
        },
        {
            name: "Fred",
            species: "Lionfish",
            length: 13,
            location: "South Pacific and Indian Oceans",
            diet: "Carnivore",
            image: "https://www.seamester.com/wp-content/uploads/2017/03/lionfish-1-big.jpg"
        },
        {
            name: "Bubbles",
            species: "Queen Angelfish",
            length: 12,
            location: "Coral reefs of the western Atlantic Ocean",
            diet: "Omnivore",
            image: "https://www.swelluk.com/media/catalog/product/q/u/queen_angelfish.png?store=default&image-type=image"
        },
        {
            name: "Maui",
            species: "Reef Triggerfish",
            length: 10,
            location: "Indo-Pacific and eastern central Pacific",
            diet: "Primarily Carnivore",
            image: "https://molokinicrater.com/wp-content/uploads/2017/12/humuhumu-fish.jpg"
        },
        {
            name: "Fin Diesel",
            species: "Royal Gramma",
            length: 3,
            location: "The Caribbean Sea and Gulf of Mexico",
            diet: "Carnivore",
            image: "https://www.coralifeproducts.com/-/media/Project/OneWeb/Coralife/Images/Misc/Care-Guide/Royal-Gramma.png"
        },
        {
            name: "Bubble Fett",
            species: "Blue Chromis",
            length: 5,
            location: "Gulf of Mexico, Caribbean Sea, and western Atlantic Ocean",
            diet: "Omnivore",
            image: "https://www.sosuabeachdr.com/wp-content/uploads/2018/10/chromis-sosuareef4.jpg"
        },
        {
            name: "Bruce",
            species: "Great White Shark",
            length: 20, 
            location: "Pacific Ocean",
            diet: "Carnivore",
            image: "https://www.usatoday.com/gcdn/presto/2022/03/24/USAT/fe333d8d-ef90-429c-9474-1a22c2d8bf3c-SHARK_FRIENDS_ADOBE_.jpg?crop=1512,850,x331,y152&width=660&height=371&format=pjpg&auto=webp"
        },
        {
            name: "Gill",
            species: "Moorish Idol",
            length: 8,
            location: "Indo-Pacific",
            diet: "Omnivore",
            image: "https://krakencorals.co.uk/media/catalog/product/cache/80ed15a9f83d2b6e90ecb6abc6958a25/_/m/_m_o_moorish_idol_15.jpg"
        },
        {
            name: "Flounder",
            species: "Yellow Tang",
            length: 9, 
            location: "Hawaiian Reefs",
            diet: "Herbivore",
            image: "https://www.aquariumofpacific.org/images/made_new/email_images-yellow_tang_in_front_of_coral_600_q85.jpg"
        },
        {
            name: "Peach",
            species: "Starfish",
            length: 7,
            location: "Monterey Bay",
            diet: "Carnivore",
            image: "https://originaldiving.d3r.site/images/blog_gallery/565262-red-starfish.jpg"
        },
        {
            name: "Anchor",
            species: "Hammerhead Shark",
            length: 11,
            location: "Galápagos Islands",
            diet: "Carnivore",
            image: "https://www.sharksandrays.com/wp-content/uploads/2020/09/Great-Hammerhead-Shark-242.jpg"
        },
        {
            name: "Destiny",
            species: "Whale Shark",
            length: 35, 
            location: "Monterey Bay Aquarium",
            diet: "Filter Feeder",
            image: "https://www.nhm.ac.uk/content/dam/nhm-www/discover/whale-sharks/whale-shark-swimming-full-width.jpg.thumb.1160.1160.png"
        },
        {
            name: "Bailey",
            species: "Beluga Whale",
            length: 20, 
            location: "Arctic Ocean",
            diet: "Carnivore",
            image: "https://www.georgiaaquarium.org/wp-content/uploads/2018/09/beluga-whale-webcam-9.jpg"
        },
        {
            name: "Coral",
            species: "Angelfish",
            length: 40, // divisible by 5
            location: "Coral Triangle",
            diet: "Omnivore",
            image: "https://cdn.britannica.com/55/13455-004-5E6843A7.jpg"
        }
    ],
    tips: [
        {
            topic: "Setting up your aquarium",
            text: "Choose a suitable tank size based on the fish species you want to keep. Ensure proper filtration, heating, and lighting. Decorate with plants and rocks to create a natural habitat."
        },
        {
            topic: "Water quality",
            text: "Regularly test the water parameters such as pH, ammonia, nitrite, and nitrate levels. Perform partial water changes to maintain good water quality and remove toxins."
        },
        {
            topic: "Feeding",
            text: "Feed your fish a balanced diet appropriate for their species. Avoid overfeeding, as it can lead to water quality issues. Remove uneaten food after feeding."
        },
        {
            topic: "Observation and monitoring",
            text: "Regularly observe your fish for signs of stress or illness. Monitor daily for any irregular behavior."
        },
        {
            topic: "Other considerations",
            text: "Avoid touching the fish, loud noises and vibrations, don't overcrowd the tank, and ensure compatibility of species to prevent aggression."
        }
    ],
    locations: [
        {
            name: "Great Barrier Reef",
            country: "Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system, located off the northeastern coast of Australia. It stretches over 2,300 kilometers (1,400 miles) and is composed of nearly 3,000 individual reefs and 600 islands."
        },
        {
            name: "South Pacific",
            country: "Guam, New Zealand, Samoa, and serveral more",
            description: "The South Pacific Ocean is a vast body of water located south of the equator, extending towards Antarctica. It's characterized by deep basins, oceanic ridges, and a prominent subtropical gyre. The South Pacific is also known for its high biological productivity due to upwelling and strong currents."
        },
        {
            name: "Indian Ocean",
            country: "India, Indonesia, Somalia, Saudi Arabia, and several more",
            description: "The Indian Ocean is the third-largest of the world's five oceans, covering about 20% of the Earth's surface. It is located south of Asia, east of Africa, west of Australia, and north of Antarctica. The ocean is known for its complex geological structure, warm waters, and significant impact on global climate."
        },
        {
            name: "Western Atlantic Ocean",
            country: "United States, Mexico, Cuba, Dominican Republic, and several more",
            description: "The western part of the Atlantic Ocean, particularly the North Atlantic, is characterized by its continental shelf, deep trenches, and significant currents. The ocean's western side also includes the Caribbean Sea, a distinct region with its own unique features and currents."
        },
        {
            name: "Indo-Pacific",
            country: "Australia, India, Japan, South Korea, and the countries of ASEAN (Association of Southeast Asian Nations). ",
            description: "The Indo-Pacific is a vast biogeographic region encompassing the tropical waters of the Indian and Pacific Oceans, along with the connecting seas. It's particularly relevant in marine biology and related fields due to the interconnectedness of many marine habitats across this area."
        },
        {
            name: "Central Pacific",
            country: "Kiribati, Nauru, Tuvalu, the Marshall Islands, Micronesia, Palau, Fiji, and Samoa.",
            description: "The central Pacific Ocean is a vast and geologically stable area characterized by expansive underwater plains, numerous seamounts, and volcanic activity. It lies between the eastern and western regions of the Pacific and is known for its deep ocean floor and unique geological formations."
        },
        {
            name: "Caribbean Sea",
            country: "Bahamas, Cuba, Dominican Republic, Jamaica, Puerto Rico, and several more",
            description: "The Caribbean Sea is a large tropical sea in the Western Atlantic Ocean, known for its beautiful turquoise waters, vibrant coral reefs, and numerous islands. The sea is renowned for its rich biodiversity and is a popular destination for tourism, watersports, and fishing."
        },
        {
            name: "Gulf of Mexico",
            country: "The United States, Mexico, and Cuba",
            description: "Surrounded by the United States, Mexico and Cuba, the Gulf of Mexico is 600,000 square miles of warm, sunlit waters and a steady food supply for an array of fish, wildlife and humans alike. The Gulf is a semi-enclosed sea that connects to the Atlantic Ocean through the Florida Straits and the Yucatán Channel."
        }
    ]
}
