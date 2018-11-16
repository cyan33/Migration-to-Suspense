import Chart from 'chart.js';
import React from 'react';

import chartOptions from './chartOptions';

class SongsPopularity extends React.Component {
  canvasRef = React.createRef();

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const context = this.canvasRef.current.getContext("2d");
    new Chart(context, chartOptions);
  }

  render() {
    return (
      <div className="songs-popularity">
        <h2 className="chart-title">Top Five Songs by Coldplay</h2>
        <canvas
          ref={this.canvasRef}
          id="myChart"
          width="400"
          height="400"
        />
      </div>
    );
  }
}

export default SongsPopularity;
