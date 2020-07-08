import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function MainImage(props) {
    return (
        <div
            className="main__image"
        style={{
            background:
                `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #000`,
            height: '810px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}
    >
        <div>
            <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }} >
                <Title className="main__title" style={{ color: '#fafaf6' }} level={1}> {props.title} </Title>
                <p className="main__des" style={{ color: '#fafaf6', fontSize: '1rem' }}> {props.text} </p>
            </div>
        </div>
    </div>
    )
}

export default MainImage;