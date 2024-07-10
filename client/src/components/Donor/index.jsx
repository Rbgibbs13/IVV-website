import { useStoreContext } from '../../utils/GlobalState';
import './style.css';

const Donor = (donor) => {
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        amount,
        purchaseDate,
        description
    } = donor;

    return (
        <div className='donor-parent'>
            Donors Here!
        </div>
    )
}

export default Donor;