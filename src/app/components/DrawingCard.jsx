'use client';
import React from 'react';
import Link from 'next/link';
import { UserIcon, MapPinIcon, ThumbsUpIcon } from 'lucide-react';

const DrawingCard = ({
  id,
  title,
  username,
  location,
  imageUrl,
  likes,
  guesses,
  description, // Add this if you have a description
  dateTime,
  displayBottom, // Add this if you have a date/time value
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Top Section: User & Location */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center text-gray-600 mb-1">
          <UserIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">{username}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPinIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
      </div>

      {/* Image Sandwiched in White */}
      <div className="bg-white p-2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-65 object-cover rounded-md"
        />
      </div>

      {/* Bottom Section: Title, Date/Time, Description, Likes/Guesses, Button */}
      {displayBottom ? (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-800">{title}</h3>

          {dateTime && (
            <p className="text-sm text-gray-500 mt-1">
              {new Date(dateTime).toLocaleString()}
            </p>
          )}

          {description && (
            <p className="text-sm text-gray-700 mt-2">{description}</p>
          )}

          <div className="flex justify-between items-center mt-3 text-gray-600">
            <div className="flex items-center">
              <ThumbsUpIcon className="w-4 h-4 mr-1" />
              <span className="text-sm">{likes} likes</span>
            </div>
            <div className="text-sm">{guesses} guesses</div>
          </div>

          <div className="flex mt-4 gap-2">
            <button
              className="flex-1 text-center py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors"
              onClick={() => alert('some kinda java script witch craft')}
            >
              Bonus Feature
            </button>
            <Link
              href={`/guess/${id}`}
              className="flex-1 text-center py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Guess This Drawing
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DrawingCard;
