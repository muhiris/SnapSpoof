import React from 'react'
import Button from './Button';

function DonationSection2() {
    const handleClick = () => {
        window.open("https://www.albaik.com/");
    };
  return (
    <div className="flex-center flex-col mx-auto max-w-[95vw] text-black">
      <div className="flex-center text-center flex-col gap-4 mb-4">
        <img src="/about.png" alt="" className="w-36" />
        <p className="font-medium  text-5xl mb-0">Support Muslims, </p>
        <p className="font-medium text-5xl">Donate Palestine</p>
      </div>
      <div className=" mt-6 w-[90%]">
        <p className="text-2xl mb-6">
          At Al Baik, we're coming together to help our brothers and sisters in
          Palestine. They're facing tough times, and we want to make a positive
          impact. With your support, we aim to provide essential help for things
          like education, healthcare, and rebuilding efforts.
        </p>
        <p className="text-2xl">
          Join us in supporting Palestine with Al Baik's spirit. For every
          sign-up, we'll donate $10 to charity, making a meaningful impact. Your
          contribution, big or small, brings hope to those facing tough times.
          Together, we can help communities with aid, education, and rebuilding.
          Let's show kindness and empathy, living Al Baik's values – unity,
          compassion, and global well-being.
        </p>
      </div>
      <div className="my-8">
        <Button text={"BUY AL-BAIK"}  onClick={handleClick}/>
      </div>
      <div className="w-full my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6369995528984!2d46.71500341503598!3d24.713551984088926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0125a72f36a5%3A0x973e3e9d77f04a!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
          height="450"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default DonationSection2