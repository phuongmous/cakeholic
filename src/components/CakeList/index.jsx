import CakeListItem from '../CakeListItem';
import bakerImage from '../../images/baker.png';

export default function CakeList({ cakeItems, handleAddToOrder }) {
    const items = cakeItems.map(item =>
        <CakeListItem 
        key={item.id}
        cakeItem={item}
        handleAddToOrder={ handleAddToOrder }
        />
        );
        return (
            <div className=" mx-20 bg-yellow rounded-full relative">
                <img className="mt-8 px-6 sm:mt-2 sm:h-[18rem] md:w-5/6 md:ml-4 lg:w-3/5 lg:mx-[7rem] lg:mt-4 w-full object-contain sm:object-fit" 
                src={bakerImage}>
                </img>
                <div className="mb-[14rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {items}
                </div>
            </div>
        );
}