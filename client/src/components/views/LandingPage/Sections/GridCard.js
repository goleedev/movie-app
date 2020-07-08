import React from 'react';
import { Col } from 'antd';

function GridCard(props) {
    if (props.actor) {
        return (
            <Col className="crew__container" lg={6} md={8} xs={24}>
                <figure className="crew__display">
                    <img style={{ width: '90%', height: '350px' }} alt={props.characterName} src={props.image} />    
                    <figcaption className="crew__hover">
                     {props.characterName} 
                    </figcaption>
                </figure>
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
