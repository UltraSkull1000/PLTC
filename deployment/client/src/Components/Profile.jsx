import React from "react";
import Gallery from "./Gallery";
import ProgressBar from "./ProgressBar";
function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    desc: "Super awesome guy, unrivaled collector of cards",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  return (
    <div className="items-center bg-white rounded-lg shadow-md p-4 pb-12">
      <div className="text-left mx-10">
        <img
          src={user.imageUrl}
          alt="User Profile"
          className="h-20 w-20 rounded-full border-4 border-purple-800 mb-4"
        />
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.desc}</p>
      </div>
      <div className="mt-8 mx-10 text-left">
        <h3 className="text-xl font-semibold">About Me</h3>
        <p className="text-gray-700 mt-2">
          🌟 About Me: The Legendary Card Whisperer 🌟
          <br /> Greetings, fellow football fanatics and trading card
          aficionados! I'm the elusive maestro of the Premier League trading
          card scene, the Sultan of Swaps, and the maestro of marvelous
          memorabilia – call me the Card Whisperer.
        </p>
        <h3 className="mt-3 text-xl font-semibold">Collection Progress</h3>
        <ProgressBar progress="80" />
      </div>
    </div>
  );
}
export default Profile;
