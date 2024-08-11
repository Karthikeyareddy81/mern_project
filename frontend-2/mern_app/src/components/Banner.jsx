import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
    const [banner, setBanner] = useState({});
    const [countdown, setCountdown] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/banners')
            .then(response => {
                setBanner(response.data);
                setCountdown(response.data.timer);
                setVisible(response.data.visible);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (visible && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (countdown === 0) {
            setVisible(false);
        }
    }, [countdown, visible]);

    if (!visible) return null;

    return (
        <div className="banner">
            <p>{banner.description}</p>
            <p>Time remaining: {countdown}s</p>
            <a href={banner.link}>Click here</a>
        </div>
    );
};

export default Banner;
