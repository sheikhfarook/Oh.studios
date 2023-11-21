import React from "react";

const HeroName = () => {

  const categories = [
    {
      name: "Expertise",
      id: 1,
    },
    {
      name: "Branding",
      id: 2,
    },
    {
      name: "Product",
      id: 3,
    },
    {
      name: "Design Systems",
      id: 4,
    },
  ];
  return (
    <div className="mt-40">
      <p className="flex justify-center text-5xl xl:text-7xl w-[770px] font-medium text-center m-auto">
        A brand and  product designer working with clients globally
      </p>

      <div className="flex justify-center items-center text-sm  gap-3 mt-14 ">

        {categories?.map((cat,i) => (
          <div key={cat.id} className={i !== 0 &&  " bg-[#f3f2f1] rounded-2xl p-2"}>
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default HeroName;
