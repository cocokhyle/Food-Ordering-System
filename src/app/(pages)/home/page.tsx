import Cards from "@/app/components/cards";
import Carousel from "@/app/components/carousel";
import Pagination from "@/app/components/pagination";

export default function Hero() {
  const carouselElements = [
    {
      id: 1,
      srcLink:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    },
    {
      id: 2,
      srcLink:
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    },
  ];

  const cardElements = [
    {
      id: 0,
      imgLink:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      price: "499",
      title: "Shoes!",
      badge: "New",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
    {
      id: 0,
      imgLink:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      price: "399",
      title: "Shoes!",
      badge: "New",
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
