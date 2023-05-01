import React from "react";
import { email } from "../config";

const ContactMe = () => {
  return (
    <div className="w-full max-h-[640px] lg:h-screen p-2" id="contactme">
      <div className="max-w-[1240px] mx-auto text-center  dark:text-white">
        <h2 className="">What’s Next?</h2>
        <h2 className="text-5xl py-5">Get In Touch</h2>
        <p className="py-5">
          I’m currently looking for any new opportunities and my inbox is always
          open. If you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>

        <a className="text-2xl text-teal-600" href={`mailto:${email}`}>
          Say Hello!{" "}
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
