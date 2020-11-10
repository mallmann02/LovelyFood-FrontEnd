import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { removeItem, decreaseItem, addItem } from '../../store/cart';

import PageHeader from '../../components/PageHeader';
import ShoppingCartProduct from '../../components/ShoppingCartProduct';

import { AiOutlineWarning } from 'react-icons/ai';

import './styles.css';

interface Product {
    id: number;
    name: string;
    type: string;
    ingredients: string;
    slices: number;
    disponibility: boolean;
    cost: number;
    image: string;
    image_url: string;
}

function ShoppingCart () {
    const cart = useSelector((state: RootStateOrAny) => state.cart)
    const cartLength = useSelector((state: RootStateOrAny) => state.cart.length)

    const [totalCost, setTotalCost] = useState(0)
    var itemQuantCounter = 0;

    var newcart = Array<Product>()

    const dispatch = useDispatch()

    useEffect(() => {
        var cost = 0;
        cart.map((product: Product) => setTotalCost(cost+=product.cost))
    }, [cartLength])

    useEffect(():Product[]|any => {
        console.log(cart)
        var newCart = Array<Product>()

        newCart = cart.filter( (elem:Product, index:number, array:Array<Product>) => {
                return array.indexOf(elem) == index
        })
        
        console.log(newCart) 
    }, [cart])

    function decreaseAmountItemCart(id:string){
        dispatch(decreaseItem(id))
    }

    function addItemCart(product: Product){
        dispatch(addItem(product))
    }

    function removeItemCart(id: string){
        dispatch(removeItem(id))
    }

    function findAmountOnTheCart(id: number){
        itemQuantCounter = 0
        
        cart.map((product:Product) => {
            if(product.id == id){
                itemQuantCounter++;
            }
        })

        return itemQuantCounter;
    }
  
    return (
    <div id="page-shopping-cart">
        <PageHeader />

        <div className="page-shopping-cart-main">
            <header>
                <h1>Seu carrinho de compras</h1>
            </header>
            
            <section className="products-control">
                <div className="products-list">
                    {cart.length !== 0 ? cart.map((product: Product) => (
                        <ShoppingCartProduct 
                            key={product.id}
                            id={product.id} 
                            title={product.name} 
                            amount={findAmountOnTheCart(product.id)} 
                            image={product.image_url} 
                            cost={product.cost}  
                            disponibility={product.disponibility}
                            onMinusClick={decreaseAmountItemCart}
                            onPlusClick={addItemCart}
                            holeProduct={product}
                        />
                    )): 
                        <div className="products-list-empty-warning">
                            <AiOutlineWarning size={100} color="#FFF"/>

                            <h2>Não há produtos no carrinho</h2>
                        </div>
                        }
                </div>

                {cart.length == 0 ? <></> :
                    <div className="products-total-cost">
                        <div>
                            <p>Total: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(totalCost)}</p>
                        </div>

                        <button onClick={() => {}}>Finalizar</button>
                    </div>
                }
            </section>
        </div>
    </div>
  );
}

export default ShoppingCart;