interface CardProps {
  imgLink: string;
  title: string;
  badge: string;
  description: string;
  categories: string[];
}

const Card: React.FC<CardProps> = ({
  imgLink,
  title,
  badge,
  description,
  categories,
}) => {
  return (
    <main>
      <div className="card bg-base-100 w-96 shadow-xl grow">
        <figure>
          <img src={imgLink} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{badge}</div>
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
    </main>
  );
};
export default Card;
