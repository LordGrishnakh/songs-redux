import React from "react";
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {
  const renderList = () => {
    return props.songs.map((song, i) => {
      return (
        <div className="item" key={i}>
          <div className="right floated content">
            <button className="ui button primary" onClick={()=> props.selectSong(song)}>Select</button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    })
  }

  return (
    <div className="ui divided list">
      { renderList() }
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    songs: state.songs
  };
};

// const mapDispatchToProps = () => {

// }

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
