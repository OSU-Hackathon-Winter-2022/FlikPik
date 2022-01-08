import React, { Component, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, View } from 'react-native'
import { MovieProperties, MovieProfileView } from './MovieProfileView'

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#F5FCFF',
      height: 635,

    },
    movie: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#E8E8E8',
      justifyContent: 'center',
      backgroundColor: 'white'
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
    movieIndex: number
}

export class MovieSwiper extends Component<SwiperProps, SwiperState> {
    constructor (props) {
      super(props)
      this.state = {
        movies: props.movies,
        swipedAllMovies: false,
        swipeDirection: '',
        movieIndex: 0
      }
    }
  
    renderMovieProfile = (movie: MovieProperties, index: number) => {
        return (
            <MovieProfileView style={styles.movie} {...movie} />
        )
    };
  
    onSwiped = (type) => {
      console.log(`on swiped ${type}`)
    }
  
    onSwipedAllMovies = () => {
      this.setState({
        swipedAllMovies: true
      })
    };
  
    render () {
      return (
        <View style={styles.container}>
          <Swiper
            ref={swiper => {
              this.swiper = swiper
            }}
            onSwiped={() => this.onSwiped('general')}
            onSwipedLeft={() => this.onSwiped('left')}
            onSwipedRight={() => this.onSwiped('right')}
            onSwipedTop={() => this.onSwiped('top')}
            onSwipedBottom={() => this.onSwiped('bottom')}
            cards={this.state.movies}
            cardIndex={this.state.movieIndex}
            cardVerticalMargin={80}
            renderCard={this.renderMovieProfile}
            onSwipedAll={this.onSwipedAllMovies}
            stackSize={3}
            stackSeparation={15}
            overlayLabels={{
              bottom: {
                title: 'SKIP',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }
                }
              },
              left: {
                title: 'NOPE',
                style: {
                  label: {
                    backgroundColor: 'black',
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
                    backgroundColor: 'black',
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
              },
              top: {
                title: 'SUPER LIKE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
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