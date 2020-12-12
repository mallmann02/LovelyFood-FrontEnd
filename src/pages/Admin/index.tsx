import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';

import ProductCard from '../../components/ProductCard';

import { getAllCars } from '../../store/fecthAction';

import { FiFilter } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';

import bakeRoll from '../../assets/images/cakeSliceColorfull.png';

import api from '../../services/api';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import './styles.css'

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

const Admin: React.FC = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false)
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

    const [productType, setProductType] = useState<string>('Muffin')
    
    const [images, setImages] = useState<File[]>([]);
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [slices, setSlices] = useState('')
    const [disponibility, setDisponibility] = useState(true)
    const [cost, setCost] = useState('')

    const [items, setItems] = useState<Item[]>([])

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
  
    function handleSelectImages(event: ChangeEvent<HTMLInputElement>){
        if (!event.target.files) {
            return;
          }
        
        const selectedImages = Array.from(event.target.files);

        setImages(selectedImages);
    }

    async function handleSubmit(e: FormEvent){
        e.preventDefault()
    
        const data = new FormData();
    
        data.append('name', name)
        data.append('type', type)
        data.append('description', description)
        data.append('slices', slices)
        data.append('cost', cost)
        data.append('disponibility', String(disponibility))
    
        images.forEach(image => {
          data.append('image', image)
        });
    
        console.log(images)
        await api.post('products', data);
    }

    return (
    <div id="page-admin">
        <div className="admin-welcome">
            <h1>Seja Bem-Vindo(a)</h1>

            <div className="admin-welcome-icons">
                <img src={bakeRoll}/>
                <img src={bakeRoll}/>
                <img src={bakeRoll}/>
                <img src={bakeRoll}/>
            </div>

            <p className="admin-welcome-paragraph">
            Aqui, confeiteiro(a), você poderá fazer 
            quaisquer alterações nas informações de seu produtos, 
            bem como adicionar novos.
            </p>
        </div>

        {isFormVisible && <form onSubmit={handleSubmit}>
            <input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />

            <input 
                id="type" 
                value={type} 
                onChange={(e) => setType(e.target.value)}
            />

            <input 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            />

            <input 
                id="cost" 
                value={cost} 
                onChange={(e) => setCost(e.target.value)}
            />

            <input 
                id="slices" 
                value={slices} 
                onChange={(e) => setSlices(e.target.value)}
            />

            <input multiple onChange={handleSelectImages} type="file" id="image[]" />

            <button className="confirm-button" type="submit">
                Confirmar
            </button>
        </form>}
        
        <line></line>

        <div className="admin-navigation-actions">
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

            <div className="admin-action-cards">
                <div className="action-card">
                    <AiOutlinePlus size={75}/>
                </div>
                
                {cars.map((product:Product) => (
                    <ProductCard key={String(product.id)} name={product.name} image={product.splited_images} cost={product.cost} disponibility={product.disponibility}
                        onClickDetailButton={() => {}}
                    />
                ))}
            </div>
        </div>
    </div>
    );
}

export default Admin;