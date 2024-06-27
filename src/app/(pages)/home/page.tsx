import Cards from "@/app/components/cards";
import Carousel from "@/app/components/carousel";
import Pagination from "@/app/components/pagination";

export default function Hero() {
  const carouselElements = [
    {
      id: 1,
      srcLink:
        "https://lh3.googleusercontent.com/d/1Joc1PqpiYqj2VUPR1pjMqmwfRFHbMmhx",
    },
    {
      id: 2,
      srcLink:
        "https://lh3.googleusercontent.com/d/1wQNmoXmI0GNscpuOm2KBndErlbkMej5C",
    },
    {
      id: 3,
      srcLink:
        "https://lh3.googleusercontent.com/d/1wQNmoXmI0GNscpuOm2KBndErlbkMej5C",
    },
  ];

  const cardElements = [
    {
      id: 0,
      imgLink:
        "https://lh3.googleusercontent.com/d/1-Fx4NLnwH_XnrMC9Kbmz2jxk7VpcJc1A",
      price: "499",
      title: "Shoes!",
      badge: "Sale",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
    {
      id: 1,
      imgLink:
        "https://lh3.googleusercontent.com/d/15R-dM0d6MyujbDpXTm0Uuk7igMGFKlLp",
      price: "399",
      title: "Shoes!",
      badge: "New",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
    {
      id: 1,
      imgLink:
        "https://lh3.googleusercontent.com/d/15R-dM0d6MyujbDpXTm0Uuk7igMGFKlLp",
      price: "399",
      title: "Shoes!",
      badge: "Limited",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
  ];

  return (
    <main>
      <div>
        <div>
          <Carousel elements={carouselElements} />
        </div>
      </div>
      <div className="mt-5 flex gap-3 flex-wrap">
        {cardElements.map((elements, index) => (
          <Cards
            key={index}
            id={elements.id}
            price={elements.price}
            imgLink={elements.imgLink}
            title={elements.title}
            badge={elements.badge}
            description={elements.description}
            categories={elements.categories}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Pagination />
      </div>
    </main>
  );
}
