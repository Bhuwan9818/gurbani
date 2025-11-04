// Sample tour data
const tours = [
    {
        id: 1,
        name: "Sikkim & Darjeeling Delight",
        description: "Discover the Eastern Himalayas! Experience the breathtaking beauty of the Himalayas with our Sikkim & Darjeeling Delight tour. From serene lakes to majestic mountain views, this journey promises memories for a lifetime.",
        price: "₹13,499/- per person",
        image: "/images/WhatsApp_Image_2025-10-18_at_22.30.40_3b7f63c6.jpg",
        duration: "4 Nights / 5 Days",
        itinerary: [
            "Day 1: Arrival in NJP / Bagdogra and transfer to Darjeeling",
            "Day 2: Darjeeling sightseeing - Tiger Hill, Batasia Loop",
            "Day 3: Transfer to Gangtok, Sikkim - Gangtok exploration",
            "Day 4: Tsomgo Lake and Baba Mandir",
            "Day 5: Return to NJP / Bagdogra for departure"
        ],
        includes: ["Accommodation in 3★ Hotels", "Daily Breakfast & Dinner", "Private Cab Sightseeing", "All Applicable Taxes"],
        whyChooseUs: ["Hand-picked hotels inspected by our own team", "Friendly, professional drivers familiar with destinations", "24×7 travel assistance & customer support", "Hassle-free, customized tour experience"],
        contact: "Gurbani Tour & Travel\n✉️ Email: gurbanitourandtravel@gmail.com\n📱 +91 7703918807 / 7838251002\n🏢 Shop No. 112, 1st Floor, W Mall, Manglam Place, Sector-3, Rohini, Delhi – 110085"
    },
    {
        id: 2,
        name: "Goa Delight Tour",
        description: "Sun. Sand. Sea. Repeat.",
        price: "₹9,999/- per person",
        image: "/images/WhatsApp_Image_2025-10-18_at_22.30.40_8a793487.jpg",
        duration: "4 Nights / 5 Days",
        itinerary: [
            "Day 1: Arrival in Goa and transfer to hotel",
            "Day 2: North Goa sightseeing - Calangute, Baga beaches",
            "Day 3: South Goa exploration - Fort Aguada, Colva",
            "Day 4: Free time for water sports and relaxation",
            "Day 5: Departure from Goa"
        ],
        includes: ["3★ Hotel Accommodation", "Breakfast & Dinner", "Sightseeing Cab", "Airport Transfers"],
        whyChooseUs: ["Hand-picked hotels inspected by our own team", "Friendly, professional drivers familiar with destinations", "24×7 travel assistance & customer support", "Hassle-free, customized tour experience"],
        contact: "Gurbani Tour & Travel\n✉️ Email: gurbanitourandtravel@gmail.com\n📱 +91 7703918807 / 7838251002\n🏢 Shop No. 112, 1st Floor, W Mall, Manglam Place, Sector-3, Rohini, Delhi – 110085"
    },
    {
        id: 3,
        name: "Kerala Tour Package",
        description: "Where Nature Whispers and Serenity Smiles 🌿 Experience God's Own Country Like Never Before!",
        price: "₹12,999/- per person",
        image: "/images/WhatsApp_Image_2025-10-18_at_22.30.40_c8d97d2d.jpg",
        duration: "5 Nights / 6 Days",
        itinerary: [
            "Day 1: Arrival in Cochin - Sightseeing and transfer to Munnar",
            "Day 2: Munnar sightseeing - Tea plantations and Eravikulam National Park",
            "Day 3: More of Munnar - Mattupetty Dam and Echo Point",
            "Day 4: Transfer to Thekkady - Periyar Wildlife Sanctuary",
            "Day 5: Transfer to Alleppey - Houseboat stay and backwater cruise",
            "Day 6: Transfer to Kovalam - Beach relaxation and departure"
        ],
        includes: ["3★ Hotels + Houseboat Stay", "Breakfast & Dinner Included", "Private Vehicle for Sightseeing", "Toll, Parking & All Taxes", "Professional Travel Support"],
        whyChooseUs: ["Hand-picked hotels inspected by our own team", "Friendly, professional drivers familiar with destinations", "24×7 travel assistance & customer support", "Hassle-free, customized tour experience"],
        contact: "Gurbani Tour & Travel\n✉️ Email: gurbanitourandtravel@gmail.com\n📱 +91 7703918807 / 7838251002\n🏢 Shop No. 112, 1st Floor, W Mall, Manglam Place, Sector-3, Rohini, Delhi – 110085"
    },
    {
        id: 4,
        name: "Himachal Tour Package",
        description: "Experience the breathtaking beauty of Himachal Pradesh with our comprehensive tour package.",
        price: "₹5,999/- per person",
        image: "/images/WhatsApp_Image_2025-10-18_at_22.30.43_2cddcccb.jpg",
        duration: "4 Nights / 5 Days",
        itinerary: [
            "Day 1: Arrival in Delhi and transfer to Manali",
            "Day 2: Manali local sightseeing - Hadimba Temple, Vashisht Hot Springs",
            "Day 3: Solang Valley and Manikaran visit",
            "Day 4: Kullu sightseeing and local exploration",
            "Day 5: Return to Delhi for departure"
        ],
        includes: ["3★ Hotel Accommodation", "Breakfast & Dinner", "Sightseeing by Private Vehicle", "All Taxes & Toll Parking"],
        whyChooseUs: ["Hand-picked hotels inspected by our own team", "Friendly, professional drivers familiar with destinations", "24×7 travel assistance & customer support", "Hassle-free, customized tour experience"],
        contact: "Gurbani Tour & Travel\n✉️ Email: gurbanitourandtravel@gmail.com\n📱 +91 7703918807 / 7838251002\n🏢 Shop No. 112, 1st Floor, W Mall, Manglam Place, Sector-3, Rohini, Delhi – 110085"
    },
    {
        id: 5,
        name: "Rajasthan Heritage Tour",
        description: "Experience the royal heritage and cultural richness of Rajasthan with our comprehensive tour package.",
        price: "₹11,999/- per person",
        image: "/images/WhatsApp_Image_2025-10-18_at_22.30.43_70ebbfd3.jpg",
        duration: "4 Nights / 5 Days",
        itinerary: [
            "Day 1: Arrival in Jaipur - Pink City sightseeing",
            "Day 2: Transfer to Jodhpur - Blue City exploration",
            "Day 3: Transfer to Udaipur - City Palace and Lake Pichola",
            "Day 4: Transfer to Mount Abu - Nakki Lake and temples",
            "Day 5: Return to Jaipur/Delhi for departure"
        ],
        includes: ["3★ Hotel Accommodation", "Breakfast & Dinner", "Private Cab for Sightseeing", "Taxes & Parking"],
        whyChooseUs: ["Hand-picked hotels inspected by our own team", "Friendly, professional drivers familiar with destinations", "24×7 travel assistance & customer support", "Hassle-free, customized tour experience"],
        contact: "Gurbani Tour & Travel\n✉️ Email: gurbanitourandtravel@gmail.com\n📱 +91 7703918807 / 7838251002\n🏢 Shop No. 112, 1st Floor, W Mall, Manglam Place, Sector-3, Rohini, Delhi – 110085"
    },
    {
        id: 6,
        name: "Kashmir Paradise Tour",
        description: "Heaven on Earth Awaits You! Experience the breathtaking beauty of Kashmir Valley with our comprehensive tour package.",
        price: "₹15,499/- per person",
        image: "/images/WhatsApp_Image_2025-10-18_at_22.30.43_602b37ea.jpg",
        duration: "4 Nights / 5 Days",
        itinerary: [
            "Day 1: Arrival in Srinagar - Houseboat stay on Dal Lake",
            "Day 2: Gulmarg sightseeing - Gondola ride and meadows",
            "Day 3: Pahalgam exploration - Betaab Valley and Aru Valley",
            "Day 4: Sonmarg visit - Thajiwas Glacier and Zozilla Pass",
            "Day 5: Return to Srinagar for departure"
        ],
        includes: ["3★ Hotel + Houseboat Stay", "Breakfast & Dinner", "Private Cab for Sightseeing"],
        whyChooseUs: ["Hand-picked hotels inspected by our own team", "Friendly, professional drivers familiar with destinations", "24×7 travel assistance & customer support", "Hassle-free, customized tour experience"],
        contact: "Gurbani Tour & Travel\n✉️ Email: gurbanitourandtravel@gmail.com\n📱 +91 7703918807 / 7838251002\n🏢 Shop No. 112, 1st Floor, W Mall, Manglam Place, Sector-3, Rohini, Delhi – 110085"
    },
    {
        id: 7,
        name: "Kerala Tour Package",
        description: "Where Nature Whispers and Serenity Smiles 🌿 Experience God's Own Country Like Never Before!",
        price: "₹12,999/- per person",
        image: "/images/WhatsApp_Image_2025-10-18_at_22.30.40_c8d97d2d.jpg",
        duration: "5 Nights / 6 Days",
        itinerary: [
            "Day 1: Arrival in Cochin - Sightseeing and transfer to Munnar",
            "Day 2: Munnar sightseeing - Tea plantations and Eravikulam National Park",
            "Day 3: More of Munnar - Mattupetty Dam and Echo Point",
            "Day 4: Transfer to Thekkady - Periyar Wildlife Sanctuary",
            "Day 5: Transfer to Alleppey - Houseboat stay and backwater cruise",
            "Day 6: Transfer to Kovalam - Beach relaxation and departure"
        ],
        includes: ["3★ Hotels + Houseboat Stay", "Breakfast & Dinner Included", "Private Vehicle for Sightseeing", "Toll, Parking & All Taxes", "Professional Travel Support"],
        whyChooseUs: ["Hand-picked hotels inspected by our own team", "Friendly, professional drivers familiar with destinations", "24×7 travel assistance & customer support", "Hassle-free, customized tour experience"],
        contact: "Gurbani Tour & Travel\n✉️ Email: gurbanitourandtravel@gmail.com\n📱 +91 7703918807 / 7838251002\n🏢 Shop No. 112, 1st Floor, W Mall, Manglam Place, Sector-3, Rohini, Delhi – 110085"
    },
    {
        id: 8,
        name: "Ayodhya, Prayagraj & Varanasi Tour Package",
        description: "Embark on a spiritual journey through Ayodhya, Prayagraj, and Varanasi, exploring sacred sites, temples, and cultural heritage.",
        price: "₹10,700/- per person",
        image: "/images/WhatsApp_Image_2025-10-18_at_22.30.44_8e4c1c17.jpg",
        duration: "4 Nights / 5 Days",
        itinerary: [
            "Day 1: Arrival at Ayodhya - Pick-up from Ayodhya Cantt Railway Station, Check-in at hotel, Sightseeing: Ram Janmabhoomi Temple, Hanuman Garhi Temple, Kanak Bhawan, Treta Ke Thakur, Guptar Ghat (Evening Aarti)",
            "Day 2: Ayodhya → Prayagraj - Drive to Prayagraj (approx. 170 km / 4.5 hrs), En route visit Shringverpur Dham, Sightseeing: Triveni Sangam, Anand Bhawan, Khusro Bagh, Hanuman Temple (Sangam Area)",
            "Day 3: Prayagraj → Varanasi - Drive to Varanasi (approx. 120 km / 3 hrs), Evening Ganga Aarti at Dashashwamedh Ghat, Leisure walk along the Ghats",
            "Day 4: Varanasi Sightseeing - Optional: Morning Boat Ride at Assi Ghat, Visit: Kashi Vishwanath Temple, Annapurna Temple, Tulsi Manas Mandir, Durga Temple, Bharat Mata Temple, Banaras Hindu University (BHU), Sarnath (Dhamek Stupa, Archaeological Museum)",
            "Day 5: Departure - Breakfast and check-out, Visit any remaining attractions or enjoy leisure time, Drop at Varanasi Railway Station"
        ],
        includes: ["All Transfers & Sightseeing by Private 7-Seater Vehicle", "Comfortable 3★ Hotel Accommodation", "Daily Breakfast", "Experienced Driver for Sightseeing"],
        excludes: ["Entry Tickets (e.g., Boats, ATVs, Monuments)", "Flight / Train Tickets", "Personal Expenses"],
        whyChooseUs: ["Hand-picked hotels inspected by our own team", "Friendly, professional drivers familiar with destinations", "24×7 travel assistance & customer support", "Hassle-free, customized tour experience"],
        contact: "Gurbani Tour & Travel\n✉️ Email: gurbanitourandtravel@gmail.com\n📱 +91 7703918807 / 7838251002\n🏢 Shop No. 112, 1st Floor, W Mall, Manglam Place, Sector-3, Rohini, Delhi – 110085"
    }
];

// Display tours
function displayTours() {
    const tourList = document.getElementById('tour-list');
    tours.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.innerHTML = `
            <img src="${tour.image}" alt="${tour.name}">
            <div class="tour-card-content">
                <h3>${tour.name}</h3>
                <p>${tour.description}</p>
                <div class="tour-price">${tour.price}</div>
                <a href="tour-detail.html?id=${tour.id}" class="btn-primary">View Details</a>
            </div>
        `;
        tourList.appendChild(tourCard);
    });
}

// Scroll to tours section
function scrollToTours() {
    document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
}



// Slider functionality
// let currentSlide = 0;
// const sliderContainer = document.querySelector('.slider-container');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const indicatorsContainer = document.querySelector('.slider-indicators');

// function createSlider() {
//     tours.forEach((tour, index) => {
//         const slideDiv = document.createElement('div');
//         slideDiv.className = 'slide';
//         slideDiv.style.width = '100%';
//         slideDiv.style.height = '100%';
//         slideDiv.style.position = 'relative';

//         const img = document.createElement('img');
//         img.src = "1.png";
//         img.alt = tour.name;
//         img.style.width = '100%';
//         img.style.height = '100%';
//         img.style.objectFit = 'contain';
//         img.style.display = 'block';
//         img.style.cursor = 'pointer';
//         img.addEventListener('click', () => {
//             window.location.href = `tour-detail.html?id=${tour.id}`;
//         });

//         slideDiv.appendChild(img);
//         sliderContainer.appendChild(slideDiv);

//         // Create indicator
//         const indicator = document.createElement('div');
//         indicator.className = 'slider-indicator';
//         if (index === 0) indicator.classList.add('active');
//         indicator.addEventListener('click', () => {
//             showSlide(index);
//         });
//         indicatorsContainer.appendChild(indicator);
//     });
// }

// function showSlide(index) {
//     const slides = sliderContainer.children;
//     const indicators = document.querySelectorAll('.slider-indicator');

//     currentSlide = index;

//     // Add fade effect for professional transition
//     sliderContainer.style.opacity = '0.3';
//     setTimeout(() => {
//         sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
//         sliderContainer.style.opacity = '1';
//     }, 150);

//     // Update indicators
//     indicators.forEach((indicator, i) => {
//         indicator.classList.toggle('active', i === currentSlide);
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % sliderContainer.children.length;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + sliderContainer.children.length) % sliderContainer.children.length;
//     showSlide(currentSlide);
// }

// prevButton.addEventListener('click', prevSlid 

// // // Auto slide every 4 seconds
// setInterval(nextSlide, 4000);

// // Initialize
// createSlider();
displayTours();
