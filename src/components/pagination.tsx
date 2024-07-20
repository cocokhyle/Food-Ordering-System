export default function Pagination() {
  return (
    <main>
      <div className="join">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          defaultChecked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </main>
  );
}
