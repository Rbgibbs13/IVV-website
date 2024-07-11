import { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import './style.css';

const DonorForm = (props) => {
    const [isToggled, setIsToggled] = useState(false);
    const [ donorName, setName ] = useState();
    const [ donorValue, setValue ] = useState();

    console.log(donorName);
    console.log(donorValue);

    const handleToggle = useCallback(() => {
        setIsToggled(!isToggled),
        [isToggled, setIsToggled]
    });

    const handleChangeName = (e) => {
        const re = /^[a-zA-Z-_ ]+$/;
        if(e === '' || re.test(e)) {
            setName(e);
        }
    };

    const handleChangeValue = (e) => {
        // if(!isNaN(e)) {
        //     setValue(e);
        // }
        const re = /^[0-9\b]+$/;
        if(e === '' || re.test(e)) {
            setValue(e);
        }
    };

    const handleSubmitDonation = (e) => {
        e.preventDefault();
        console.log('donation submitted');
    };

    return (
        <div>
            {!isToggled ? (
                <button onClick={handleToggle} className='donate-btn'>
                    <div id='dummy'></div>
                    <div id='element'>
                        <h3 className='donate-btn-title'>Donate!</h3>
                    </div>
                </button>
            ) : (
                <div className='donate-form-parent'>
                    <button onClick={handleToggle} className='close-btn'>V</button>
                    <form className='donate-form'>
                        <label htmlFor='name' className='form-label'>Name/Initials:</label>
                        <input type='text' id='name' placeholder='Anonymous' className='form-input' maxLength='20' onChange={e => handleChangeName(e.target.value)}></input>
                        <label htmlFor='value' className='form-label'>Amount:</label>
                        <input type='text' id='value' placeholder='100' className='form-input' maxLength='10' keyboardType="numeric" onChange={e => handleChangeValue(e.target.value)}></input>
                        <input type='submit' value="Submit" onClick={handleSubmitDonation} className='form-submit'></input>
                    </form>
                </div>
            )}
        </div>
    )
}

export default DonorForm;