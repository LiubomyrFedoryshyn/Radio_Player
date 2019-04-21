import React, {Component} from 'react';
import axios from 'axios';
import SearchPlayer from './SearchPlayer'
import MdClose from 'react-ionicons/lib/MdClose'



const API_KEY = "468f09dae204773546576b9cde";

class Search extends Component {
    state = {
        stations : [],
        streams : '',
        img : '',
        showplayer : "hide",
        val : '',
    }

    stationHide = () => {
        this.setState({
            showplayer : "hide",
            streams : ''
        })
    }

  getStation = (e) => {
    e.preventDefault();
    this.props.hidePlayer();
    const search = e.target.elements.search.value;
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = `https://api.dirble.com/v2/search/${search}?token=${API_KEY}`
    axios.get(proxyUrl + targetUrl)
        .then(res => {
        if (res.status === 200 && res.data[0] !== undefined) { 
            this.setState({
                stations : res.data[0],
                streams : res.data[0].streams[0].stream,
                img : res.data[0].image.url,
                showplayer : "show",
                val : ''
            })
        } else {
           this.setState({
            stations : '',
            streams : '',
            img : '',
            showplayer : "hide",
            val : 'there is no such a station'
           })
        }
    })
  }

  handleChange = (e) => {
      this.setState({
          val : e.target.value
      })
  }

    render () {
        return (
            <div className='search'>
               <form onSubmit={this.getStation}>
                   <input onChange={this.handleChange} type="text" name="search" placeholder="enter a station" value={this.state.val}/>
               </form>
                <div className={this.state.showplayer}>
                    <div className="close" onClick={this.stationHide}><MdClose color="rgb(255, 2, 2)" /></div>
                     <SearchPlayer img={this.state.img} streams={this.state.streams} station={this.state.stations}/>
                </div>
            </div>
        )
    }
}

export default Search;
