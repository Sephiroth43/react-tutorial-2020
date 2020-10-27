import React, { Fragment, Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Button from './../../UI/Button/Button';
import CheckoutSummary from '../../Order/CheckoutSummary/CheckoutSummary';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentDidUpdate() {
        console.log('[Order summary did update]')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled} >CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}><NavLink to={{
                    // pathname: this.props.match.url + '/new-post',
                    pathname: '/order-summary',
                    hash: '#order'
                }}>CONTINUE</NavLink></Button>
                <Route path="/order-summary" component={CheckoutSummary} />
            </Fragment>
        );
    }
};

export default OrderSummary;