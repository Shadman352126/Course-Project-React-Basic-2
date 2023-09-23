const Item = ({ item, selectedBtnHandleClick }) => {
  const { details, price, credit, courseName, image } = item;

  return (
    <div className="">
      <div className="card w-80 h-[450px] md:w-72 bg-base-100 shadow-md">
        <figure>
          <img src={image} alt={courseName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{courseName}</h2>
          <p>{details}</p>
          <div className="flex justify-between mt-3">
            <h3 className="font-bold">Price: ${price}</h3>
            <h3 className="font-bold -ml-10">Credit: {credit}hr</h3>
          </div>
          <div className="card-actions justify-end">
            <button
              className="w-full bg-[#2F80ED] hover:bg-[#27005D] transition-all py-2 mt-4 rounded-md text-[#fff] font-bold"
              onClick={() => selectedBtnHandleClick(item, credit, price)}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
