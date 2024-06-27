"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();

  const productDetails = [
    {
      id: 1,
      title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "499",
      imgLink:
        "https://lh3.googleusercontent.com/d/1-Fx4NLnwH_XnrMC9Kbmz2jxk7VpcJc1A",
    },
    {
      id: 1,
      title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "399",
      imgLink:
        "https://lh3.googleusercontent.com/d/15R-dM0d6MyujbDpXTm0Uuk7igMGFKlLp",
    },
  ];

  return (
    <main>
      <div className="h-auto w-full pt-10 flex flex-col items-center mb-10">
        <div className="">
          <div className="flex items-center w-full mb-5">
            <button
              className="text-[25px] mr-10 btn btn-circle"
              onClick={() => router.push("/")}
            >
              ❮
            </button>
            <div className="divider divider-start w-full">
              <h1 className="font-bold text-[30px]">My Cart</h1>
            </div>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-xl flex w-full p-5 h-fit mt-2 justify-between">
            <div className="flex gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary"
              />
              <h1>Select All (Items: 3)</h1>
            </div>
            <div>
              <button>Delete</button>
            </div>
          </div>

          {productDetails.map((details, index) => (
            <div
              key={index}
              className="card lg:card-side bg-base-100 shadow-xl flex w-fit h-fit mt-2"
            >
              <div className="w-[20rem] p-3 flex justify-center items-center">
                <img src={details.imgLink} alt="Album" />
              </div>

              <div className="card-body ">
                <div className="grid grid-row-4 gap-y-3">
                  <div>
                    <h2 className="card-title">{details.title}</h2>
                    <p>{details.description}</p>
                  </div>

                  <div className="">
                    <h2 className="card-title text-[40px] mb-3">
                      ${details.price}
                    </h2>
                  </div>
                  <div className="join">
                    <button className="join-item btn">-</button>
                    <button className="join-item btn">1</button>
                    <button className="join-item btn">+</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-10">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
              </div>
            </div>
          ))}
          <div className="flex flex-row items-center justify-between mt-10">
            <div className="p-3 rounded-md">
              <h1 className="text-[20px] font-bold">Total: $898</h1>
            </div>
            <div className="">
              <div className="card-actions">
                <button className="btn  bg-blue-700 text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
