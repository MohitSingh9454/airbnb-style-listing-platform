const sampleListings = [
  {
    title: "Varanasi Riverside Cottage",
    description: "Peaceful riverside cottage in Varanasi",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Lucknow Nawabi Villa",
    description: "Beautiful villa with Nawabi architecture in Lucknow",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Lucknow",
    country: "India",
  },
  {
    title: "Ballia Cozy Cottage",
    description: "A cozy and traditional house in Ballia",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Ballia",
    country: "India",
  },
  {
    title: "Varanasi Heritage House",
    description: "Heritage style house near Ganga river in Varanasi",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Varanasi",
    country: "India",
  },

  // 1 listing from Bihar
  {
    title: "Patna Riverside Villa",
    description: "A villa with riverside view in Patna, Bihar",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    price: 2400,
    location: "Patna",
    country: "India",
  },

  // 1 listing from Mumbai
  {
    title: "Mumbai Sea View Apartment",
    description: "Modern apartment with sea view in Mumbai",
    image:  "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Mumbai",
    country: "India",
  },

  // 1 listing from Delhi
  {
    title: "Delhi Urban Loft",
    description: "Stylish loft in central Delhi",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Delhi",
    country: "India",
  },

  // 1 listing from Punjab
  {
    title: "Amritsar Heritage House",
    description: "Beautiful heritage house in Amritsar",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Amritsar",
    country: "India",
  },

  // 1 listing from Goa
  {
    title: "Goa Riverside Cottage",
    description: "Peaceful riverside cottage in Varanasi",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Goa",
    country: "India",
  },

  // Remaining 20 listings from other Indian cities/states
  {
    title: "Jaipur Royal Villa",
    description: "Royal style villa in Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Kolkata Colonial House",
    description: "Colonial style house in Kolkata, West Bengal",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Kolkata",
    country: "India",
  },
  {
    title: "Chennai Beach Cottage",
    description: "Cottage near Marina Beach, Chennai",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Chennai",
    country: "India",
  },
  {
    title: "Bengaluru Tech Loft",
    description: "Modern loft in Bengaluru tech city",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Bengaluru",
    country: "India",
  },
  {
    title: "Hyderabad Heritage House",
    description: "Heritage style home in Hyderabad",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Hyderabad",
    country: "India",
  },
  {
    title: "Pune City Apartment",
    description: "Apartment in city center, Pune",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Pune",
    country: "India",
  },
  {
    title: "Ahmedabad Heritage Villa",
    description: "Traditional villa in Ahmedabad, Gujarat",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Ahmedabad",
    country: "India",
  },
  {
    title: "Lucknow Nawabi Cottage",
    description: "Cottage with Nawabi style in Lucknow",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Lucknow",
    country: "India",
  },
  {
    title: "Shillong Hilltop Villa",
    description: "Villa with amazing hill views in Shillong",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Shillong",
    country: "India",
  },

{
  title: "Rishikesh Riverside Retreat",
  description: "Luxury riverside villa near Ganga in Rishikesh, Uttarakhand",
  image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=60",
  price: 2600,
  location: "Rishikesh",
  country: "India",
},
{
  title: "Mysuru Palace Villa",
  description: "Royal-style villa near Mysuru Palace, Karnataka",
  image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
  price: 3100,
  location: "Mysuru",
  country: "India",
},
{
  title: "Darjeeling Hilltop Cottage",
  description: "Charming hilltop cottage with scenic views in Darjeeling",
  image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  price: 2800,
  location: "Darjeeling",
  country: "India",
},
{
  title: "Ooty Lakeview Villa",
  description: "Luxury villa with lake view in Ooty, Tamil Nadu",
  image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
  price: 2900,
  location: "Ooty",
  country: "India",
},
{
  title: "Kochi Backwater Villa",
  description: "Elegant villa along the backwaters in Kochi, Kerala",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  price: 3200,
  location: "Kochi",
  country: "India",
},
{
  title: "Shimla Snow View Villa",
  description: "Villa with stunning snow views in Shimla, Himachal Pradesh",
  image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
  price: 3000,
  location: "Shimla",
  country: "India",
},
{
  title: "Leh Mountain Retreat",
  description: "Peaceful mountain villa in Leh, Ladakh",
  image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
  price: 3700,
  location: "Leh",
  country: "India",
},
{
  title: "Andaman Beachfront Villa",
  description: "Luxury villa with private beach in Andaman Islands",
  image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  price: 4500,
  location: "Andaman",
  country: "India",
},
  {
    title: "Coorg Coffee Estate Villa",
    description: "Villa in coffee estate, Coorg, Karnataka",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Coorg",
    country: "India",
  }
  // ... similarly update remaining listings with premium prices
];

module.exports = { data: sampleListings };
