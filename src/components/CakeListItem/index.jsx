export default function CakeListItem({ cakeItem, handleAddToOrder }) {
    return (
        <div className="flex flex-col justify-center space-y-2 mb-10 mx-4">
            <img 
            className="rounded w-[15rem] h-[15rem] mx-auto my-4 transition-transform transform hover:scale-110"
            src={cakeItem.image} alt="cake photo"/>
            <div className="text-[1.2rem] overflow-hidden mx-2">
  <div className="inline-block max-w-[80%]">
    {cakeItem.name}
  </div>
  <div className="inline-block pl-2">${cakeItem.price.toFixed(2)}</div>
</div>
            <button 
            className="bg-black text-yellow mx-auto px-5 py-2 rounded-full transition-transform transform hover:scale-110"
            onClick={() => handleAddToOrder(cakeItem._id)}
            >
                Add To Cart
            </button>
        </div>
    );
}