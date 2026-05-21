export const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const curatedImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1496588152823-e2f5c7b3d7b1?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1600&q=80",
];

const imageFor = (query) => {
  const index = [...query].reduce(
    (total, letter) => total + letter.charCodeAt(0),
    0
  );
  return curatedImages[index % curatedImages.length];
};

const galleryFor = (name, category) => [
  imageFor(name),
  imageFor(`${name} hotel`),
  imageFor(`${name} food`),
  imageFor(`${category} experience`),
];

const categoryMeta = {
  Vacation: {
    vibe: "Relaxation",
    image: imageFor("luxury beach resort"),
    description:
      "Relax in breathtaking luxury destinations with curated premium experiences.",
  },
  Adventure: {
    vibe: "Thrill",
    image: imageFor("mountain adventure"),
    description:
      "Experience thrilling adventures across mountains, islands and wild escapes.",
  },
  Pilgrimage: {
    vibe: "Spiritual",
    image: imageFor("sacred temple pilgrimage"),
    description:
      "Reconnect spiritually through sacred destinations and peaceful journeys.",
  },
  "Destination Wedding": {
    vibe: "Luxury",
    image: imageFor("luxury destination wedding"),
    description:
      "Celebrate unforgettable moments in paradise destinations and royal venues.",
  },
  Cruise: {
    vibe: "Premium",
    image: imageFor("luxury cruise ship"),
    description:
      "Sail through premium destinations with world-class cruise luxury.",
  },
  Camping: {
    vibe: "Nature",
    image: imageFor("luxury camping glamping"),
    description:
      "Experience peaceful nights under the stars in nature's embrace.",
  },
  "Winter Escapes": {
    vibe: "Aesthetic",
    image: imageFor("snow luxury resort"),
    description:
      "Enjoy snowy landscapes, cozy cabins and magical winter destinations.",
  },
  "City Explorer": {
    vibe: "Urban",
    image: imageFor("luxury city skyline"),
    description:
      "Discover iconic cities, nightlife, architecture and urban culture.",
  },
  "Wellness Retreats": {
    vibe: "Self-care",
    image: imageFor("luxury spa wellness"),
    description:
      "Relax your mind and body with luxurious wellness therapies and retreats.",
  },
  "Wildlife Safari": {
    vibe: "Exploration",
    image: imageFor("luxury wildlife safari"),
    description:
      "Explore the wild with premium safari adventures and rare wildlife encounters.",
  },
};

const destinationLists = {
  Vacation: [
    "Bali, Indonesia",
    "Greek Islands",
    "Barcelona, Spain",
    "Lonavala & Khandala",
    "Alibaug & Kashid",
    "Munnar, Kerala",
  ],
  Adventure: [
    "Rishikesh (Uttarakhand)",
    "Leh (Ladakh)",
    "Andaman Islands",
    "Patagonia (Chile/Argentina)",
    "Inca Trail (Peru)",
    "Queenstown (New Zealand)",
  ],
  Pilgrimage: [
    "Camino de Santiago (Spain)",
    "Mecca (Saudi Arabia)",
    "Vatican City",
    "Varanasi (Uttar Pradesh)",
    "Golden Temple (Amritsar, Punjab)",
    "Tirupati (Andhra Pradesh)",
  ],
  "Destination Wedding": [
    "Goa",
    "Jaipur (Rajasthan)",
    "Mussoorie (Uttarakhand)",
    "Bali, Indonesia",
    "Phuket, Thailand",
    "Dubai, UAE",
  ],
  Cruise: [
    "The Caribbean",
    "The Bahamas",
    "The Mediterranean",
    "Alaska",
    "High Seas & Goa",
    "Lakshadweep",
  ],
  Camping: [
    "Spiti Valley, Himachal Pradesh",
    "Jaisalmer Desert Camps, Rajasthan",
    "Coorg, Karnataka",
    "Yosemite National Park, USA",
    "Swiss Alps, Switzerland",
    "Lake District, United Kingdom",
  ],
  "Winter Escapes": [
    "Gulmarg, Kashmir",
    "Manali, Himachal Pradesh",
    "Auli, Uttarakhand",
    "Lapland, Finland",
    "Swiss Alps, Switzerland",
    "Banff, Canada",
  ],
  "City Explorer": [
    "Tokyo, Japan",
    "New York City, USA",
    "Dubai, UAE",
    "Singapore",
    "Paris, France",
    "Mumbai, India",
  ],
  "Wellness Retreats": [
    "Kerala Ayurveda Retreats",
    "Rishikesh Yoga Retreats",
    "Bali Wellness Resorts",
    "Ubud, Indonesia",
    "Maldives Spa Retreats",
    "Sedona, Arizona",
  ],
  "Wildlife Safari": [
    "Ranthambore National Park",
    "Jim Corbett National Park",
    "Kaziranga National Park",
    "Serengeti, Tanzania",
    "Maasai Mara, Kenya",
    "Kruger National Park, South Africa",
  ],
};

const stayByCategory = {
  Vacation: "Signature beachfront villa with private pool",
  Adventure: "Boutique adventure lodge with guided expedition desk",
  Pilgrimage: "Premium heritage stay close to sacred landmarks",
  "Destination Wedding": "Luxury palace or oceanfront celebration resort",
  Cruise: "Balcony suite on a premium cruise liner",
  Camping: "Luxury glamping tent with heated bedding and ensuite bath",
  "Winter Escapes": "Alpine resort suite with fireplace and spa access",
  "City Explorer": "Five-star city hotel near landmark districts",
  "Wellness Retreats": "Wellness resort suite with spa consultation",
  "Wildlife Safari": "Luxury jungle lodge with private safari naturalist",
};

const transportByCategory = {
  Vacation: "Private airport transfers and chauffeur car",
  Adventure: "Private SUV transfers and guided local transport",
  Pilgrimage: "Private transfers with assisted darshan and guided walks",
  "Destination Wedding": "Luxury coach, bridal car and guest transfers",
  Cruise: "Cruise transfers, port assistance and shore shuttles",
  Camping: "Private SUV transfers and camp access vehicle",
  "Winter Escapes": "Heated private transfers and snow-ready vehicles",
  "City Explorer": "Private chauffeur, metro pass and curated walks",
  "Wellness Retreats": "Private wellness transfers and resort buggy access",
  "Wildlife Safari": "Private transfers and open-jeep safari drives",
};

const mealsByCategory = {
  Vacation: "Daily breakfast, chef-led dinners and sunset mocktails",
  Adventure: "Breakfast, packed trail meals and premium dinners",
  Pilgrimage: "Breakfast, sattvic meals and curated local dining",
  "Destination Wedding": "Custom wedding menus, tastings and gala dinner",
  Cruise: "All onboard meals with specialty dining credit",
  Camping: "Bonfire dinners, breakfast and chef-style camp meals",
  "Winter Escapes": "Breakfast, hot beverages and mountain dinners",
  "City Explorer": "Breakfast, tasting tours and rooftop dining",
  "Wellness Retreats": "Ayurvedic, vegan or wellness-focused full board",
  "Wildlife Safari": "Breakfast, safari snacks and candlelit lodge dinners",
};

const basePrices = {
  Vacation: 185000,
  Adventure: 165000,
  Pilgrimage: 145000,
  "Destination Wedding": 525000,
  Cruise: 210000,
  Camping: 135000,
  "Winter Escapes": 195000,
  "City Explorer": 175000,
  "Wellness Retreats": 220000,
  "Wildlife Safari": 245000,
};

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

const createTrip = (category, name, index) => {
  const duration = `${index % 2 === 0 ? 6 : 5} Days`;
  const amount = basePrices[category] + index * 22000;

  return {
    slug: `${slugify(category)}-${slugify(name)}`,
    category,
    name,
    title: `${name} ${category} Escape`,
    image: imageFor(name),
    gallery: galleryFor(name, category),
    duration,
    hotel: stayByCategory[category],
    transport: transportByCategory[category],
    meals: mealsByCategory[category],
    amount,
    price: formatPrice(amount),
    desc: `A handpicked ${category.toLowerCase()} journey in ${name} with luxury stays, private support and polished TRAVIVA service.`,
    about: `Discover ${name} through a premium ${category.toLowerCase()} itinerary crafted for elegant stays, seamless transport, memorable meals and slow, beautiful moments between every highlight.`,
    itinerary: [
      {
        day: "Day 1",
        activity: `Arrive in ${name}, enjoy VIP assistance and settle into your luxury stay.`,
      },
      {
        day: "Day 2",
        activity: `Explore signature landmarks and hidden corners with a private TRAVIVA guide.`,
      },
      {
        day: "Day 3",
        activity: `Enjoy the main ${category.toLowerCase()} experience with curated dining and scenic pauses.`,
      },
      {
        day: "Day 4",
        activity: "Relax with a premium hotel experience, spa time or a private sunset outing.",
      },
      {
        day: "Day 5",
        activity: "Complete the journey with a farewell breakfast and assisted departure.",
      },
      ...(duration === "6 Days"
        ? [
            {
              day: "Day 6",
              activity:
                "Add a final leisure morning, boutique shopping and smooth onward transfer.",
            },
          ]
        : []),
    ],
  };
};

const experiences = Object.entries(destinationLists).map(
  ([category, destinations]) => {
    const meta = categoryMeta[category];
    const places = destinations.map((name, index) =>
      createTrip(category, name, index)
    );

    return {
      name: category,
      ...meta,
      places,
    };
  }
);

export const allTrips = experiences.flatMap((experience) => experience.places);

export default experiences;
