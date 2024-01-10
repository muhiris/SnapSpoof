import React from "react";
import { FaSnapchat, FaGoogle, FaFacebook } from "react-icons/fa6";
import SnapchatConfirmation from "./SnapchatConfirmation";

function SocialButtons() {
  const isSnapchatDisabled = false; 
  const isGoogleDisabled = true; 
  const isFacebookDisabled = true; 

  return (
    <div className="flex flex-col gap-3">
        <SnapchatConfirmation />

      <button
        className={`w-64 flex-center gap-2 px-4 py-3 rounded-xl ${
          isGoogleDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-red text-white"
        }`}
        disabled={isGoogleDisabled}
      >
        <FaGoogle className="" size={16} />
        <p className="text-md">Confirm with Google</p>
      </button>
      <button
        className={`w-64 flex-center gap-2 px-4 py-3 rounded-xl ${
          isFacebookDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#4267B2] text-white"
        }`}
        disabled={isFacebookDisabled}
      >
        <FaFacebook className="" size={16} />
        <p className="text-md">Confirm with Facebook</p>
      </button>
    </div>
  );
}

export default SocialButtons;
