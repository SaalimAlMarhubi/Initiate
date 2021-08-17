import React from "react";
import StaffPhoto from "../img/Profile@2x.png";

function Card(props) {
  const { staffMember } = props;
  return (
    <div className="pl-3 w-80 pb-5">
      <div className="flex bg-white">
        <img
          src={StaffPhoto}
          alt="Staff Profile"
          className="h-20 w-20 object-fit object-cover border-r-4 border-staffBlue"
        />
        <div>
          <h2 className="font-semibold">{staffMember.name}</h2>
          <h3>{staffMember.jobTitle}</h3>

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
        </div>
      </div>
    </div>
  );
}

export default Card;
