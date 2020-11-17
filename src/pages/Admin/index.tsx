import React, {useState, FormEvent, ChangeEvent} from 'react';

import api from '../../services/api';

const Admin: React.FC = () => {
    const [images, setImages] = useState<File[]>([]);
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [slices, setSlices] = useState('')
    const [disponibility, setDisponibility] = useState(true)
    const [cost, setCost] = useState('')
  
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
          data.append('images', image)
        });
    
        await api.post('products', data);
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
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
        </form>
    </div>
    );
}

export default Admin;