import Cards from "@/app/components/cards";

export default function Hero() {
  const cardElements = [
    {
      imgLink:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      badge: "New",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
    {
      imgLink:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      badge: "New",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
    {
      imgLink:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      badge: "New",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
    {
      imgLink:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      badge: "New",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
    {
      imgLink:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      badge: "New",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
    {
      imgLink:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      badge: "New",
      description: "If a dog chews shoes whose shoes does he choose?",
      categories: ["Fasion", "Producsts"],
    },
  ];

  return (
    <main>
      <div>
        <div className="carousel w-full rounded-lg">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex gap-3 flex-wrap">
        {cardElements.map((elements, index) => (
          <Cards
            key={index}
            imgLink={elements.imgLink}
            title={elements.title}
            badge={elements.badge}
            description={elements.description}
            categories={elements.categories}
          />
        ))}
      </div>
    </main>
  );
}
