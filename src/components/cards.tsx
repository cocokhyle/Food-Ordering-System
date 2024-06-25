export default function Cards() {
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
      <div className="flex flex-wrap gap-3">
        {cardElements.map((elements, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl grow">
            <figure>
              <img src={elements.imgLink} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {elements.title}
                <div className="badge badge-secondary">{elements.badge}</div>
              </h2>
              <p>{elements.description}</p>
              <div className="card-actions justify-end">
                {elements.categories.map((cat, index) => (
                  <div key={index}>
                    <div className="badge badge-outline">{cat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
