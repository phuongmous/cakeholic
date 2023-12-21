import { BsCart4 } from "react-icons/bs";

export default function CakeListItem({ cakeItem, handleAddToOrder }) {
    return (
        <div className="flex flex-col justify-center space-y-2 mb-10 mx-4">
            <img 
            className="rounded w-[15rem] h-[15rem] mx-auto my-4 transition-transform transform hover:scale-110"
            src={cakeItem.image} alt="cake photo"/>
            <div className="mx-2 sm:h-8">
                <div className="inline max-w-[80%] text-md">
                {cakeItem.name}
                </div>
            </div>
            <div className="flex justify-between items-center mx-16 sm:mx-20 md:mx-2">
                <div className="inline-block sm:px-3">${cakeItem.price.toFixed(2)}</div>
                <div>
                -
                </div>
                <button 
                className="text-black text-xl px-5 py-2 rounded-full transition-transform transform hover:scale-110"
                onClick={() => handleAddToOrder(cakeItem._id)}
                >
                    <BsCart4 />
                </button>
            </div>
        </div>
    );
}