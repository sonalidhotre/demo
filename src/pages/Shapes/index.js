import React, { Component } from 'react';
import TouchCarousel, { clamp } from 'react-touch-carousel';
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC';
import './Shapes.css';
import data from './data';
import NonPassiveTouchTarget from './NonPassiveTouchTarget';
import circle from './images/circle.svg';
import half_circle from './images/half-circle.svg';
import triangle from './images/triangle.svg';
import square from './images/square.svg';
import Rectangle from './images/Rectangle.svg';
import Ellipse from './images/ellipse.svg';
import Hexagon from './images/Hexagon.svg';

const cardSize = 500
const cardPadCount = 3
const carouselWidth = clamp(window.innerWidth, 0, 960)

function CarouselContainer(props) {
  const { cursor, carouselState, ...rest } = props
  // Put current card at center
  const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
  return (
    <NonPassiveTouchTarget className='carousel-container'>
      <NonPassiveTouchTarget
        className='carousel-track'
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />
    </NonPassiveTouchTarget>
  )
}

const Container = touchWithMouseHOC(CarouselContainer)

class Shapes extends Component {
  // constructor(props) {
  //   super(props)
  // }

  renderCard(index, modIndex, cursor, isTitle) {
    console.log('>>>', isTitle)
    const item = data[modIndex]
    const rotate = 40 * (index + cursor)
    const onTop = Math.abs(index + cursor) < 0.5
    return (
      <div key={index} className='carousel-card'>
        <div
          className='shape-carousel-card-inner'
          style={{
            backgroundColor: item.background,
            transform: `rotate(${rotate}deg)`,
            zIndex: onTop ? 1 : 0
          }}
        >
          {isTitle
            ?
            <div className='shapes-carousel-title'>{item.title}</div>
            :
            <div className='video-container'>
              {item.title === "वर्तुळ"
                ?
                <img src={circle} alt="Circle" height={250} width={250}></img>
                : item.title === "अर्ध वर्तुळ"
                  ?
                  <img src={half_circle} alt="Half Circle" height={250} width={250}></img>
                  : item.title === "त्रिकोण"
                    ?
                    <img src={triangle} alt="Triangle" height={250} width={250}></img>
                    : item.title === "चौरस"
                      ?
                      <img src={square} alt="Square" height={250} width={250}></img>
                      : item.title === "आयत"
                        ?
                        <img src={Rectangle} alt="Rectangle" height={250} width={250}></img>
                        : item.title === "लंबवर्तुळ"
                          ?
                          <img src={Ellipse} alt="Ellipse" height={250} width={250}></img>
                          : item.title === "षटकोन"
                            ?
                            <img src={Hexagon} alt="Hexagon" height={250} width={250}></img>
                            : null}
            </div>}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="shapes-header">
          <div className="welcome-text">आकार</div>
        </header>
        <React.StrictMode>
          <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={data.length}
            cardPadCount={cardPadCount}
            autoplay={10e3}
            renderCard={(index, modIndex, cursor) => this.renderCard(index, modIndex, cursor, true)}
          />
        </React.StrictMode>
        <React.StrictMode>
          <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={data.length}
            cardPadCount={cardPadCount}
            autoplay={10e3}
            renderCard={(index, modIndex, cursor) => this.renderCard(index, modIndex, cursor, false)}
          // renderCard={this.renderCard}
          />
        </React.StrictMode>
      </div>
    );
  }
}

export default Shapes;