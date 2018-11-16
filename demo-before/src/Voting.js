import React, { Component } from 'react';

import SongsPopularity from './SongsPopularity';

class Voting extends Component {
  state = {
    isChartVisible: false,
  };

  handleShowChart = () => {
    this.setState({
      isChartVisible: true,
    });
  }

  render() {
    return (
      <div className="not-visible-container">
        {
          !this.state.isChartVisible ? (
            <h2 className="click-visible">
              <button
                onClick={this.handleShowChart
              }>Click here</button>
              <br />
              to see the vote result!
            </h2>
          ) : (
            <SongsPopularity />
          )
        }
      </div>
    );
  }
}

export default Voting;
