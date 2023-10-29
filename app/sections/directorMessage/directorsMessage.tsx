'use client'
import message from './directorMessage'
import '../../../styles/cards.css'
import announcement from './announcementData'
import { useState, useEffect } from 'react'
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import { Reveal, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(-150px, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;



const DirectorsMessage = () => {
    let card1ImageLink = '/images/director.webp'
    const [scrolling, setScrolling] = useState(1);
    const [seconds, setSeconds] = useState(1);
    const [i, setI] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            AddOne();
        }, 1000);
        return () => { clearInterval(interval) };
    }, [seconds]);
    let l = announcement.length;
    const AddOne = () => {
        if (i === l - 4 && scrolling === 1)
            setI(1);
        else if (scrolling === 1)
            setI(i + 1);
    }
    return (
        <div>
            <div className="card-row1">
                <div className='row1-card1'>
                    <Reveal keyframes={customAnimation} triggerOnce>
                        <span className='card-heading'>
                            Director's Message
                            <HistoryEduOutlinedIcon style={{ marginLeft: "5px", fontSize: "30px" }} />
                        </span>
                    </Reveal>
                    <div className='card1-inner-row'>
                        <div className='card1-inner-col'>
                            <div className='card1-image' style={{ backgroundImage: `url(${card1ImageLink})` }}></div>
                            <span className='card-heading-medium'>Prof. Santanu Chattopadhyay</span>
                            <span className='card-heading-small'>Director, IIIT Kalyani</span>
                        </div>
                        <div className='card1-inner-col2'>
                            <div className='card1-scroll'><span className='card1-message'>{message}</span></div>
                            <a href="/director_desk" target='_blank'>
                                {/* <ITKButton text="Read More" /> */}
                                <div className='view-more' style={{ marginTop: '10px' }}>View More</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='row1-card2'>
                    <Reveal keyframes={customAnimation} triggerOnce delay={500}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span className='card-heading'>
                                Announcements
                                <CampaignOutlinedIcon style={{ marginLeft: "7px", fontSize: "35px", marginBottom: "5px" }} />
                            </span>
                            <a href="/announcements" target='_blank'>
                                {/* <ITKButton text="Read More" /> */}
                                <div className='view-more' style={{ marginTop: '10px' }}>View All</div>
                            </a>
                        </div>
                    </Reveal>
                    <div className='announcement-container scrollOff'>
                        {announcement.map((index) => {
                            return (
                                <div key={index.id} onMouseEnter={() => { setScrolling(0) }} onMouseLeave={() => { setScrolling(1) }}>
                                    <div className='announcement-tab' style={{ transform: `translate(0px,${-65 * i}px)` }}>
                                        <div className='announcement-heading'><a target='_blank' href={index.description} >{index.title}</a></div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default DirectorsMessage
