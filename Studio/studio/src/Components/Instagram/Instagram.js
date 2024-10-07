import React, { useEffect } from 'react';
import './Instagram.css';

function Instagram() {
    useEffect(() => {
        const instagram = document.querySelector(".instagram__flex");
        
        if (instagram) {
            Array.from(instagram.children).forEach((item) => {
                const duplicateNode = item.cloneNode(true);
                duplicateNode.setAttribute("aria-hidden", true);
                instagram.appendChild(duplicateNode);
            });
        }
    }, []); 

    return (
        <section className="section__container instagram__container">
            <h2 className="section__header1">~ INSTAGRAM ~</h2>
            <div className="instagram__flex">
                <img src="./images/image-1.jpg" alt="instagram" />
                <img src="./images/image-3.jpg" alt="instagram" />
                <img src="./images/image-4.jpg" alt="instagram" />
                <img src="./images/image-2.jpg" alt="instagram" />
                <img src="./images/image-5.jpg" alt="instagram" />
                <img src="./images/image-6.jpg" alt="instagram" />
                <img src="./images/image-7.jpg" alt="instagram" />
                <img src="./images/image-8.jpg" alt="instagram" />
            </div>
        </section>
    );
}

export default Instagram;
