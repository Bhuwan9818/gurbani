// Get tour ID from URL parameters
function getTourIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Load tour details
function loadTourDetails() {
    const tourId = getTourIdFromUrl();
    const tour = tours.find(t => t.id === tourId);

    if (!tour) {
        document.getElementById('tour-detail').innerHTML = '<div class="container"><h1>Tour not found</h1></div>';
        return;
    }

    // Update page title
    document.title = `${tour.name} - Gurbaan`;

    // Populate tour details
    document.getElementById('tour-image').src = tour.image;
    document.getElementById('tour-image').alt = tour.name;
    document.getElementById('tour-title').textContent = tour.name;
    document.getElementById('tour-duration').textContent = tour.duration;
    document.getElementById('tour-price').textContent = tour.price;
    document.getElementById('tour-description').textContent = tour.description;

    // Populate itinerary
    const itineraryList = document.getElementById('itinerary-list');
    tour.itinerary.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'itinerary-day';
        dayElement.textContent = day;
        itineraryList.appendChild(dayElement);
    });

    // Populate includes
    const includesList = document.getElementById('includes-list');
    tour.includes.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = item;
        includesList.appendChild(itemElement);
    });

    // Populate excludes, why choose us, and contact for all tours
    if (tour.id === 8) {
        // Show excludes section for tour ID 8
        const excludesSection = document.getElementById('excludes-section');
        excludesSection.style.display = 'block';
        const excludesList = document.getElementById('excludes-list');
        tour.excludes.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = item;
            excludesList.appendChild(itemElement);
        });
    }

    // Show why choose us and contact for all tours
    if (tour.whyChooseUs) {
        // Show excludes section
        const excludesSection = document.getElementById('excludes-section');
        excludesSection.style.display = 'block';
        const excludesList = document.getElementById('excludes-list');
        tour.excludes.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = item;
            excludesList.appendChild(itemElement);
        });

        // Show why choose us section
        const whyChooseUsSection = document.getElementById('why-choose-us-section');
        whyChooseUsSection.style.display = 'block';
        const whyChooseUsList = document.getElementById('why-choose-us-list');
        tour.whyChooseUs.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = item;
            whyChooseUsList.appendChild(itemElement);
        });

        // Show contact section
        // const contactSection = document.getElementById('contact-section');
        // contactSection.style.display = 'block';
        // const contactInfo = document.getElementById('contact-info');
        // const lines = tour.contact.split('\n');
        // lines.forEach(line => {
        //     if (line.includes('Email:')) {
        //         const p = document.createElement('p');
        //         p.innerHTML = `<strong>Email:</strong> <a href="mailto:${line.split('Email: ')[1]}">${line.split('Email: ')[1]}</a>`;
        //         contactInfo.appendChild(p);
        //     } else if (line.includes('+91')) {
        //         const p = document.createElement('p');
        //         p.innerHTML = `<strong>Phone:</strong> <a href="tel:${line}">${line}</a>`;
        //         contactInfo.appendChild(p);
        //     } else if (line.includes('Shop No.')) {
        //         const p = document.createElement('p');
        //         p.innerHTML = `<strong>Address:</strong> ${line}`;
        //         contactInfo.appendChild(p);
        //     } else {
        //         const p = document.createElement('p');
        //         p.textContent = line;
        //         contactInfo.appendChild(p);
        //     }
        // });
    }

}

// Booking form submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('book-name').value;
    const email = document.getElementById('book-email').value;
    const date = document.getElementById('book-date').value;
    const tourId = getTourIdFromUrl();
    const tour = tours.find(t => t.id === tourId);

    // Store booking in localStorage (simple persistence)
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
        tourId: tourId,
        tourName: tour.name,
        name: name,
        email: email,
        date: date
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert(`Booking confirmed for ${tour.name} on ${date}. Details sent to ${email}.`);
    this.reset();
});

// Initialize
loadTourDetails();