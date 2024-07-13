import { useState, useCallback, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DONATION } from '../../utils/mutations';
import './style.css';

const DonorForm = (props) => {
    const [ isToggled, setIsToggled ] = useState(false);
    const [ donorName, setName ] = useState('');
    const [ donorValue, setValue ] = useState(0.00);
    const [ addDonation, { error, data } ] = useMutation(ADD_DONATION);

    const handleToggle = useCallback(() => {
        setIsToggled(!isToggled);
        [isToggled, setIsToggled]
    });

    const handleChangeName = (e) => {
        const re = /^[a-zA-Z-_ ]+$/;
        if(e === '' || re.test(e)) {
            setName(e);
        }
    };

    const handleChangeValue = (e) => {
        const re = /^[0-9\b]+$/;
        if(e === '' || re.test(e)) {
            setValue(e);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(donorValue + " " + typeof donorValue);
        console.log(donorName + " " + typeof donorName);

        try {
            const { data } = await addDonation({
                variables: {
                    amount: donorValue,
                    description: donorName,
                },
            });

            console.log(data);
        } catch(error) {
            console.error(error);
        }
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
                    <button onClick={handleToggle} className='close-btn'>X</button>
                    <form className='donate-form'>
                        <div className='form-element'>
                            <label htmlFor='name' className='form-label'>Name: </label>
                            <input type='text' id='name' placeholder='Anonymous' className='form-input' maxLength='20' onChange={e => handleChangeName(e.target.value)}></input>
                        </div>
                        <div className='form-element'>
                            <label htmlFor='value' className='form-label'>Amount: $</label>
                            <input type='number' id='value' placeholder='100' className='form-input' step={.01} maxLength='10' onChange={e => handleChangeValue(e.target.value)}></input>
                        </div>
                        <input type='submit' value="Submit" onClick={handleFormSubmit} className='form-submit'></input>
                    </form>
                </div>
            )}
        </div>
    )
}

export default DonorForm;