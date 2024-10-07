import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; 
import "./Blog.css";

function Blog() {
    
    const scrollRevealOption = {
        duration: 500, 
        origin: 'bottom', 
        distance: '50px', 
        opacity: 0, 
    };


    useEffect(() => {
        ScrollReveal().reveal(".blog__content .section__header", {
            ...scrollRevealOption,
        });
        ScrollReveal().reveal(".blog__content h4", {
            ...scrollRevealOption,
            delay: 500,
        });
        ScrollReveal().reveal(".blog__content p", {
            ...scrollRevealOption,
            delay: 1000,
        });
        ScrollReveal().reveal(".blog__content .blog__btn", {
            ...scrollRevealOption,
            delay: 1500,
        });
    }, []); 

    return (
        <section className="blog" id="blog">
            <div className="section__container blog__container">
                <div className="blog__content">
                    <h2 className="section__header">~ LATEST BLOG ~</h2>
                    <h4>Capturing Emotion in Every Frame</h4>
                    <p>
                        This blog post delves into the importance of storytelling in
                        photography and how Capturer approaches capturing emotion and
                        narrative in their work. Readers will discover the techniques and
                        strategies used by professional photographers to evoke emotion,
                        convey meaning, and create compelling visual narratives that
                        resonate with viewers on a deep level.
                    </p>
                    <div className="blog__btn">
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
