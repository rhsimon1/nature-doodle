"use client";
import React from "react";
import Link from "next/link";
import { UserIcon, MapPinIcon, ThumbsUpIcon } from "lucide-react";
const DrawingCard = ({
  id,
  title,
  username,
  location,
  imageUrl,
  likes,
  guesses,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-80 object-cove object-cover" />
      <div className="p-1">
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <UserIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">{username}</span>
        </div>
        <div className="flex items-center mt-1 text-gray-600">
          <MapPinIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex items-center text-gray-600">
            <ThumbsUpIcon className="w-4 h-4 mr-1" />
            <span className="text-sm">{likes} likes</span>
          </div>
          <div className="text-sm text-gray-600">{guesses} guesses</div>
        </div>
        <Link
          href={`/guess/${id}`}
          className="block mt-3 text-center py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Guess This Drawing
        </Link>
      </div>
    </div>
  );
};
export default DrawingCard;
