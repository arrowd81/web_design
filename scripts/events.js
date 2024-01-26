// Sample data for events
const events = [
    {
        date: '1403/11/25',
        title: 'رویداد ۱',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    {
        date: '1403/12/05',
        title: 'رویداد ۲',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    {
        date: '1403/11/25',
        title: 'رویداد ۳',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    {
        date: '1403/11/25',
        title: 'رویداد ۴',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    {
        date: '1403/11/25',
        title: 'رویداد ۵',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    {
        date: '1403/11/25',
        title: 'رویداد ۵',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    {
        date: '1403/11/25',
        title: 'رویداد ۵',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    {
        date: '1403/11/25',
        title: 'رویداد ۵',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    {
        date: '1403/11/25',
        title: 'رویداد ۵',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    {
        date: '1403/11/25',
        title: 'رویداد ۵',
        details: 'جزعیات رویداد',
        image: 'pictures/member_image.png'
    },
    // Add more events as needed
];

// Function to generate HTML for events
function generateEventsHTML(events) {
    const calendarContainer = document.getElementById('calendarContainer');

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerHTML = `<strong>${event.title}</strong><br>${event.date}`;
        eventDiv.addEventListener('click', () => showEventDetails(event));
        calendarContainer.appendChild(eventDiv);
    });
}

// Function to show event details
function showEventDetails(event) {
    const eventDetailsContainer = document.getElementById('eventDetails');
    eventDetailsContainer.innerHTML = `
        <div class="separator">
            <span class="separator-text">${event.title}</span>
        </div>
        <p>تاریخ: ${event.date}</p>
        <p>${event.details}</p>
        <img src="${event.image}" alt="${event.title} Image">
    `;
    
    eventDetailsContainer.style.display = 'flex';
}

// Call the function to generate events HTML
generateEventsHTML(events);
