const options = {
  type: 'bar',
  title: {
    display: true,
    text: 'Top Five Songs of Coldplay'
  },
  data: {
    labels: ['Fix You', 'The Scientist', 'Paradise', 'Yellow', 'Viva la Vida'],
    datasets: [{
      label: 'Percentage of votes',
      data: [11, 8, 2, 7, 3],
      backgroundColor: '#051626',
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  }
};

export default options;
