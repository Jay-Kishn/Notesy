import React from 'react';
import { AiOutlineMenu, AiOutlinePoweroff } from 'react-icons/ai';
import './styles.css';

const Demo = () => {
    return (
        <div className='wrapper'>
            <nav>
                <a href='' className='icons'>
                    <AiOutlineMenu />
                </a>
                <a href='' className='icons'>
                    <AiOutlinePoweroff />
                </a>
            </nav>
            <div className='subs'>
                <div>
                    <span className='title'>Long Term Goals</span>
                    <img src='./imgs/battery.png' alt='' />
                </div>
                <div>
                    <span className='title'>Short Term Goals</span>
                    <img src='./imgs/flag.png' alt='' />
                </div>
                <div>
                    <span className='title'>Fitness</span>
                    <img src='./imgs/recreation.png' alt='' />
                </div>
                <div>
                    <span className='title'>Social</span>
                    <img src='./imgs/network.png' alt='' />
                </div>
            </div>
            <div className='hero'>
                <h1>Set schedule</h1>
            </div>
        </div>
    );
};

export default Demo;
