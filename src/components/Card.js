import React from "react";
import StaffPhoto from "../img/Profile@2x.png";

function Card(props) {
  const { staffMember } = props;
  return (
    // Card
    <div className="w-full grid grid-flow-col grid-cols-cardCols md:grid-cols-none md:grid-flow-row">
      {/* Image Wrapper */}
      <div className="max-h-60 md:h-60">
        <img
          src={StaffPhoto}
          alt="Staff Profile"
          className="h-full object-fit object-cover border-r-4 md:border-r-0 md:border-b-4 border-staffBlue"
        />
      </div>
      {/* Details Wrapper */}
      <div className="bg-white p-2 md:h-28">
        <h2 className="font-semibold">{staffMember.name}</h2>
        <h3>{staffMember.jobTitle}</h3>
        <button className="flex items-end shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 bg-white rounded-full shadow-2xl text-staffBlue justify-end"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
