import React from 'react'

const StationList = ({stations, handleStream}) => {
    
    const List = stations.length ? (stations.map(station => {
      return (
        <div className="station_wrapper" key={station.id}>
            <div onClick={() => {handleStream(station.streams[0])}}>{station.name}</div>
        </div>
      )
    })) : (
        <div className="error_conn">
          <p>Cannot reach the station...</p>
        </div>
    )
    return (
        {List}
    )
}

export default StationList