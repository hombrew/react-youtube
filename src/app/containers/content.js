import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// components
import NavBar from '../components/navbar';
import VideoList from '../components/video-list';

// actions
import fetchPlaylist from '../actions/fetch-playlist';

class Content extends Component {
  constructor(props) {
    super(props);
    this.props.fetchPlaylist();
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavBar pages={this.props.pages}/>
        <div className="its-a-navbar-trap"></div>
        <VideoList
          sidenavState={this.props.sidenavState}
          playlist={this.props.playlist}
          />
      </div>
    );
  }
}

Content.propTypes = {
  sidenavState: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired,
  playlist: PropTypes.array.isRequired,
  fetchPlaylist: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    sidenavState: state.sidenavState,
    pages: state.pages,
    playlist: state.playlist
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPlaylist}, dispatch);
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(Content);
