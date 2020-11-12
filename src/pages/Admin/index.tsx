import React, {useState} from 'react';

const Admin: React.FC = () => {
    const [images, setImages] = useState<File[]>([]);
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [slices, setSlices] = useState('')
    const [disponibility, setDisponibility] = useState(true)
    const [cost, setCost] = useState('')
  
    return (
    <div>
        <form>
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

            <input multiple /**onChange={handleSelectImages} */ type="file" id="image[]" />
        </form>
    </div>
    );
}

export default Admin;