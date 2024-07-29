import { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList";
import Data from '../components/Data';
import Directors from "../components/Directors";

import TimelineObserver from 'react-timeline-animation';
import { fireConfetti } from "../utils/helpers";
import '../components/Timeline/style.css';
// import Timeline from '../components/Timeline';

const Timeline = ({ setObserver, callback }) => {
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');
    const [message4, setMessage4] = useState('');
    const [message5, setMessage5] = useState('');
    const [message6, setMessage6] = useState('');
    const [message7, setMessage7] = useState('');
    const [message8, setMessage8] = useState('');
    const [message9, setMessage9] = useState('');
    const [message10, setMessage10] = useState('');
    const [message11, setMessage11] = useState('');
    const [message12, setMessage12] = useState('');

    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);
    const timeline7 = useRef(null);
    const timeline8 = useRef(null);
    const timeline9 = useRef(null);
    const timeline10 = useRef(null);
    const timeline11 = useRef(null);
    const timeline12 = useRef(null);

    const circle = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    const circle4 = useRef(null);
    const circle5 = useRef(null);
    const circle6 = useRef(null);
    const circle7 = useRef(null);
    const circle8 = useRef(null);
    const circle9 = useRef(null);
    const circle10 = useRef(null);
    const circle11 = useRef(null);
    const circle12 = useRef(null);

    const timelineCallback1 = () => {
        setMessage1("- Bud starts to do eye missions to Haiti, Sierra Leone and other parts of Africa.");
        // callback();
    };
    const timelineCallback2 = () => {
        setMessage2("- Bud decides to move IVV volunteer activities to Zambia due to the unrest in Sierra Leone.");
        // callback();
    };
    const timelineCallback3 = () => {
        setMessage3(`  Bud, Bob and Thomas together founded IVV to enable donations to further the mission of providing much needed eye care in Zambia.`);
        // callback();
    };
    const timelineCallback4 = () => {
        setMessage4("- Bud's sister and brother in law spend over 18 months in Zambia overseeing construction of the current eye clinic and guest house.");
        // callback();
    };
    const timelineCallback5 = () => {
        setMessage5(" - IVV provides medical services to over 2000 patients each year through two week eye camps run by visiting volunteer doctors.");
        // callback();
    };
    const timelineCallback6 = () => {
        setMessage6(" - Dr. Brighton is assigned to IVV as part of Zambia's nationwide health system.");
        // callback();
    };
    const timelineCallback7 = () => {
        setMessage7(" - IVV hires Dr. Brighton as a full-time permanent employee in Zambia, starting the sponsorship program and ensuring that the IVV clinic will be able to provide year-round care.");
        // callback();
    };
    const timelineCallback8 = () => {
        setMessage8(" - Dr. Brighton attends his first Academy of Ophthalmologists meeting in the US.");
        // callback();
    };
    const timelineCallback9 = () => {
        setMessage9(" - IVV provides a sponsorship to Fred, our coordinator in Africa, so he can attend optometry school in Lusaka, Zambia.");
        // callback();
    };
    const timelineCallback10 = () => {
        setMessage10(" - Zambian medical trainees start rotating through IVV/Zimba Eye Clinic to receive training from Dr. Brighton.");
        // callback();
    };
    const timelineCallback11 = () => {
        setMessage11(" - IVV now provides over $3 million USD annually in free eye care at our clinic in Zimba.");
        // callback();
    };
    const timelineCallback12 = () => {
        setMessage12(" - Fred graduates from optometry school, returns to Zimba and opens a new optometry clinic to make glasses for patients across Africa.");
        callback();
        fireConfetti();
    };

    useEffect(() => {
        setObserver(timeline1.current);
        setObserver(timeline2.current);
        setObserver(timeline3.current);
        setObserver(timeline4.current);
        setObserver(timeline5.current);
        setObserver(timeline6.current);
        setObserver(timeline7.current);
        setObserver(timeline8.current);
        setObserver(timeline9.current);
        setObserver(timeline10.current);
        setObserver(timeline11.current);
        setObserver(timeline12.current);

        setObserver(circle1.current, timelineCallback1);
        setObserver(circle2.current, timelineCallback2);
        setObserver(circle3.current, timelineCallback3);
        setObserver(circle4.current, timelineCallback4);
        setObserver(circle5.current, timelineCallback5);
        setObserver(circle6.current, timelineCallback6);
        setObserver(circle7.current, timelineCallback7);
        setObserver(circle8.current, timelineCallback8);
        setObserver(circle9.current, timelineCallback9);
        setObserver(circle10.current, timelineCallback10);
        setObserver(circle11.current, timelineCallback11);
        setObserver(circle12.current, timelineCallback12);
    }, []);

    return (
        <div className="wrapper">
            <div className="circleWrapper">
                <div id="circle0" ref={circle} className="circle">
                    Start!
                </div>
            </div>

            <div id="timeline1" ref={timeline1} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle1" ref={circle1} className="circle">
                    1980
                </div>
                <div className="message">{message1}</div>
            </div>
            <div id="timeline2" ref={timeline2} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle2" ref={circle2} className="circle">
                    1991
                </div>
                <div className="message">{message2}</div>
            </div>
            <div id="timeline3" ref={timeline3} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle3" ref={circle3} className="circle">
                    1994
                </div>
                <div className="message"><span className="history-span"> - Founding!</span>{message3}</div>
            </div>
            <div id="timeline4" ref={timeline4} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle4" ref={circle4} className="circle">
                    2000
                </div>
                <div className="message">{message4}</div>
            </div>
            <div id="timeline5" ref={timeline5} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle5" ref={circle5} className="circle">
                    2001
                </div>
                <div className="message">{message5}</div>
            </div>
            <div id="timeline6" ref={timeline6} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle6" ref={circle6} className="circle">
                    2016
                </div>
                <div className="message">{message6}</div>
            </div>
            <div id="timeline7" ref={timeline7} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle7" ref={circle7} className="circle">
                    2018
                </div>
                <div className="message">{message7}</div>
            </div>
            <div id="timeline8" ref={timeline8} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle8" ref={circle8} className="circle">
                    2018
                </div>
                <div className="message">{message8}</div>
            </div>
            <div id="timeline9" ref={timeline9} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle9" ref={circle9} className="circle">
                    2019
                </div>
                <div className="message">{message9}</div>
            </div>
            <div id="timeline10" ref={timeline10} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle10" ref={circle10} className="circle">
                    2022
                </div>
                <div className="message">{message10}</div>
            </div>
            <div id="timeline11" ref={timeline11} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle11" ref={circle11} className="circle">
                    2023
                </div>
                <div className="message">{message11}</div>
            </div>
            <div id="timeline12" ref={timeline12} className="timeline"/>
            <div className="circleWrapper">
                <div id="circle12" ref={circle12} className="circle">
                    2024
                </div>
                <div className="message">{message12}</div>
            </div>
        </div>
    )
};

const About = () => {
    const [message, setMessage] = useState("");

    const onCallback = () => {
        setMessage("30 Year Anniversary!");
    };

    return (
        <div className="about-parent">
            <div className="timeline-wrapper">
                <TimelineObserver
                    initialColor="#e5e5e5"
                    fillColor='var(--color-orange)'
                    handleObserve={(setObserver) => (
                        <Timeline
                            callback={onCallback}
                            className="timeline-parent"
                            setObserver={setObserver}
                        />
                    )}
                />
                <div className="stub">{message}</div>
            </div>

            <div className="second-column">
                <h2 className="div-header">How we Started</h2>
                <hr className="wide-rule"></hr>

                <div>
                    <ul className="history-list">
                        <li className="odd list-element">Founded by Dr. James "Bud" Tysinger, Dr. Robert Grosserode, and Dr. Thomas Brumley.</li>
                        <li className="even list-element">Bud began by bringing all his equipment including an operating microscope to each visit.</li>

                        <li className="odd list-element">Bud would perform surgery out of a <span className="history-span">storage closet</span> in the hospital before the opening of the eye clinic.</li>
                        <li className="even list-element">The workers who built the clinic are now permanent IVV employees, including the clinic administrator, manager and operating room technician.</li>
                        
                        <li className="odd list-element">We sponsored a local, Dr. Brighton, to get an advanced education in ophthamology.</li>
                        <li className="even list-element">Started Vision Testing at local schools to more directly impact the community the clinic is located in.</li>

                        <li className="odd list-element">Dr. Brighton started his cataract training with our IVV doctors and has developed into an excellent teacher and mentor. He trains residents and students in ophthalmic surgery so they can serve their local communities.</li>
                        <li className="even list-element">Opened a Guest House in Zimba to facilitate patients coming to the clinic.</li>

                        <li className="odd list-element">In 2022 we delivered over <span className="history-span">$3 million</span> in eye care.</li>
                        <li className="even list-element">In 2022 we performed over <span className="history-span">800</span> surgeries (mostly cataract surgeries to restore sight) and served over <span className="history-span">3500</span> patients.</li>
                        
                    </ul>
                </div>
                
                <hr className="wide-rule"></hr>
                <Data/>
                <hr className="wide-rule"></hr>
                <Directors/>
                <hr className="wide-rule"></hr>
                <PostList/>
                <hr className="wide-rule"></hr>
            </div>
            
            
        </div>
    )
}

export default About;