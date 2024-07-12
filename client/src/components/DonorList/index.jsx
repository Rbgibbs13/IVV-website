import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DONATIONS, QUERY_USERS } from '../../utils/queries';
import { currencyFormat } from '../../utils/helpers';
import Donor from '../Donor';
import DonorForm from '../DonorForm';
import './style.css';

const DonorList = () => {
    const { loading, error, data } = useQuery(QUERY_DONATIONS);

    function formatDonation (input) {
        let convert = input.toString();
        return currencyFormat(convert);
    }

    if(loading) {
        return (
            <div>Loading...</div>
        )
    }

    if(error) {
        return (
            <div>{error}</div>
        )
    }

    return (
        <div className='donor-parent'>
            <DonorForm/>
            {data.donations.length ? (
                <div className='donor-div'>
                    <h1 className='donor-title'>Our Donors</h1>
                    <hr className='donor-rule'></hr>
                    <ul>
                        {data.donations.map((donor) => (
                            <div key={donor._id} className='donor-block'>
                                <li>
                                    <h2>{donor.description}</h2>
                                    <hr className='donor-rule'></hr>
                                    <h1>${formatDonation(donor.amount)}</h1>
                                    <hr className='donor-rule'></hr>
                                    <h2>Thank You {donor.description.split(' ')[0]}!</h2>
                                </li>
                            </div>
                        ))}
                    </ul>
                    <hr className='donor-rule'></hr>
                </div>
            ) : (
                <div className='donor-div'>
                    <h2>No Recent Donors!</h2>
                </div>
            )}
        </div>
    );
}

export default DonorList;