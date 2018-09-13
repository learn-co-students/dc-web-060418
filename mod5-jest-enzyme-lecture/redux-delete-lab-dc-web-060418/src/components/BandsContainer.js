import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import Header from './Header';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <BandInput dispatch={this.props.dispatch} />
        <Bands dispatch={this.props.dispatch} bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })


const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps)(BandsContainer)