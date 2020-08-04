const Properties = [
    {
      slug: "an-apartment-in-mussoorie",
      title: "Workcations 101 - Apartment in Mussoorie",
      location: "Mussoorie, Uttarakhand",
      type: "apartment",
      about:
        "Set amidst the lap of nature, this is a home sweet home, letting the fresh air embrace you in its nurturing arms. The serene ambience and the elegance of the curves of the hills will soothe your souls deep within. The compelling and the breathless beauty of nature, promises a holiday worth it. The space The Apartment is recently renovated tastefully with Scandinavian interiors. The house being south west facing has ample of sunlight during the day so that one can enjoy reading books or spending the time at the terrace or in the garden. The balcony/terrace have a spectacular view of the doon valley. This studio type 2BR apartment has two rooms, both attached with washrooms and a kitchenette with basic necessities like refrigerator and induction stove.",
      features: [
        {
            name: "Well Furnished Rooms", 
            vec: "bed.svg"
        },
        {
            name: "WiFi", 
            vec: "wifi.svg"
        },
        {
            name: "Electricity Backup", 
            vec: "thunder.svg"
        },
        {
            name: "Regular Sanitisation", 
            vec: "spray-bottle.svg"
        },
        {
            name: "Daily Meals", 
            vec: "bowl.svg"
        },
        {
            name: "Mountain Views", 
            vec: "architecture-and-city.svg"
        },
        {
            name: "Caretaker", 
            vec: "owner.svg"
        },
        {
            name: "Cafe", 
            vec: "table.svg"
        },
        {
            name: "Bar", 
            vec: "valentines-day.svg"
        },
        {
            name: "Parking", 
            vec: "car-parking.svg"
        },
        {
            name: "Room Service", 
            vec: "reservation.svg"
        },
        {
            name: "Balcony/Terrace", 
            vec: "balcony.svg"
        },
        {
            name: "Bonfire (On Request)", 
            vec: "camping.svg"
        },
        ],
      inventory: [
        {
          type: "2 BHK Apartment",
          image: "2bhk-bedroom",
          number: 4,
          short: [
            {
              sharing: "Entire Apartment",
              cost: 1900,
            },
          ],
          long: [
            {
              sharing: "Entire Apartment",
              cost: 1700,
            },
          ],
        },
      ],
      images: [
        "property-outer",
        "parking",
        "outer-sitting",
        "balcony",
        "2bhk-bedroom",
        "2bhk-hall",
        "2bhk-kitchenette",
        "2bhk-studio-apartment",
        "2bhk-studio-apartment-kitchenette",
        "2bhk-studio-bedroom",
        "2bhk-studio-hall",
        "2bhk-studio-kitchenette",
        "2bhk-studio-sitting-area",
        "2bhk-view",
        "bonfire",
        "evening-bonfire",
        "sunset",
        "washroom1",
        "washroom2",
      ],
      inclusions: [
        "Accommodation in Well Furnished Rooms",
        "Electricity Charges",
        "Complementary use of WiFi",
        "Housekeeping service twice a week.",
      ],
      exclusions: [
        "Laundry Service available at extra cost",
        "Any kind of Transportation",
        "Service of a cook can also be arranged at additional cost",
      ],
      nearby: [
        {
          title: "Dhanaulti",
          distance: 33,
        },
        {
          title: "Kanatal",
          distance: 50,
        },
        {
          title: "Chakrata",
          distance: 83,
        },
        {
          title: "Rishikesh",
          distance: 80,
        },
      ],
      essentials: {
        medical: {
          title: "ESI Dispensary, Mussoorie",
          distance: 3,
        },
        market: {
          title: "Mussoorie Mall Road",
          distance: 2.6,
        },
        atm: {
          title: "State Bank ATM",
          distance: 2.6,
        },
        petrolPump: {
            title: "Indian Oil",
            distance: 1.8,
        }
      },
    },
    {
      slug: "a-resort-in-binsar",
      title: "A Resort In Binsar",
      type: "resort",
      about:
        "Located in the Himalayas on top of the Jhandi Dhar hills, Binsar, the property is known for it's exclusive location, valley views and a very warm hospitality. Hotel facilitates rock climbing, rappelling, bird watching, jungle camping, riverside trek and bonfire for an adventurous evening.",
      features: [
        "mountain views",
        "caretaker",
        "restaurant",
        "indoor games",
        "parking",
        "fireplace",
        "room service",
        "balcony/terrace",
        "bonfire",
      ],
      amenities: ["wifi", "power backup", "homely meals"],
      inventory: [
        {
          type: "Standard Room",
          image: "deluxe-bedroom",
          number: 18,
          short: [
            {
              sharing: "Single Sharing",
              cost: 1300,
            },
            {
              sharing: "Double Sharing",
              cost: 1900,
            },
            {
              sharing: "Triple Sharing",
              cost: 2500,
            },
          ],
          long: [
            {
              sharing: "Single Sharing",
              cost: 1200,
            },
            {
              sharing: "Double Sharing",
              cost: 1800,
            },
            {
              sharing: "Triple Sharing",
              cost: 2400,
            },
          ],
        },
        {
          type: "Ecological Room",
          image: "ecological-bedroom-view",
          number: 9,
          short: [
            {
              sharing: "Single Sharing",
              cost: 1500,
            },
            {
              sharing: "Double Sharing",
              cost: 2100,
            },
            {
              sharing: "Triple Sharing",
              cost: 2700,
            },
          ],
          long: [
            {
              sharing: "Single Sharing",
              cost: 1350,
            },
            {
              sharing: "Double Sharing",
              cost: 2000,
            },
            {
              sharing: "Triple Sharing",
              cost: 2600,
            },
          ],
        },
      ],
      images: [
        "outside-sitting-area",
        "winter-wonderland",
        "night",
        "reception",
        "barbecue",
        "deluxe-bedroom",
        "ecological-bedroom",
        "ecological-bedroom-view",
        "evening-snow",
        "ground-area",
        "outside-area",
        "recreational-area",
        "sitting-area",
        "snowfall",
        "surroundings",
        "surroundings-snow",
      ],
      location: {
        city: "Binsar",
        state: "Uttarakhand",
        address: "Jageshwar Rd, Om-Nagar, Dhaulchhina, Uttarakhand 263624",
        geo: "https://goo.gl/maps/KTscyrAPtdgbZq746",
        iframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.5931053674976!2d79.78564211510644!3d29.67357958201874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0cbd5a992b719%3A0x72e25d20266431bc!2sBinsar%20Eco%20Camp!5e0!3m2!1sen!2sin!4v1595698974529!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
      },
      inclusions: [
        "Accommodation in Well Furnished Rooms",
        "Electricity Charges",
        "Complementary use of WiFi",
        "All Meals: Breakfast, Lunch, Dinner & Evening Tea/Coffee",
        "Housekeeping service twice a week.",
      ],
      exclusions: [
        "Laundry Service available at extra cost",
        "Any kind of Transportation",
        "A set Menu will be followed for the included meals. Snacks & any meals outside the set menu can be ordered as per actual cost.",
      ],
      nearby: [
        {
          title: "Almora",
          distance: 33,
        },
        {
          title: "Nainital",
          distance: 96,
        },
        {
          title: "Mukteshwar",
          distance: 85,
        },
        {
          title: "Munsyari",
          distance: 166,
        },
      ],
      essentials: {
        medical: {
          title: "District Hospital, Almora",
          distance: 31.7,
        },
        market: {
          title: "Dhaulchina Market",
          distance: 0.6,
        },
        atm: {
          title: "State Bank ATM",
          distance: 0.7,
        },
      },
    },
    {
      slug: "a-hotel-in-bir",
      title: "A Hotel in Bir",
      type: "hotel",
      about:
        "The hotel is located in the village of Bir, which is a base to one of the World's Highest Paragliding Site. Surrounded by plantations and beautiful views of the Dhauladhar Mountains, it provides the perfect spot for a peaceful and rejuvenating stay. One can also explore some natural gems in the nearby mountains like Waterfalls, Cliff sides, River Streams & especially the numerous Monasteries housing Buddhist Monks around the village of Bir",
      features: [
        "mountain views",
        "caretaker",
        "restaurant",
        "indoor games",
        "parking",
        "fireplace",
        "room service",
        "balcony/terrace",
        "bonfire",
      ],
      amenities: ["wifi", "homely meals"],
      inventory: [
        {
          type: "Deluxe Room",
          image: "deluxe-bedroom",
          number: 11,
          short: [
            {
              sharing: "Single Sharing",
              cost: 1300,
            },
            {
              sharing: "Double Sharing",
              cost: 1800,
            },
          ],
          long: [
            {
              sharing: "Single Sharing",
              cost: 1200,
            },
            {
              sharing: "Double Sharing",
              cost: 1700,
            },
          ],
        },
      ],
      images: [
        "entry",
        "surroundings",
        "balcony",
        "dining",
        "deluxe-bedroom",
        "deluxe-room",
        "family-bedroom",
        "family-room",
        "hallway",
      ],
      location: {
        city: "Bir",
        state: "Himachal Pradesh",
        address:
          "Hotel Sky Diver, Landing Site, Suja, PO, Bir, Himachal Pradesh 176077",
        geo: "https://goo.gl/maps/HqjPgPb51mrVGNUi8",
        iframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13528.262925602963!2d76.7109114!3d32.0404122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xedae294601aed986!2sHotel%20Sky%20Diver!5e0!3m2!1sen!2sin!4v1595699068940!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
      },
      inclusions: [
        "Accommodation in Well Furnished Rooms",
        "Electricity Charges",
        "Complementary use of WiFi",
        "All Meals: Breakfast, Lunch, Dinner & Evening Tea/Coffee",
        "Housekeeping service twice a week.",
      ],
      exclusions: [
        "Laundry Service available at extra cost",
        "Any kind of Transportation",
        "A set Menu will be followed for the included meals. Snacks & any meals outside the set menu can be ordered as per actual cost.",
      ],
      nearby: [
        {
          title: "Billing",
          distance: 18,
        },
        {
          title: "McLeod Ganj",
          distance: 70,
        },
        {
          title: "Prashar Lake",
          distance: 101,
        },
        {
          title: "Barot Valley",
          distance: 52,
        },
      ],
      essentials: {
        medical: {
          title: "Govt. Civil Hospital, Baijnath",
          distance: 12.5,
        },
        market: {
          title: "Bir Market",
          distance: 0.3,
        },
        atm: {
          title: "Kangra Central Cooperative Bank ATM",
          distance: 0.6,
        },
      },
    },
    {
      slug: "a-resort-in-pauri",
      title: "A Resort in Pauri",
      type: "resort",
      about:
        "Located at a three and a half hour's drive from Rishikesh, the resort offers striking views of 7 Himalayan Peaks including Trishul, Gangotri, Swargarohini and Neelkanth. Guests can relax and spend some peaceful time in the sit-out facing the view of snow-peaked Himalayas. The in-house 'Spice Walk' restaurant offers local Garhwali and Indian food.",
      features: [
        "mountain views",
        "caretaker",
        "restaurant",
        "bar",
        "indoor games",
        "parking",
        "fireplace",
        "room service",
        "balcony/terrace",
        "bonfire",
      ],
      amenities: ["wifi", "power backup", "homely meals"],
      inventory: [
        {
          type: "Deluxe Room",
          image: "deluxe-bedroom",
          number: 6,
          short: [
            {
              sharing: "Single Sharing",
              cost: 1300,
            },
            {
              sharing: "Double Sharing",
              cost: 1900,
            },
          ],
          long: [
            {
              sharing: "Single Sharing",
              cost: 1200,
            },
            {
              sharing: "Double Sharing",
              cost: 1800,
            },
          ],
        },
        {
          type: "Cottage Room",
          image: "cottage-room",
          number: 8,
          short: [
            {
              sharing: "Single Sharing",
              cost: 1800,
            },
            {
              sharing: "Double Sharing",
              cost: 2300,
            },
          ],
          long: [
            {
              sharing: "Single Sharing",
              cost: 1700,
            },
            {
              sharing: "Double Sharing",
              cost: 2200,
            },
          ],
        },
      ],
      images: [
        "cottage-room",
        "surrounding-views",
        "surroundings",
        "entry",
        "deluxe-bedroom",
        "deluxe-room",
        "outside",
        "sunset",
        "view",
      ],
      location: {
        city: "Pauri",
        state: "Uttarakhand",
        address: "Devprayag - Pauri Road, Pauri, Uttarakhand 246001",
        geo: "https://goo.gl/maps/j9jneYfKMQ95ywS3A",
        iframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13798.90845224639!2d78.745071!3d30.159217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36b1791881838178!2sMumukshu%20Resort!5e0!3m2!1sen!2sin!4v1595698736354!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
      },
      inclusions: [
        "Accommodation in Well Furnished Rooms",
        "Electricity Charges",
        "Complementary use of WiFi",
        "All Meals: Breakfast, Lunch, Dinner & Evening Tea/Coffee",
        "Housekeeping service twice a week.",
      ],
      exclusions: [
        "Laundry Service available at extra cost",
        "Any kind of Transportation",
        "A set Menu will be followed for the included meals. Snacks & any meals outside the set menu can be ordered as per actual cost.",
      ],
      nearby: [
        {
          title: "Rishikesh",
          distance: 111,
        },
        {
          title: "Chopta",
          distance: 131,
        },
        {
          title: "Lansdowne",
          distance: 86,
        },
        {
          title: "Srinagar",
          distance: 38,
        },
      ],
      essentials: {
        medical: {
          title: "District Hospital, Pauri",
          distance: 4.1,
        },
        market: {
          title: "Pauri Market",
          distance: 4.5,
        },
        atm: {
          title: "Bank of India ATM",
          distance: 2.3,
        },
      },
    },
    {
      slug: "a-hostel-in-almora",
      title: "A Hostel In Almora",
      type: "hostel",
      about:
        "Surrounded by natural flora and fauna as it overlooks a vast expanse of undulating hills and majestic views of the snow-clad Nandi Devi, Panchchuli, Trishul and Maikatoli peaks, the hostel is spread across 6 luxurious furnished suites, 2 dormitories, vibrant common areas, Bonfire area, In-house multi-cuisine cafe and private open air yoga space. \n\nAdding to the natural lush green surroundings are the lemon, apricot, plum, and walnut trees in the yards! The ridge also homes the Kumaoni people inhabited in rustic villages practicing a unique culture untouched by modernity.",
      features: [
        "mountain views",
        "caretaker",
        "cafe",
        "restaurant",
        "bar",
        "indoor games",
        "parking",
        "fireplace",
        "room service",
        "balcony/terrace",
        "bonfire",
      ],
      amenities: ["wifi", "power backup", "homely meals"],
      inventory: [
        {
          type: "Luxury Room",
          image: "deluxe-room",
          number: 6,
          short: [
            {
              sharing: "Single Sharing",
              cost: 1600,
            },
            {
              sharing: "Double Sharing",
              cost: 2100,
            },
          ],
          long: [
            {
              sharing: "Single Sharing",
              cost: 1500,
            },
            {
              sharing: "Double Sharing",
              cost: 2000,
            },
          ],
        },
        {
          type: "Executive Room",
          image: "deluxe-bedroom",
          number: 2,
          short: [
            {
              sharing: "Single Sharing",
              cost: 1400,
            },
            {
              sharing: "Double Sharing",
              cost: 1800,
            },
          ],
          long: [
            {
              sharing: "Single Sharing",
              cost: 1300,
            },
            {
              sharing: "Double Sharing",
              cost: 1700,
            },
          ],
        },
        {
          type: "6-Bed Dorm",
          image: "dorm-room",
          number: 12,
          short: [
            {
              sharing: "Single Bed",
              cost: 800,
            },
          ],
          long: [
            {
              sharing: "Single Bed",
              cost: 700,
            },
          ],
        },
      ],
      images: [
        "surrounding-view",
        "balcony-view",
        "surroundings",
        "balcony",
        "deluxe-bedroom",
        "deluxe-room",
        "dining",
        "dorm-room",
        "view",
      ],
      location: {
        city: "Almora",
        state: "Uttarkahand",
        address:
          "Crank's Ridge Kasaar Devi Temple, Almora-Bageshwar Rd, Almora, Uttarakhand 263601",
        geo: "https://g.page/Rudra-himalayan-retreat-hostel?share",
        iframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.6767433377886!2d79.66085541510569!3d29.64213058203048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b77598446fa1%3A0x85c0dd73436abc78!2sRudra%20Himalayan%20Retreat!5e0!3m2!1sen!2sin!4v1595699155757!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
      },
      inclusions: [
        "Accommodation in Well Furnished Rooms",
        "Electricity Charges",
        "Complementary use of WiFi",
        "All Meals: Breakfast, Lunch, Dinner & Evening Tea/Coffee",
        "Housekeeping service twice a week.",
      ],
      exclusions: [
        "Laundry Service available at extra cost",
        "Any kind of Transportation",
        "A set Menu will be followed for the included meals. Snacks & any meals outside the set menu can be ordered as per actual cost.",
      ],
      nearby: [
        {
          title: "Almora",
          distance: 8,
        },
        {
          title: "Nainital",
          distance: 71,
        },
        {
          title: "Mukteshwar",
          distance: 59,
        },
        {
          title: "Kausani",
          distance: 57,
        },
      ],
      essentials: {
        medical: {
          title: "District Hospital, Almora",
          distance: 6.8,
        },
        market: {
          title: "Almora Market",
          distance: 6.6,
        },
        atm: {
          title: "State Bank ATM",
          distance: 5.8,
        },
      },
    },
];

const Facilities = [
    {
        name: "Well Furnished Rooms", 
        vec: "bed.svg"
    },
    {
        name: "WiFi", 
        vec: "wifi.svg"
    },
    {
        name: "Electricity Backup", 
        vec: "thunder.svg"
    },
    {
        name: "Regular Sanitisation", 
        vec: "spray-bottle.svg"
    },
    {
        name: "Daily Meals", 
        vec: "bowl.svg"
    },
    {
        name: "Mountain Views", 
        vec: "architecture-and-city.svg"
    },
    {
        name: "Caretaker", 
        vec: "owner.svg"
    },
    {
        name: "Cafe", 
        vec: "table.svg"
    },
    {
        name: "Bar", 
        vec: "valentines-day.svg"
    },
    {
        name: "Parking", 
        vec: "car-parking.svg"
    },
    {
        name: "Room Service", 
        vec: "reservation.svg"
    },
    {
        name: "Balcony/Terrace", 
        vec: "balcony.svg"
    },
    {
        name: "Bonfire (On Request)", 
        vec: "camping.svg"
    },
];

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var s = 0;

    //set page title
    document.title = Properties[s].title;

    //set slideshow
    var slideshow = document.createElement('div');
    slideshow.className = 'slideshow-main-container';
    slideshow.style.display = 'none';
    slideshow.innerHTML =   '<div class="slideshow-top-container"><div class="cross-box"><img src="cross.svg" alt=""></div><div class="slideshow-top"><span class="slideshow heading">Pictures</span><span class="heading2">' + Properties[s].title; + '</span></div></div>';

    //add slideshow images
    var parentNode = document.createElement('div');
    parentNode.className = 'slideshow-container';
    for (var i = 0; i < Properties[s].images.length; i++) {
        var newNode = document.createElement('div');
        newNode.className = 'slideshow-image';
        newNode.style.backgroundImage = 'url(https://www.wanderon.in/workcations/'+ Properties[s].slug + '/' + Properties[s].images[i] + '.jpg)';
        parentNode.appendChild(newNode);
    }
    slideshow.appendChild(parentNode);
    document.body.appendChild(slideshow);


    var pageElement = document.createElement('div');
    pageElement.className = 'page-container';

    var pageWrapper = document.createElement('div');
    pageWrapper.className = 'page-wrapper';

    var pageTop = document.createElement('div');
    pageTop.className = 'page-top-container';

    //add inclusions
    var inclusionsNode = document.createElement('div');
    inclusionsNode.className = 'inclusions-container';
    
    for (var i = 0; i < Properties[s].features.length; i++) {
        var newNode = document.createElement('div');
        newNode.className = 'inclusions-object';
        var newImg = document.createElement('img');
        newImg.className = 'inc-img';
        newImg.src = Properties[s].features[i].vec;
        newNode.appendChild(newImg);
        var newSpan = document.createElement('span');
        newSpan.className = 'inclusion';
        var textNode = Properties[s].features[i].name;
        newSpan.innerHTML = textNode;
        newNode.appendChild(newSpan);
        inclusionsNode.appendChild(newNode);
    }
    pageTop.appendChild(inclusionsNode);

    //add gallery pictures
    var galleryNode = document.createElement('div');
    galleryNode.className = 'gallery-container';

    for (var i = 0; i < 4; i++) {

        var newNode = document.createElement('div');
        newNode.className = 'image-wrapper';
        var newImg = document.createElement('div');
        newImg.className = 'main-image';
        newImg.style.backgroundImage = 'url(https://www.wanderon.in/workcations/' + Properties[s].slug + '/' + Properties[s].images[i] + '.jpg;)';

        newNode.appendChild(newImg);
        galleryNode.appendChild(newNode);
    }
    var newNode = document.createElement('div');
    newNode.className = 'image-wrapper';
    var newImg = document.createElement('div');
    newImg.className = 'main-image';
    newImg.style.backgroundImage = 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://www.wanderon.in/workcations/' + Properties[s].slug + '/' + Properties[s].images[4] + '.jpg;)'
    newImg.innerHTML = '+ 4 Photos';
    newNode.appendChild(newImg);
    galleryNode.appendChild(newNode);

    pageTop.appendChild(galleryNode);

    //add page heading (property name & location)
    var headingNode = document.createElement('div');
    headingNode.className = 'page-heading';

    var newNode = document.createElement('div');
    newNode.className = 'property-name-container';
    var newText = document.createElement('h1');
    newText.className = 'property-name';
    newText.innerHTML = Properties[s].title;
    var newLoc = document.createElement('div');
    newLoc.className = 'property-location';
    newLoc.innerHTML = Properties[s].location;
    newNode.appendChild(newText);
    newNode.appendChild(newLoc);
    headingNode.appendChild(newNode);

    pageTop.appendChild(headingNode);

    pageWrapper.appendChild(pageTop);

    var pageBottomNode = document.createElement('div');
    pageBottomNode.className = 'page-bottom-container';

    var propertyDetailsNode = document.createElement('div');
    propertyDetailsNode.className = 'property-details';

    var aboutNode = document.createElement('div');
    aboutNode.className = "section-content about";
    aboutNode.innerHTML = '<h2 class="heading">About</h2><div class="content"><p>' + Properties[s].about + '</p></div>';

    propertyDetailsNode.appendChild(aboutNode);


    var essentialsNode = document.createElement('div');
    essentialsNode.className = 'section-content about';
    essentialsNode.innerHTML = '<h2 class="heading">Essential Services</h2><div class="content"><div class="essentials-container"><div class="essentials-content"><span class="grid-content width50"><img src="medical.svg" alt="Medical Centre">Medical Centre</span><p>-----</p><p>' +
    Properties[s].essentials.medical.distance + 
    ' Km</p></div><div class="essentials-content"><span class="grid-content width50"><img src="shop.svg" alt="Market Area">Market Area</span><p>-----</p><p>' +
    Properties[s].essentials.market.distance + 
    ' Km</p></div><div class="essentials-content"><span class="grid-content width50"><img src="fuel.svg" alt="Petrol Pump">Petrol Pump</span><p>-----</p><p>' + 
    Properties[s].essentials.petrolPump.distance + 
    ' Km</p></div><div class="essentials-content"><span class="grid-content width50"><img src="atm.svg" alt="ATM">ATM</span><p>-----</p><p>' + 
    Properties[s].essentials.atm.distance + 
    ' Km</p></div></div></div>' ;

    propertyDetailsNode.appendChild(essentialsNode);


    var nearbyNode = document.createElement('div');
    nearbyNode.className = 'section-content';
    nearbyNode.innerHTML = '<h2 class="heading">Nearby Attractions</h2><div class="nearby-container"><div class="nearby-items"><div class="nearby-image" style="background-image: url(' + 
    //photo.jpg + 
    ');"></div><div class="nearby-text"><span class="nearby-name">' + 
    Properties[s].nearby[0].title + 
    '</span><div class="nearby-distance"><p>Distance</p><p>' + 
    Properties[s].nearby[0].distance + 
    ' Km</p></div></div></div><div class="nearby-items"><div class="nearby-image" style="background-image: url(' + 
    //photo.jpeg + 
    ');"></div><div class="nearby-text"><span class="nearby-name">' + 
    Properties[s].nearby[1].title + 
    '</span><div class="nearby-distance"><p>Distance</p><p>' + 
    Properties[s].nearby[1].distance + 
    ' Km</p></div></div></div><div class="nearby-items"><div class="nearby-image" style="background-image: url(' + 
    //photo.jpg + 
    ');"></div><div class="nearby-text"><span class="nearby-name">' + 
    Properties[s].nearby[2].title + 
    '</span><div class="nearby-distance"><p>Distance</p><p>' + 
    Properties[s].nearby[2].distance + 
    ' Km</p></div></div></div><div class="nearby-items"><div class="nearby-image" style="background-image: url(' + 
    //photo.jpg + 
    ');"></div><div class="nearby-text"><span class="nearby-name">' + 
    Properties[s].nearby[3].title + 
    '</span><div class="nearby-distance"><p>Distance</p><p>' + 
    Properties[s].nearby[3].distance + 
    ' Km</p></div></div></div></div>' ;

    propertyDetailsNode.appendChild(nearbyNode);


    var similarNode = document.createElement('div');
    similarNode.className = 'section-content';
    similarNode.innerHTML = '<h2 class="heading">Similar Properties</h2><div class="carousel-container"><div class="carousel-wrapper"><div class="carousel-object"><div class="carousel-object-img" style="background-image: url(MumukshuResorts-Property2.jpg);"><div class="opacity"><span class="carousel-tag resort">Resort</span><span class="carousel-price">1200<span class="night">/night</span></span></div></div><div class="carousel-object-Details"><span class="carousel-name">Resort In Pauri</span><span class="carousel-location">Pauri Garhwal, Uttarkahand</span></div><div class="carousel-btn"><span>EXPLORE</span></div></div></div><div class="carousel-wrapper"><div class="carousel-object"><div class="carousel-object-img" style="background-image: url(HotelSkyDiver-Property7.jpg);"><div class="opacity"><span class="carousel-tag hotel">Hotel</span><span class="carousel-price">1200<span class="night">/night</span></span></div></div><div class="carousel-object-Details"><span class="carousel-name">Hotel in Bir</span><span class="carousel-location">Bir, Himachal Pradesh</span></div><div class="carousel-btn"><span>EXPLORE</span></div></div></div><div class="carousel-wrapper"><div class="carousel-object"><div class="carousel-object-img" style="background-image: url(AHouseInTheHills-Property13.jpg);"><div class="opacity"><span class="carousel-tag villa">Villa</span><span class="carousel-price">1700<span class="night">/night</span></span></div></div><div class="carousel-object-Details"><span class="carousel-name">Villa In Mussoorie</span><span class="carousel-location">Mussoorie, Uttarkahand</span></div><div class="carousel-btn"><span>EXPLORE</span></div></div></div></div>';

    propertyDetailsNode.appendChild(similarNode);


    var infoNode = document.createElement('div');
    infoNode.className = 'section-content';
    infoNode.innerHTML = '<h2 class="heading">Important Information</h2><div class="info-container"><div class="info-object"><div class="section info-head"> <span class="info-name">Guidelines for Travellers</span> <img class="info-arrow open open-info" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-info" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="15em"><p>1. Mandatory to carry ICMR approved COVID-19 RT-PCR negative report.</p><p>2. Carry the hard copy of E-permit of the concerned state to which you are travelling.</p><p>3. You would be asked to undergo 14-days quarantine period in hotel room on your arrival.</p><p>4. Carry a valid Govt Id along with your address proof( Passport, Aadhar card, Driving Liscence, Voter ID or any other valid ID).</p><p>5. Download Aarogya Setu application on your mobile device.</p><p>6. Carry hand sanitizer, N-95 mask and hand gloves.</p><p>7. We recommend you to travel with a PPE kit.</p></div></div><div class="info-object"><div class="section info-head"> <span class="info-name">Practices By WanderOn</span> <img class="info-arrow open open-info" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-info" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="15em"><p>1. All the properties would be following the SOPs and guidelines as dictated by WHO to ensure a safe and hygienic stay.</p><p>2. Contactless Check-In.</p><p>3. Regular sanitization of the property covering all the touch-points and common areas.</p><p>4. Your room/dorm would be sanitized twice a week.</p><p>5. During the set period of quarantine, food would be served inside your room in disposables/personal utensils.</p><p>6. As you won’t be allowed to step out of the property premises during the quarantine period, all your requirements would be assisted by the team.</p></div></div><div class="info-object"><div class="section info-head"> <span class="info-name">Terms & Conditions</span> <img class="info-arrow open open-info" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-info" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="15em"><p>1. We expect you to strictly adhere to the above guidelines for your own safety and for the safety of others.</p><p>2. Submission of fake COVID-19 RT-PCR negative report or fake E-permit might result in legal action being taken under the NATIONAL DISASTER MANAGEMENT ACT and the company won’t bear any responsibility for the same.</p><p>3. Please follow this link to check out all the authorised ICMR approved private and government labs in Delhi-NCR.</p></div></div></div>';

    propertyDetailsNode.appendChild(infoNode);


    var faqNode = document.createElement('div');
    faqNode.className = 'section-content';
    faqNode.innerHTML = '<h2 class="heading">FAQs</h2><div class="info-container"><div class="info-object"><div class="section faq-head"> <span class="info-name">Q1. Is the COVID-19 RT-PCR negative report compulsary?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="4em"><p>Yes, it is mandatory to carry a hard copy of negative COVID-19 RT-PCR test report, tested within 72hrs for crossing the state borders.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q2. Is it mandatory to carry the E-permit of the state authority that I am travelling to?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="5em"><p>Yes, it is absolutely necessary that you carry the approved E-permit of the state authority that you are travelling to.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q3. What would be the mode of transport which I can avail to reach the destination?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="5em"><p>It would be highly recommended that you come by your own vehicle. However, we can assist you with a fully sanitised taxi service from the desired pick-up point to the property location and back.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q4. What happens if I’m travelling from a HIGH LOAD COVID city?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="5em"><p>Yes, you can surely travel under the proper guidelines as stated by the government. However, you may be asked to undergo institutional quarantine by the state authorities.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q5. Right now I am residing in a containment zone. Would I be allowed to join?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="4em"><p>No, if you’re currently based out of a containment zone, you won’t be allowed to onboard with us.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q6. What all documents do I need to carry?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="5em"><p>We insist you to carry hard copies of ICMR approved COVID RT-PCR negative test report, the E-permit pass for the state you’re travelling to, original address proof and govt. issued ID proof.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q7. What if I’m asked to undergo institutional quarantine by the local authorities despite of presenting all the valid legal documents?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="12em"><p>While coming to the destination, if you’re asked to undergo institutional quarantine and are only able to check in to the property post that, you’ll have two different choices as far as the booking is concerned:</p><p>1. Get through the set period of institutional quarantine and only pay for the time period you actually spend in the property. The overall amount would be adjusted accordingly with no extra charges.</p><p>2. You have the option of cancelling the booking and go back to your home address. In this scenario, full refund would be provided from our end.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q8. What if I’m not allowed to cross the checkpoint barriers/state borders and am stooped by the state authorities despite of presenting all the valid legal documents?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="5em"><p>If at all this situation arises, you’ll have to head back to your home address and full refund would be provided in this situation.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q9. Will you guys help me with the COVID test procedure?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="6em"><p>Though we highly recommend you to get prescription from your family doctor and then undergo the test, but in case you seek our assistance, we can help you to get the RT-PCR COVID test from an ICMR approved laboratory at a service fees of Rs. 300.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q10. What if I develop any COVID like symptoms or come in contact with someone who has tested positive during the tenure of my stay?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="10em"><p>We highly recommend you to get tested at the nearest COVID test lab and follow the government guidelines.</p><p>If tested positive, you’ll have to undergo institutional quarantine and have to follow all the government regulations and guidelines.</p><p>If tested negative, you can continue your stay at the property with a little more precautional measures.</p></div></div><div class="info-object"><div class="section faq-head"> <span class="info-name">Q11. What is the minimum number of nights for which I can book my stay?</span> <img class="info-arrow open open-faq" src="plus.svg" alt="" style="display: block;"> <img class="info-arrow close close-faq" src="minus.svg" alt="" style="display: none;"></div><div class="info-details" style="font-size: 0vw; transition-property: height; height: 0em;" id="6em"><p>We recommend you to book for more than 7 nights as a part of your accommodation with us. This is to minimise the overall influx of people entering and exiting state borders in short intervals.</p></div></div></div>';

    propertyDetailsNode.appendChild(faqNode);

    pageBottomNode.appendChild(propertyDetailsNode);

    //add booking-sidebar

    var containerNode = document.createElement('div');
    containerNode.className = 'property-rooms-container';

    var roomsNode = document.createElement('div');
    roomsNode.className = 'property-rooms';

    var flexNode = document.createElement('div');
    flexNode.className = 'property-flex-container';


    var roomsTopNode = document.createElement('div');
    roomsTopNode.className = 'property-rooms-top';
    roomsTopNode.innerHTML = '<h2 class="booking-head"> Book With Us!</h2><div class="cin-cout-container"><div class="cin-cout-wrapper"><label><span class="heading2">Check-In</span></label><input type="date"  id="cinDate" required="Required" name="cinDate"/></div><div class="cin-cout-wrapper"><label><span class="heading2">Check-Out</span></label><input type="date"  id="coutDate" required="Required" name="coutDate"/></div></div><span class="min-stay">*Minimum booking duration is 7 days</span><div class="line"></div>';

    flexNode.appendChild(roomsTopNode);

    var newSpan = document.createElement('span');
    newSpan.className = 'heading2';
    newSpan.innerHTML = 'Select Rooms';
    flexNode.appendChild(newSpan);

    
    var roomsContainerNode = document.createElement('div');
    roomsContainerNode.className = 'rooms-container';
    roomsContainerNode.innerHTML = 

    flexNode.appendChild(roomsContainerNode);


    var billingNode = document.createElement('div');
    billingNode.className = 'billing-container';
    billingNode.innerHTML = '<div class="costing-container"><span class="costing-text">Total Cost</span><span class="costing-value">₹0</span></div><div class="payment-btn"><span class="heading">BOOK NOW</span></div>';

    flexNode.appendChild(billingNode);

    roomsNode.appendChild(flexNode);

    containerNode.appendChild(roomsNode);

    pageBottomNode.appendChild(containerNode);

    pageWrapper.appendChild(pageBottomNode);

    pageElement.appendChild(pageWrapper);

    document.body.appendChild(pageElement);



    addfunctionality();
}

function addfunctionality() {

    var slideshow = document.getElementsByClassName('gallery-container')[0];
    slideshow.addEventListener('click',showSlideShow)

    var cross = document.getElementsByClassName('cross-box')[0];
    cross.addEventListener('click', closeSlideshow);

    var addRoomButtons = document.getElementsByClassName('select-btn');
    for (var i = 0; i < addRoomButtons.length; i++) {
        var button = addRoomButtons[i];
        button.addEventListener('click', addRoom)
    }

    var plusButtons = document.getElementsByClassName('plus');
    for (var i = 0; i < plusButtons.length; i++) {
        var button = plusButtons[i];
        button.addEventListener('click',incrementValue)
    }

    var minusButtons = document.getElementsByClassName('minus');
    for (var i = 0; i < minusButtons.length; i++) {
        var button = minusButtons[i];
        button.addEventListener('click',decrementValue)
    }
    
    updateMinCin();
    updateMinCout();

    document.getElementById('cinDate').addEventListener('change', updateMinCout);
    document.getElementById('coutDate').addEventListener('change', checkMinCout);

    var info = document.getElementsByClassName('section');
    for (var i = 0; i < info.length ; i++) {
        var button = info[i];
        button.addEventListener('click', displayInfo)
    }

}


function showSlideShow (event) {
    document.getElementsByClassName('slideshow-main-container')[0].style.display = 'block';
    document.getElementsByClassName('page-container')[0].style.display = 'none';
}

function closeSlideshow(event) {
    document.getElementsByClassName('slideshow-main-container')[0].style.display = 'none';
    document.getElementsByClassName('page-container')[0].style.display = 'block';
}

function updateMinCin () {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("cinDate").setAttribute('min', today);
    document.getElementById('cinDate').value = today;
    updateMinCout();
}

function updateMinCout () {
    var cinDate = new Date(document.getElementById('cinDate').value);
    var today = new Date();
    var d = Math.round((cinDate.getTime() - today.getTime())/(24*60*60*1000));
    if (d < -1){
        updateMinCin();
    } else {
    var coutDate = new Date(cinDate.getTime()+(7*24*60*60*1000)).toISOString().split('T')[0];
    document.getElementById('coutDate').value = coutDate;
    document.getElementById("coutDate").setAttribute('min', coutDate);
    }
}

function checkMinCout () {
    var minCoutDate = new Date(document.getElementById('cinDate').value);
    var coutDate = new Date(document.getElementById('coutDate').value);
    var d = Math.round( ( (coutDate.getTime() - minCoutDate.getTime() )/ (24*60*60*1000) ) );
    console.log(d);
    if (d < 7) {
        updateMinCout();
    } else {
        updateTotalCost();
    }
}

function calcDuration () {
    var cinDate = new Date(document.getElementById('cinDate').value);
    var coutDate = new Date(document.getElementById('coutDate').value);
    var duration = Math.round((coutDate.getTime()-cinDate.getTime())/(24*60*60*1000));
    return duration;
}

function addRoom(event) {
    var buttonClicked = event.target;
    buttonClicked.slideshow.style.display = 'none';
    var addButton = buttonClicked.slideshow.slideshow.getElementsByClassName('select1-btn')[0];
    addButton.style.display = 'flex';
    addButton.getElementsByClassName('productQty')[0].value = 1;
    updateTotalCost();
}

function incrementValue(event) {
    var buttonClicked = event.target;
    var plusButton = buttonClicked.slideshow.slideshow.getElementsByClassName('plus')[0];
    if (plusButton.id !== 'disabled') {
    var value = buttonClicked.slideshow.slideshow.getElementsByClassName('productQty')[0].value;
    value++;
    if (value > 4) {
        plusButton.id = 'disabled';
    }
    buttonClicked.slideshow.slideshow.getElementsByClassName('productQty')[0].value = value;
    updateTotalCost();
    }
}

function decrementValue(event) {
    var buttonClicked = event.target;
    var minusButton = buttonClicked.slideshow.slideshow.getElementsByClassName('minus')[0];

    var value = buttonClicked.slideshow.slideshow.getElementsByClassName('productQty')[0].value;
    value--;
    buttonClicked.slideshow.slideshow.getElementsByClassName('productQty')[0].value = value;
    
    if (value == 0 ) {
        buttonClicked.slideshow.slideshow.slideshow.slideshow.getElementsByClassName('select1-btn')[0].style.display = 'none';
        buttonClicked.slideshow.slideshow.slideshow.slideshow.getElementsByClassName('select-btn')[0].style.display = 'flex';
    } else if (value == 4) {
        buttonClicked.slideshow.slideshow.getElementsByClassName('plus')[0].id = 'none';
    }
    updateTotalCost();
} 

function updateTotalCost() {
    var cartItemContainer = document.getElementsByClassName('room-qty-container');
    var total = 0;
    for (var i = 0; i < cartItemContainer.length; i++) {
    var price = parseInt(cartItemContainer[i].getElementsByClassName('room-price')[0].innerText.replace('₹',''))
    var qty = parseInt(cartItemContainer[i].getElementsByClassName('productQty')[0].value)
    total = total + price*qty;
    }
    var duration = calcDuration();
    gTotal = total*duration;
    document.getElementsByClassName('costing-value')[0].innerText = '₹' + new Intl.NumberFormat('en-IN').format(gTotal);;
}

function displayInfo(event) {
    var buttonClicked = this;
    var info = buttonClicked.parentElement.getElementsByClassName('info-details')[0];
    var height = info.style.height;
    
    if (height === '0em' ) {
        buttonClicked.getElementsByClassName('open')[0].style.display = 'none';
        buttonClicked.getElementsByClassName('close')[0].style.display = 'block';
        info.style.fontSize = '1em';
        info.style.height = (info.id);
        info.style.padding = '1em 1em';
    } else {
        buttonClicked.getElementsByClassName('open')[0].style.display = 'block';
        buttonClicked.getElementsByClassName('close')[0].style.display = 'none';
        info.style.fontSize = '0em';
        info.style.height = '0em';
        info.style.padding = '0em 0em';
    }
}