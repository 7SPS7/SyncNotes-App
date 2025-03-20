import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { updateToPastes } from './Redux/PasteSlice';

const Update = () => {
    const { id } = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.find((p) => p._id === id);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        if (paste) {
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [paste]);

    function updatePaste() {
        const updatedPaste = {
            title,
            content: value,
            _id: id || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        };
        dispatch(updateToPastes(updatedPaste));

        // Redirect to "/pastes" after updating
        navigate('/pastes');
    }

    return (
        <div>
            <div className='mt-30 flex flex-col items-center min-h-screen'>
                <h1 className='text-7xl font-bold'>It's Time</h1>
                <h2 className='text-5xl font-semibold mb-10'>Update Notes</h2>
                <div className='w-[80%] border rounded-xl p-5 flex place-content-between'>
                    <input
                        type="text"
                        className='text-lg font-semibold focus:outline-none w-[68%]'
                        placeholder='Enter Title Here'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button onClick={updatePaste} className='rounded-full'>
                        Update My Note
                    </button>
                </div>
                <textarea
                    className='mt-10 p-5 border rounded-2xl w-[80%] mb-20'
                    value={value}
                    rows={20}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Enter Notes Here'
                ></textarea>
            </div>
        </div>
    );
};

export default Update;
