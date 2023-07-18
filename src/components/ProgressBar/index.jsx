import React from 'react';

const ProgressBar = (props) => {
    const { completed } = props;
  
const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "#00337F",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }

  return (
    <div>
        <span style={labelStyles}>{`${completed}%`}</span>
        <div style={containerStyles}>
          <div style={fillerStyles}>
          </div>
        </div>
    </div>
  );
};
export default ProgressBar;
