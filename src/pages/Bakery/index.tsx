import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { FiFilter } from 'react-icons/fi';

import PageHeader from '../../components/PageHeader';
import ProductCard from '../../components/ProductCard';
import ProductDetail from '../../components/ProductDetail';

import { IoIosArrowForward } from 'react-icons/io';

import api from '../../services/api';

import { getAllCars } from '../../store/fecthAction';
import { addItem } from '../../store/cart';

import generateUniqueId from '../../utils/generateUniqueId';

import './styles.css';
import './styles_filter_items.css';

interface Data{
    id: number
    image: string;
    image_url: string;
    name: string;
    ingredients: string;
    disponibility: boolean;
    slices: number;
    type: string;
    cost: number;
}

interface Item{
  id: number;
  title: string;
  image_url: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  image_url: string;
  disponibility: boolean;
  type: string;
  slices: number;
  cost: number;
}

function Bakery() {
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
  const [isDetailVisible, setIsDetailVisible] = useState<boolean>(false);

  const [items, setItems] = useState<Item[]>([]);
  // const [products, setProducts] = useState<Product[]>([]);

  const [productType, setProductType] = useState<string>('Torta');
  const [productId, setProductId] = useState<string>('');

  const [data, setData] = useState<Data>({} as Data);

  const dispatch = useDispatch()
  const cars = useSelector((state: RootStateOrAny) => state.cars)

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data); 
    })
  }, [])

  useEffect(() => {
    dispatch(getAllCars(productType))
  }, [productType, dispatch])

  useEffect(() =>{
    api.get(`products/${productId}`).then(response =>{ 
      setData(response.data);
    })
}, [productId]);
  
  async function addItemToTheCart(product:Product) {
    dispatch(addItem(product))
  }

  return (
    <div id="page-bakery">
        <PageHeader />

        { isDetailVisible && 
          <ProductDetail title={data.name} image={data.image_url} slices={data.slices} onClick={() => setIsDetailVisible(!isDetailVisible)} ingredients={data.ingredients} holeProduct={data} addToTheCart={addItemToTheCart}/> 
        }
        <div className="bakery-main">
            <section className="filters">
              <FiFilter size={22} onClick={() => setIsFiltersVisible(!isFiltersVisible)} cursor="pointer"/>
              
              { isFiltersVisible && 
              <div id="bakery-filters">
                <IoIosArrowForward size={22} color="#000" />
                
                {items.map(item => (
                  <div key={String(item.id)} className="filters-item" 
                    onClick={() => {
                      setProductType(item.title)
                    }}>
                    <section className="item-photo">
                      <img src={item.image_url}/>
                    </section>

                    <p className="item-name">{item.title}</p>
                  </div>
                ))}
              </div> } 
            </section>
            
            <div className="bakery-cards">
              {cars.map((product:Product) => (
                <ProductCard key={String(product.id)} name={product.name} image={product.image_url} cost={product.cost} disponibility={product.disponibility} holeProduct={product}
                  onClickDetailButton={() => {
                    setIsDetailVisible(!isDetailVisible)
                    setProductId(String(product.id))
                  }}
                  
                  onClickShop={addItemToTheCart}
                  />
              ))}
            </div>
        </div>
    </div>
  );
}

export default Bakery;