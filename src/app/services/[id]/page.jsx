import React from "react";
const data = [
  {
    id: 1,
    title: "Modern UI Dashboard",
    name: "Dashboard Design",
    image: "https://i.ibb.co/7QpKsCX/ui-dashboard.jpg",
    description: "A clean and modern dashboard interface for admin panels.",
  },
  {
    id: 2,
    title: "E-commerce Product Card",
    name: "Product Card",
    image: "https://i.ibb.co/4V0G9Vt/product-card.jpg",
    description: "Minimal product card UI with hover effects.",
  },
  {
    id: 3,
    title: "Landing Page Hero",
    name: "Hero Section",
    image: "https://i.ibb.co/Wk0NGcZ/hero-section.jpg",
    description: "Bold hero section with strong typography and CTA button.",
  },
  {
    id: 4,
    title: "Food Delivery UI",
    name: "Food App",
    image: "https://i.ibb.co/nDMjkdc/food-app.jpg",
    description: "Mobile UI design for a food delivery service.",
  },
  {
    id: 5,
    title: "Travel App Design",
    name: "Travel App",
    image: "https://i.ibb.co/0F2P5sH/travel-app.jpg",
    description: "Clean UI for booking flights and hotels.",
  },
  {
    id: 6,
    title: "Portfolio Template",
    name: "Portfolio UI",
    image: "https://i.ibb.co/4Y3pwYg/portfolio-template.jpg",
    description: "A portfolio layout for designers and developers.",
  },
  {
    id: 7,
    title: "Crypto Dashboard",
    name: "Crypto UI",
    image: "https://i.ibb.co/hKBXwNC/crypto-dashboard.jpg",
    description: "Real-time crypto dashboard with charts.",
  },
  {
    id: 8,
    title: "Music Player App",
    name: "Music App",
    image: "https://i.ibb.co/Gt5WB5Y/music-app.jpg",
    description: "Simple music player UI with playlist support.",
  },
  {
    id: 9,
    title: "Online Course Platform",
    name: "Course UI",
    image: "https://i.ibb.co/2MdFDK6/online-course.jpg",
    description: "Learning platform UI with course cards and categories.",
  },
  {
    id: 10,
    title: "Social Media Feed",
    name: "Social App",
    image: "https://i.ibb.co/7jggF6G/social-app.jpg",
    description: "A clean social media feed interface.",
  },
];
const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const filterData = data.find((i) => Number(id) === i.id);
  if (filterData) {
    return (
      <div className="p-6">
        <p className="text-xl font-semibold">Params ID: {filterData.id}</p>
        <p>{filterData.title}</p>
        <p>{filterData.name}</p>
        <p>{filterData.description}</p>
      </div>
    );
  } else {
    return <p>Data not found</p>;
  }
};

export default DetailsPage;
