import React, { Component } from 'react';
import TouchCarousel, { clamp } from 'react-touch-carousel';
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC';
import './alpha.css';
import swar from './swar';
import vyanjan from './vyanjan';
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

class Alphabets extends Component {
  // constructor(props) {
  //   super(props)
  // }

  renderCard(index, modIndex, cursor) {
    const item = swar[modIndex]
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
          <div className='carousel-title'>{item.title}</div>
          <img src={item.path} alt="Circle" height={150} width={150}></img>
        </div>
      </div>
    )
  }

  renderVideoCard(index, modIndex, cursor) {
    const item = swar[modIndex]
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
          <video id="v" width="290" height="220" controls autoPlay loop muted>
            <source src={item.vidSrc} type="video/mp4"></source>
            <source src={item.vidSrc} type="video/ogg"></source>Your browser does not support the video tag.</video>
          </div>
        </div>
      </div>
    )
  }

  renderCardVyanjan(index, modIndex, cursor) {
    const item = vyanjan[modIndex]
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
          <div className='carousel-title'>{item.title}</div>
          <img src={item.path} alt="Circle" height={150} width={150}></img>
        </div>
      </div>
    )
  }

  renderVideoCardVyanjan(index, modIndex, cursor) {
    const item = vyanjan[modIndex]
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
          <video id="v" width="290" height="220" controls autoPlay loop muted>
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
        <header className="alpha-header">
          <div className="welcome-text">मुळाक्षरे</div>
        </header>
        <div className="alpha-title-bg">स्वर</div>
        <React.StrictMode>
          <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={swar.length}
            cardPadCount={cardPadCount}
            autoplay={22e3}
            renderCard={this.renderCard}
          />
        </React.StrictMode>
        <React.StrictMode>
          <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={swar.length}
            cardPadCount={cardPadCount}
            autoplay={22e3}
            renderCard={this.renderVideoCard}
          />
        </React.StrictMode>
        <div className="alpha-title-bg">व्यंजन</div>
        <React.StrictMode>
          <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={vyanjan.length}
            cardPadCount={cardPadCount}
            autoplay={22e3}
            renderCard={this.renderCardVyanjan}
          />
        </React.StrictMode>
        <React.StrictMode>
          <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={vyanjan.length}
            cardPadCount={cardPadCount}
            autoplay={22e3}
            renderCard={this.renderVideoCardVyanjan}
          />
        </React.StrictMode>
      </div>
    );
  }
}

export default Alphabets;