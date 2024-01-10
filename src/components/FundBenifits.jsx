import React from 'react'
import { TiTick } from "react-icons/ti";
function FundBenifits({text}) {
  return (
    <div className="flex gap-6 items-center w-56 md:w-96">
      <TiTick className="bg-red text-white rounded-2xl" size={24} />
      <p className="text-xl font-medium md:text-2xl">{text}</p>
    </div>
  );
}

export default FundBenifits