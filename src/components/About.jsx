import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque
          praesentium culpa. Ad voluptatibus aperiam commodi voluptates vel
          temporibus ut dolorum nostrum architecto cumque mollitia, provident,
          ipsam, quas aliquam natus?
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quisquam neque dolore delectus! Velit ut perspiciatis quas placeat
          maiores voluptatum corporis nemo officia consequatur a. Consequatur,
          fugiat? Officiis voluptates libero placeat voluptatum eos porro
          reiciendis provident odit? Voluptate, unde officia quaerat aliquam
          debitis eos expedita esse cumque veritatis. Debitis, nobis.
        </p>
      </div>
    </div>
  );
};

export default About;
