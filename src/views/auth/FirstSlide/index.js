import React from 'react';
import {Button} from "../../../components/ui";
import { useNavigate} from 'react-router-dom'
const FirstSlide = () => {
    const navigate = useNavigate()
    const nextSlide = () => {
        navigate('/second-slide')
    }
    return (
        <div>
            <div>First slide</div>
            <Button onClick={nextSlide}>Следующий слайд</Button>
        </div>
    );
};

export default FirstSlide;
