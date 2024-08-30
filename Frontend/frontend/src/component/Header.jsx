import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My React App</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    width: '100vw',
  }
};

export default Header;