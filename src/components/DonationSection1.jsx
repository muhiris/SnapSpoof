import React,{useState} from 'react'
import FundBenifits from "./FundBenifits";
import Button from "./Button";
import Modal from "./Modal";
function DonationSection1() {
    const [isVisible, setIsVisible] = useState(false);
    const [money, setMoney] = useState("200K");
    const handleButtonClick = () => {
      setIsVisible(true);
    };
    const handleCloseModal = () => {
      setIsVisible(false);
    };
    // const handleDonationSubmit = () => {
    //   // Update the money state with $10 more
    //   setMoney((prevMoney) => prevMoney + 10);
    // };

  return (
    <div className="container mx-auto my-8 max-w-[95vw] p-4 py-10 text-black bg-fund rounded-lg">
      <div className="gap-4 grid grid-cols-1 place-items-center py-10 md:grid-cols-2">
        <FundBenifits text={"Food Donation"} />
        <FundBenifits text={"Money Donation"} />
        <FundBenifits text={"Dress Donation"} />
        <FundBenifits text={"Water Supply"} />
        <FundBenifits text={"Education Donation"} />
        <FundBenifits text={"Toy Donation"} />
      </div>
      <div className="w-full flex-center">
        <div className="w-[80%] flex items-start flex-col gap-6">
          <p className="font-medium text-3xl md:text-4xl">Total Donation</p>
          <div className="relative h-3 w-full bg-[#C5CECC] rounded-full mt-2">
            <div className="absolute top-0 left-0 h-full w-1/4 bg-black rounded-full"></div>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-sm font-medium md:text-xl">
              Raised - ${money}
            </p>
            <p className="text-sm font-medium md:text-xl">Goal - $1M</p>
          </div>
          <div className="w-full flex-center">
            <Button text={"Donate Now"} onClick={handleButtonClick} />

            <Modal isVisible={isVisible} onClose={handleCloseModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationSection1