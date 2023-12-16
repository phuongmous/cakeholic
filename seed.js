require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function () {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Macarons', sortOrder: 10},
        {name: 'Tarts', sortOrder: 20},
        {name: 'Muffins', sortOrder:30},
        {name: 'Cupcakes', sortOrder: 40},
        {name: 'Cakes', sortOrder: 50}
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {
            name: 'Chocolate & Hazelnut Rocher Macarons', 
            category: categories[0], 
            price: 3.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702611050/cache_428_428_3_0_100_16777215_choc-rocher-macarons_mi3tde.jpg'
        },
        {
            name: 'Vanilla Bean Macarons',
            category: categories[0],
            price: 3.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702611225/cache_428_428_3_0_100_16777215_vanilla-macarons-400x400_rafnms.jpg'
        },
        {
            name: 'Chocolate Truffle Macarons',
            category: categories[0],
            price: 3.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702611112/cache_428_428_3_0_100_16777215_choc-truffle-macaron-400x400_zs6zyd.jpg'
        },
        {
            name: 'Forest Berry Macarons',
            category: categories[0],
            price: 3.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702611168/cache_428_428_3_0_100_16777215_forrest-macaron-400x400_xlbmz5.jpg'
        },
        {
            name: 'Passion Fruit Macarons',
            category: categories[0],
            price: 3.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702611173/cache_428_428_3_0_100_16777215_passionfruit-macaron-400x400_zppvdb.jpg'
        },
        {
            name: 'Roasted Pistachio Macarons',
            category: categories[0],
            price: 3.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702611188/cache_428_428_3_0_100_16777215_pistacchio-macarons201-400x400_vj1bg1.jpg'
        },
        {
            name: 'Salted Caramel Macarons',
            category: categories[0],
            price: 3.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702611201/web2022-400x400_zeuh8c.png'
        },
        {
            name: 'Strawberry Rose Macarons',
            category: categories[0],
            price: 3.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702611217/web2024-1-400x400_wkrjtb.png'
        },
        {
            name: 'Lemon Curd Tart with Meringue',
            category: categories[1],
            price: 35.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702612809/Lemon-Curd-Tart-Feature_m48kmg.jpg'
        },
        {
            name: 'Raspberry Tart',
            category: categories[1],
            price: 35.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702612888/Raspberry-Tart-Feature_pb6tsb.jpg'
        },
        {
            name: 'Apple Frangipane Tart',
            category: categories[1],
            price: 35.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702612980/Apple-Frangipane-Tart-Feature_ik192k.jpg'
        },
        {
            name: 'Rustic Blackberry Tart',
            category: categories[1],
            price: 35.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702613052/Blackberry-Tart-feature_pyuarq.jpg'
        },        
        {
            name: 'Pear Frangipane Tart',
            category: categories[1],
            price: 35.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702613220/Pear-Frangipane-Tart-Feature_xuygam.jpg'
        },
        {
            name: 'French Orange Tart',
            category: categories[1],
            price: 35.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702613321/Orange-Tart-Feature_nozh7w.jpg'
        },
        {
            name: 'Apricot Frangipane Tart',
            category: categories[1],
            price: 35.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702613372/Apricot-Frangipane-Feature_ms2vkh.jpg'
        },
        {
            name: 'French Chocolate Ganache Tart',
            category: categories[1],
            price: 35.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702613461/Chocolate-Ganache-Tart-Feature_j8yphr.jpg'
        },
        {
            name: 'French Strawberry Custard Tart',
            category: categories[1],
            price: 35.00, 
            image: 'https://res.cloudinary.com/duhobrukf/image/upload/v1702613499/Strawberry-Custard-Tart-Feature_e0mmnl.jpg'
        },
        {
            name: 'Spiced Pear Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2020/07/Pear-Muffin-Feature.jpg'
        },
        {
            name: 'Cheddar and Spinach Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2019/10/Spinach-Cheddar-Muffin-Feature.jpg'
        },
        {
            name: 'Double Chocolate Brownie Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2020/02/Brownie-Muffins-feature1.jpg'
        },
        {
            name: 'Light Lemon Raspberry Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2019/07/Lemon-Raspberry-Muffins-feature1.jpg'
        },
        {
            name: 'Flourless Oatmeal Banana Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2020/04/Oatmeal-Banana-Muffins-Feature1.jpg'
        },
        {
            name: 'Lemon Blueberry Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2019/06/Lemon-Blueberry-Muffins5-e1574466962495.jpg'
        },
        {
            name: 'Chocolate Peanut Butter Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2020/10/Chocolate-Peanut-Butter-Muffins-Feature.jpg'
        },
        {
            name: 'Orange and Poppy Seed Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2020/05/Orange-Poppy-Seed-Muffin-Feature.jpg'
        },
        {
            name: 'Chocolate Chip Oatmeal Banana Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2021/03/Choc-Chip-Banana-Oatmeal-Muffins-Feature.jpg'
        },
        {
            name: 'Vegan Carrot Cake Muffins',
            category: categories[2],
            price: 5.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2019/08/Carrot-Muffin-e1573796891974-1024x1024.jpg'
        },
        {
            name: 'Cookies and Cream Oreo Cupcakes',
            category: categories[3],
            price: 4.00, 
            image: 'https://beyondfrosting.com/wp-content/uploads/2018/04/Cookies-and-Cream-Oreo-Cupcakes-003-1-768x1152.jpg'
        },
        {
            name: 'Frosted Football Cupcakes',
            category: categories[3],
            price: 4.00, 
            image: 'https://beyondfrosting.com/wp-content/uploads/2022/12/Easy-Football-Cupcakes-9262-768x1152.jpg'
        },
        {
            name: 'Lemon Cupcakes',
            category: categories[3],
            price: 4.00, 
            image: 'https://beyondfrosting.com/wp-content/uploads/2014/08/Lemon-Cupcakes-016-768x1152.jpg'
        },
        {
            name: 'Chocolate Cupcakes',
            category: categories[3],
            price: 4.00, 
            image: 'https://beyondfrosting.com/wp-content/uploads/2018/11/Easy-Moist-Chocolate-Cupcakes-024-768x1152.jpg'
        },
        {
            name: 'Green Velvet Cupcakes',
            category: categories[3],
            price: 4.00, 
            image: 'https://beyondfrosting.com/wp-content/uploads/2022/03/Green-Velvet-Cupcakes-1784-768x1152.jpg'
        },
        {
            name: 'Rainbow Cupcakes',
            category: categories[3],
            price: 4.00, 
            image: 'https://beyondfrosting.com/wp-content/uploads/2022/02/Rainbow-Cupcakes-with-Rainbow-Frosting-1917-768x1153.jpg'
        },
        {
            name: 'Gluten-Free Chocolate Cupcakes',
            category: categories[3],
            price: 4.00, 
            image: 'https://beyondfrosting.com/wp-content/uploads/2021/08/Gluten-Free-Chocolate-Cupcakes-041-768x1152.jpg'
        },
        {
            name: 'Coconut Cupcakes',
            category: categories[3],
            price: 4.00, 
            image: 'https://beyondfrosting.com/wp-content/uploads/2021/06/Coconut-Cupcakes-2534-768x1152.jpg'
        },
        {
            name: 'Strawberry Cupcakes',
            category: categories[3],
            price: 4.00, 
            image: 'https://beyondfrosting.com/wp-content/uploads/2023/05/Strawberry-Cupcakes-0761-768x1152.jpg'
        },
        {
            name: 'Pear and Chocolate Cake',
            category: categories[4],
            price: 52.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2018/07/Chocolate-Pear-Cake-Feature.jpg'
        },
        {
            name: 'Mango Mousse Cake',
            category: categories[4],
            price: 52.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2022/11/Mango-Mousse-Cake-Feature.jpg'
        },
        {
            name: 'Strawberry Charlotte Cake',
            category: categories[4],
            price: 52.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2020/01/Strawberry-Charlotte-Feature1.jpg'
        },
        {
            name: 'Yogurt Plum Cake',
            category: categories[4],
            price: 52.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2022/04/Yogurt-Plum-Cake-Feature.jpg'
        },
        {
            name: 'French Apple Cake',
            category: categories[4],
            price: 52.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2022/08/Easy-French-Apple-Cake-Feature.jpg'
        },
        {
            name: 'Strawberry Mousse Cake',
            category: categories[4],
            price: 52.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2022/05/Strawberry-Mousse-Cake-Feature.jpg'
        },
        {
            name: 'Lemon Meringue Cake',
            category: categories[4],
            price: 52.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2019/04/Lemon-Meringue-Cake-Feature.jpg'
        },
        {
            name: 'Pear and Almond Cake',
            category: categories[4],
            price: 52.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2020/04/Pear-Almond-Cake-feature.jpg'
        },
        {
            name: 'Blood Orange Cake',
            category: categories[4],
            price: 52.00, 
            image: 'https://www.abakingjourney.com/wp-content/uploads/2020/10/Upside-Down-Blood-Orange-Cake-Feature.jpg'
        },
    ]);

    console.log(items)

    process.exit();
})();