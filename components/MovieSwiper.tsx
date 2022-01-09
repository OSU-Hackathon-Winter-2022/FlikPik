import React, { Component, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, Dimensions, StyleSheet, View } from 'react-native'
import { MovieProperties, MovieProfileView } from './MovieProfileView'
import { recommendations } from '../recommendation_engine/Recommender'
import { addMatched, addUnmatched } from '../recommendation_engine/Recommender'

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#F5FCFF',
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width
    },
    text: {
      textAlign: 'center',
      fontSize: 50,
      backgroundColor: 'transparent'
    },
    done: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      backgroundColor: 'transparent'
    }
  })

type SwiperProps = {
    movies: Array<Object>
}

type SwiperState = {
    movies: Array<Object>,
    swipedAllMovies: Boolean,
    swipeDirection: string,
    movieIndex: number,
    swipedLeft: Array<Object>,
    swipedRight: Array<Object>
}

export class MovieSwiper extends Component<SwiperProps, SwiperState> {
    constructor (props) {
      super(props)
      this.state = {
        movies: props.movies,
        swipedAllMovies: false,
        swipeDirection: '',
        movieIndex: 0,
        swipedLeft: [],
        swipedRight: []
      }
    }
  
    renderMovieProfile = (movie_tuple, index: number) => {
        console.log(movie_tuple)
        const [idx, movie] = movie_tuple
        return (
            <MovieProfileView {...this.state.movies[idx][1]} />
        )
    };
  
    onSwiped = (type) => {
      console.log(`on swiped ${type}`)
    }

    onSwipedLeft = (index) => {
        let movie_details = this.state.movies[index]
        this.state.swipedLeft.push(movie_details)
        addUnmatched(Object.assign({}, movie_details))
        if (index == this.state.movies.length-1) {
            let recommend = recommendations(this.state.swipedLeft, this.state.swipedRight)
            this.setState({
                movies: Array.from(recommend.entries()),
                movieIndex: 0,
                swipedLeft: [],
                swipedRight: []
            })
        } else {
            this.setState({
                movieIndex: this.state.movieIndex + 1
            })
        }
    }

    onSwipedRight = (index) => {
        let movie_details = this.state.movies[index]
        this.state.swipedRight.push(movie_details)
        addMatched(Object.assign({}, movie_details))
        if (index == this.state.movies.length-1) {
            let recommend = recommendations(this.state.swipedLeft, this.state.swipedRight)
            this.setState({
                movies: Array.from(recommend.entries()),
                movieIndex: 0,
                swipedLeft: [],
                swipedRight: []
            })
        } else {
            this.setState({
                movieIndex: this.state.movieIndex + 1
            })
        }
    }

    // onSwipedAllMovies = () => {
    //     console.log("all done")
    //     let recommend = recommendations(this.state.swipedLeft, this.state.swipedRight)
    //     this.swiper.setState({
    //         cards: recommend,
    //         firstCardIndex: 0
    //     })
    //     this.setState({
    //         movies: recommend,
    //         swipedLeft: [],
    //         swipedRight: []
    //     })
    //     this.swiper.jumpToCardIndex(0)
    // };
  
    render () {
        return (
        <View style={styles.container}>
          <Swiper
            ref={swiper => {
              this.swiper = swiper
            }}
            //onSwiped={() => this.onSwiped('general')}
            onSwipedLeft={(index) => this.onSwipedLeft(index)}
            onSwipedRight={(index) => this.onSwipedRight(index)}
            // onSwipedTop={() => this.onSwiped('top')}
            // onSwipedBottom={() => this.onSwiped('bottom')}
            disableBottomSwipe={true}
            disableTopSwipe={true}
            infinite={true}
            cards={this.state.movies}
            cardIndex={this.state.movieIndex}
            cardVerticalMargin={80}
            renderCard={this.renderMovieProfile}
            onSwipedAll={() => this.onSwipedAllMovies()}
            stackSize={5}
            stackSeparation={15}
            overlayLabels={{
            //   bottom: {
            //     title: 'SKIP',
            //     style: {
            //       label: {
            //         backgroundColor: 'black',
            //         borderColor: 'black',
            //         color: 'white',
            //         borderWidth: 1
            //       },
            //       wrapper: {
            //         flexDirection: 'column',
            //         alignItems: 'center',
            //         justifyContent: 'center'
            //       }
            //     }
            //   },
            //   top: {
            //     title: 'SUPER LIKE',
            //     style: {
            //       label: {
            //         backgroundColor: 'blue',
            //         borderColor: 'black',
            //         color: 'white',
            //         borderWidth: 1
            //       },
            //       wrapper: {
            //         flexDirection: 'column',
            //         alignItems: 'center',
            //         justifyContent: 'center'
            //       }
            //     }
            //   },
              left: {
                title: 'NOPE',
                style: {
                  label: {
                    backgroundColor: 'red',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30
                  }
                }
              },
              right: {
                title: 'LIKE',
                style: {
                  label: {
                    backgroundColor: 'green',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30
                  }
                }
              }
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
          >
          </Swiper>
        </View>
      )
    }
  }