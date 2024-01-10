import React, { useState, useEffect } from "react";
import DonationSection1 from "../components/DonationSection1";
import DonationSection2 from "../components/DonationSection2";
import Modal from "../components/Modal";
function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
   // Check if the modal has been shown before
   const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");

   if (!hasModalBeenShown) {
     // If not shown before, set the flag in local storage and open the modal
     localStorage.setItem("hasModalBeenShown", true);
     setIsModalOpen(true);
   }
 }, []);
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <img src="/deskt.png" alt="" className="w-full hidden md:block " />
      <img
        src="/respon.svg"
        alt=""
        className="w-full h-32  bg-red md:hidden "
      />
      <DonationSection1 />
      <DonationSection2 />

      {isModalOpen && <Modal isVisible={isModalOpen} />}
    </div>
  );
}

export default Home;
