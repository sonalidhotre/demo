import React, { Component } from 'react';
import TouchCarousel, { clamp } from 'react-touch-carousel';
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC';
import numbers from './engAlphas';
import NonPassiveTouchTarget from './NonPassiveTouchTarget';

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

class EngAlphabets extends Component {

  renderCard(index, modIndex, cursor) {
    const item = numbers[modIndex]
    const rotate = 40 * (index + cursor)
    const onTop = Math.abs(index + cursor) < 0.5
    return (
      <div key={index} className='carousel-card'>
        <div
          className='carousel-card-inner'
          style={{
            backgroundColor: item.background,
            transform: `rotate(${rotate}deg)`,
            zIndex: onTop ? 1 : 0
          }}
        >
          <div className='eng-alpha-carousel-title'>{item.title}</div>
          <img src={item.path} alt="Circle" height={140} width={140}></img>
          <img src={item.pathImg} alt="Circle" height={140} width={140}></img>
          <div className='carousel-description'>{item.text}</div>
        </div>
      </div>
    )
  }

  renderVideoCard(index, modIndex, cursor) {
    const item = numbers[modIndex]
    const rotate = 40 * (index + cursor)
    const onTop = Math.abs(index + cursor) < 0.5
    return (
      <div key={index} className='carousel-card'>
        <div
          className='carousel-card-inner'
          style={{
            backgroundColor: item.background,
            transform: `rotate(${rotate}deg)`,
            zIndex: onTop ? 1 : 0
          }}
        >
          <div className="video-container">
          <video id="v" width="100%" controls autoPlay loop muted>
            <source src={item.vidSrc} type="video/mp4"></source>
            <source src={item.vidSrc} type="video/ogg"></source>Your browser does not support the video tag.</video>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="eng-alpha-header">
          <div className="welcome-text">Alphabets(अल्फाबेट्स - इंग्रजी अक्षरे)</div>
        </header>
        <React.StrictMode>
          <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={numbers.length}
            cardPadCount={cardPadCount}
            autoplay={45e3}
            renderCard={this.renderCard}
          />
        </React.StrictMode>
        <React.StrictMode>
          <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={numbers.length}
            cardPadCount={cardPadCount}
            autoplay={45e3}
            renderCard={this.renderVideoCard}
          />
        </React.StrictMode>
      </div>
    );
  }
}

export default EngAlphabets;