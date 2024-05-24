import React from "react";
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
import './header.css';

export const Header = () => {
    return (
        <div className="gpt3__header " id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p>This website is build with the main aim to learn React and how to convert a figma design into a website design. This is a frontend design and hence my first project in React.</p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className="gpt3__header-image">
                <img src={ai} />
            </div>
        </div>
    );
};



export default Header;