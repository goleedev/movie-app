import React from 'react';
import { Col } from 'antd';

function GridCard(props) {

    if (props.actor) {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative'}}>
                    <img style={{ width: '90%', height: '350px' }} alt="img" src={props.image} />
                </div>
            </Col>
        )
    } else {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative'}}>
                    <a href={`/movie/${props.movieId}`} >
                        <img style={{ width: '90%', height: '350px' }} alt="img" src={props.image} />
                    </a>
                </div>
            </Col>
        )
    }

}

export default GridCard
