import React, { Component, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, Dimensions, StyleSheet, View } from 'react-native'
import { MovieProperties, MovieProfileView } from './MovieProfileView'
import { recommendations } from '../recommendation_engine/Recommender'
import { addMatched, addUnmatched } from '../recommendation_engine/Recommender'
import { getRandomMovieList } from '../recommendation_engine/Recommender'
import { genreString } from './GenreSelector/GenreSelector'

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
    movies: Array<Object>,
    moviesQueue: Array<Object>,
    genreString: string
}

type SwiperState = {
    movies: Array<Object>,
    moviesQueue: Array<Object>,
    genreString: string,
    swipedAllMovies: Boolean,
    swipeDirection: string,
    swipedLeft: Array<Object>,
    swipedRight: Array<Object>
}

export class MovieSwiper extends Component<SwiperProps, SwiperState> {
    constructor (props) {
      super(props)
      this.state = {
        movies: props.movies,
        moviesQueue: props.moviesQueue,
        genreString: props.genreString,
        swipedAllMovies: false,
        swipeDirection: '',
        swipedLeft: [],
        swipedRight: []
      }
    }

    alterMovieStack(movies, numAlter, stackIndex) {
        let newQueue = Array.from(this.state.moviesQueue)
        for (const m of movies) {
            newQueue.push(m)
        }
        if (newQueue.length == 0) {
            newQueue = getRandomMovieList(12);
        }
        let newMovies = Array.from(this.state.movies)
        let i = 0;
        while (i < numAlter && newQueue.length > 0) {
            newMovies[stackIndex+i] = newQueue.shift()
            i++;
        }
        this.setState({
            moviesQueue: newQueue,
            movies: newMovies
        })
    }

    renderMovieProfile = (movie, index: number) => {
        return (
            <MovieProfileView {...movie} />
        )
    };

    onSwiped = (type) => {
      console.log(`on swiped ${type}`)
    }

    onSwipedLeft = (index) => {
        let movie_details = this.state.movies[index]
        this.state.swipedLeft.push(movie_details)
        addUnmatched(Object.assign({}, movie_details))
        if (this.state.genreString != genreString) {
            let fullMoviesQueue = getRandomMovieList(24);
            let movies = fullMoviesQueue.slice(0, 12);
            let moviesQueue = fullMoviesQueue.slice(12);
            this.setState({
                genreString: genreString,
                movies: movies,
                moviesQueue: moviesQueue,
                swipedLeft: [],
                swipedRight: []
            })
        } else if (index == this.state.movies.length-3) {
            this.alterMovieStack(recommendations(this.state.swipedLeft, this.state.swipedRight), 10, 0)
            this.setState({
                swipedLeft: [],
                swipedRight: []
            })
        // } else if (index == 0) {
        //     this.alterMovieStack([], 2, 10)
        }
    }

    onSwipedRight = (index) => {
        let movie_details = this.state.movies[index]
        this.state.swipedRight.push(movie_details)
        addMatched(Object.assign({}, movie_details))
        if (this.state.genreString != genreString) {
            let fullMoviesQueue = getRandomMovieList(24);
            let movies = fullMoviesQueue.slice(0, 12);
            let moviesQueue = fullMoviesQueue.slice(12);
            this.setState({
                genreString: genreString,
                movies: movies,
                moviesQueue: moviesQueue,
                swipedLeft: [],
                swipedRight: []
            })
        } else if (index == this.state.movies.length-3) {
            this.alterMovieStack(recommendations(this.state.swipedLeft, this.state.swipedRight), 10, 0)
            this.setState({
                swipedLeft: [],
                swipedRight: []
            })
        } else if (index == 0) {
            this.alterMovieStack([], 2, 10)
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
            cardIndex={0}
            cardVerticalMargin={80}
            renderCard={this.renderMovieProfile}
            onSwipedAll={() => this.onSwipedAllMovies()}
            stackSize={7}
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