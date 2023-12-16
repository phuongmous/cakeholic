export default function CategoryList({ categories, activeCat, setActiveCat }) {
    const cats = categories.map(cat =>
      <ul
        key={cat}
        className={cat === activeCat ? 'dropdown-item active' : 'dropdown-item'}
        onClick={() => setActiveCat(cat)}
      >
        {cat}
      </ul>
    );
    return (
      <>
        {cats}
      </>
    );
}