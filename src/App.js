import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Player from './components/Player'
import Search from './components/Search'
import IosRefresh from 'react-ionicons/lib/IosRefresh'


const API_KEY = "468f09dae204773546576b9cde";

class App extends Component {

state = {
  stations : [],
  stream : [],
  detail : [],
  img : [],
  mode : 'dark',
  showplayer : 'hide'
}

showPlayer = () => {
  this.setState({
    showplayer : 'show'
  })
}

hidePlayer = () => {
  this.setState({
    showplayer : 'hide'
  })

}

changeModeDark = () => {
  this.setState({
    mode : 'dark'
  });
}

changeModeColor = () => {
  this.setState({
    mode : 'color'
  });
}

changeModeWhite = () => {
  this.setState({
    mode : 'white'
  });
}

  componentDidMount(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `https://api.dirble.com/v2/stations/popular?token=${API_KEY}`
    axios.get(proxyUrl + targetUrl)
    .then(res => {
      this.setState({
          stations : res.data,
      })
    })
  }
 
  handleStream = (stream) => {   
    this.setState({
      stream : stream.stream,
    })
  }

  handleStation = (station) => {   
    this.setState({
      detail : station,
      img : station.image.url

    })
  }


    render() {

     

      const {stations} = this.state;
      const stationList = stations.length ? (stations.map(station => {
        return (
          <div key={station.id} onClick={ () => {this.handleStation(station)}}>
            <div onClick={this.showPlayer}>
              <div onClick={() => {this.handleStream(station.streams[0])}} >{station.name}</div>
            </div>
          </div>
        )
      })) : (
        <div className="falseRequest">
        <IosRefresh fontSize="30px" color="rgb(255, 2, 2)" rotate={true} /> Loading list ...
        </div>
      )

        return (
          <div className="App">
            <div  className={this.state.mode}>
              <div className="mode_wrapper">
                <div className="bg_text">Radio Player</div>
                <div className="dark_theme" onClick={this.changeModeDark}>Dark Theme</div>
                <div className="colored_theme" onClick={this.changeModeColor}>Colored Theme</div>
                <div className="white_theme" onClick={this.changeModeWhite}>White Theme</div>
              </div>
              <div className="support">
                <span>some stations may be not supported in your country</span>
              </div>
              <div className="main_content_wrapper">
                <div className="stationList">
                  <h3>Top 20 Popular Stations</h3>
                  {stationList}
                </div>
                <div className="mainPlayer">
                  <Player hidePlayer={this.hidePlayer} addedShow={this.state.showplayer} img={this.state.img} stream={this.state.stream} detail={this.state.detail}/>
                </div>
                <Search hidePlayer={this.hidePlayer}/>
              </div>
            </div>
          </div> 
        );
  }
}

export default App;
