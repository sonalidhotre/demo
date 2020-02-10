import React, { Component } from 'react';
import TouchCarousel, { clamp } from 'react-touch-carousel';
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC';
import data from './data';
import NonPassiveTouchTarget from './NonPassiveTouchTarget';
import orange from './videos/Orange.mp4';
import red from './videos/Red.mp4';
import yellow from './videos/Yellow.mp4';
import green from './videos/Green.mp4';
import purple from './videos/Purple.mp4';
import black from './videos/black.mp4';
import pink from './videos/Pink.mp4';

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

class Colors extends Component {
  renderCard(index, modIndex, cursor, isTitle) {
    const item = data[modIndex]
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
          {isTitle
            ?
            <div className='color-carousel-title'>{item.title}</div>
            :
            <div className='video-container'>
              {item.title === "लाल"
                ?
                <video id="v" width="100%" height="140" controls autoPlay loop muted>
                  <source src={red} type="video/mp4"></source>
                  <source src={red} type="video/ogg"></source>Your browser does not support the video tag.
              </video>
                : item.title === "केशरी"
                  ?
                  <video id="v" width="100%" height="140" controls autoPlay loop muted>
                    <source src={orange} type="video/mp4"></source>
                    <source src={orange} type="video/ogg"></source>Your browser does not support the video tag.
                </video>
                  : item.title === "पिवळा"
                    ?
                    <video id="v" width="100%" height="140" controls autoPlay loop muted>
                      <source src={yellow} type="video/mp4"></source>
                      <source src={yellow} type="video/ogg"></source>Your browser does not support the video tag.
                  </video>
                    : item.title === "हिरवा"
                      ?
                      <video id="v" width="100%" height="140" controls autoPlay loop muted>
                        <source src={green} type="video/mp4"></source>
                        <source src={green} type="video/ogg"></source>Your browser does not support the video tag.
                    </video>
                      : item.title === "जांभळा"
                        ?
                        <video id="v" width="100%" height="140" controls autoPlay loop muted>
                          <source src={purple} type="video/mp4"></source>
                          <source src={purple} type="video/ogg"></source>Your browser does not support the video tag.
                      </video>
                        : item.title === "काळा"
                          ?
                          <video id="v" width="100%" height="140" controls autoPlay loop muted>
                            <source src={black} type="video/mp4"></source>
                            <source src={black} type="video/ogg"></source>Your browser does not support the video tag.
                        </video>
                          : item.title === "गुलाबी"
                            ?
                            <video id="v" width="100%" height="140" controls autoPlay loop muted>
                              <source src={pink} type="video/mp4"></source>
                              <source src={pink} type="video/ogg"></source>Your browser does not support the video tag.
                          </video>
                            : null}
            </div>}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="colors-header">
          <div className="welcome-text">रंग</div>
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

export default Colors;