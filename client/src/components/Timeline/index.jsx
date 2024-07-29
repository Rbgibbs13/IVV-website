import './style.css';
import { useEffect, useRef, useState } from 'react';


const Timeline = ({ setObserver, callback }) => {
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');
    const [message4, setMessage4] = useState('');
    const [message5, setMessage5] = useState('');

    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);

    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    const circle4 = useRef(null);
    const circle5 = useRef(null);

    const someCallback = () => {
        callback();
    };

    useEffect(() => {
        if(timeline.current) {
            setObserver(timeline.current, someCallback);
        }
    })

    return (
        <div id='timeline002024' className='timeline-parent'>
            Timeline
        </div>
    )
}

export default Timeline;