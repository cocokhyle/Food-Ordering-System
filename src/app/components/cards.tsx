"use client";

import { useRef } from "react";

interface CardProps {
  id: number;
  imgLink: string;
  title: string;
  price: string;
  badge: string;
  description: string;
  categories: string[];
}

const Card: React.FC<CardProps> = ({
  id,
  imgLink,
  title,
  price,
  badge,
  description,
  categories,
}) => {
  const getClassName = (badge: string): string => {
    if (badge === "New") return "badge badge-secondary";
    if (badge === "Sale") return "badge badge-error";
    if (badge === "Limited") return "badge badge-warning";
    return "badge badge-neutral";
  };

  const className = getClassName(badge);

  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <main>
      <div className="card bg-base-100 w-96 shadow-md grow" onClick={openModal}>
        <figure>
          <img src={imgLink} alt="Shoes" />
        </figure>

        <div className="card-body">
          <h1 className=" font-bold text-[30px]"> ${price}</h1>
          <h2 className="card-title">
            {title}
            <div className={className}>{badge}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {categories.map((cat, index) => (
              <div key={index}>
                <div className="badge badge-outline">{cat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <figure>
            <img src={imgLink} alt="Shoes" />
          </figure>

          <div className="card-actions justify-end mt-5">
            {categories.map((cat, index) => (
              <div key={index}>
                <div className="badge badge-outline">{cat}</div>
              </div>
            ))}
          </div>
          <div className="card-body">
            <h1 className=" font-bold text-[30px]"> ${price}</h1>
            <h2 className="card-title">
              {title}
              <div className={className}>{badge}</div>
            </h2>
            <p>{description}</p>
          </div>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              {/* Add to cart btn */}
              <div className="flex justify-center items-center rounded-lg pl-10 pr-10">
                <div
                  role="button"
                  className="btn btn-ghost rounded-lg bg-gray-700"
                  // onClick={() => router.push("/cart")}
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <button className="btn text-white w-full bg-blue-700">
                  Buy
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
};
export default Card;
