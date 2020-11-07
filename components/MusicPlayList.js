import React, { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.less';


const playlist = [
  { name: 'Perfect - Ed Sheeran', src: '/music/perfect--ed-sheeran.mp3' },
  { name: 'ស្ទឹងត្រែងបងអើយ', src: '/music/steong-treng-bong-euy--khemarak-sereymon.mp3' },
  { name: 'មានទ្រព្យចិត្តស្មោះមិនប្រាកដមនុស្សស្រីស្រលាញ់យើងរហូតទេ', src: '/music/mean-trob-chet-smos-min-brakot-thamonus-srey-srolanh-yerng-rohot-te--khemarak-sereymon.mp3' },
  { name: 'គ្មានអ្នកណាល្អជាងប្រពន្ឋខ្ញុំ', src: '/music/kmean-neak-na-laor-cheang-propun-knhom--khemarak-sereymon.mp3' },
  { name: 'ចង់ឈ្នះ', src: '/music/chong-chhneah--pich-solika.mp3' },
]

export default class MusicPlayList extends Component {
  state = {
    currentMusicIndex: 0,
  }

  handleClickPrevious = () => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
    }))
  }

  handleClickNext = () => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }))
  }

  render() {
    const { currentMusicIndex } = this.state
    return (
      <div>
        <p>Title: {playlist[currentMusicIndex].name}</p>
        <AudioPlayer
          autoPlayAfterSrcChange={true}
          showSkipControls={true}
          showJumpControls={false}
          src={playlist[currentMusicIndex].src}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
        />
      </div>
    )
  }
}