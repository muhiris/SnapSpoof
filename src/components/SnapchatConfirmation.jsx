import React, { useState } from "react";
import { FaSnapchat } from "react-icons/fa";
import { Link } from "react-router-dom";
function SnapchatConfirmation() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    
  };

  return (
    <div>
      <Link to="/snapchat"
        className={`w-64 flex-center gap-2 px-4 py-3 rounded-xl bg-yellow text-black`}
      >
        <FaSnapchat className="" size={16} />
        <p className="text-md">
          Confirm with Snapchat
        </p>
      </Link>

    </div>
  );
}

export default SnapchatConfirmation;
