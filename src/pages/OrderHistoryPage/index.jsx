import * as usersService from '../../utilities/users-service';

const OrderHistoryPage = () => {
    const _handleTokenCheck = async () => {
        const expDate = await usersService.checkToken();
        console.log(expDate);
    };
    return (
        <div>
            <h1>Order History Page</h1>
            <button onClick={ _handleTokenCheck }>Check When My Login Expires</button>
        </div>
    )
}

export default OrderHistoryPage;