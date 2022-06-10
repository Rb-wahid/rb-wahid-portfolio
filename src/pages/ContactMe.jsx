import React from "react";
import img from "../assets/img/contactme.png";

const ContactMe = () => {
  return (
    <section id="contactMe" className=" py-24">
      <h2 className="uppercase border-y-4 py-5 border-secondary text-4xl text-secondary text-center font-['Calistoga'] ">
        Contact me
      </h2>
      <div class="card lg:card-side bg-base-300 shadow-xl  mx-auto mt-20">
        <figure>
          <img
            src={img}
            width={300}
            className="my-10 lg:ml-10 rounded-2xl"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <div class="form-control">
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              placeholder="Email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <textarea
              class="textarea textarea-bordered"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-secondary">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
