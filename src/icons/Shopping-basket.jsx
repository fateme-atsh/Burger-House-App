import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


class ShoppingBasket extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faShoppingBasket}/>
        </div>);
    }
}
 
export default ShoppingBasket;