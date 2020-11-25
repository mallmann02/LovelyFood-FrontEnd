import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { FiFilter } from 'react-icons/fi';

import PageHeader from '../../components/PageHeader';
import ProductCard from '../../components/ProductCard';
import ProductDetail from '../../components/ProductDetail';

import { IoIosArrowForward } from 'react-icons/io';

import api from '../../services/api';

import { getAllCars } from '../../store/fecthAction';

import './styles.css';
import './styles_filter_items.css';

interface Item{
  id: number;
  title: string;
  image_url: string;
}

interface Product {
  id: number;
  name: string;
  images: string;
  splited_images: string[];
  disponibility: boolean;
  type: string;
  slices: number;
  cost: number;
  description: string;
}

function Bakery() {
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
  const [isDetailVisible, setIsDetailVisible] = useState<boolean>(false);

  const [items, setItems] = useState<Item[]>([]);

  const [productType, setProductType] = useState<string>('Torta');

  const [images, setImages] = useState<string[]>([])
  const [description, setDescription] = useState("")
  const [slices, setSlices] = useState(0)

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

  return (
    <div id="page-bakery">
        <PageHeader />

        { isDetailVisible && 
          <ProductDetail image={images} slices={slices} onClick={() => setIsDetailVisible(!isDetailVisible)} description={description}>

            {images.map(pic =>(
              <div className="image-item-product-detail">
                <img src={pic} alt="product-picture"/>
              </div>
            ))}

          </ProductDetail> 
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
                <ProductCard key={String(product.id)} name={product.name} image={product.splited_images} cost={product.cost} disponibility={product.disponibility}
                  onClickDetailButton={() => {
                    setIsDetailVisible(!isDetailVisible)
                    setDescription(product.description)
                    setImages(product.splited_images)
                    setSlices(product.slices)
                  }}
                  />
              ))}
            </div>
        </div>
    </div>
  );
}

export default Bakery;