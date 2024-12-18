const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0 }}>Pizzería Mamma Mia!</h1>
        </div>
        <div>
          <button style={{ marginRight: '10px', backgroundColor: '#444', color: 'white', border: 'none', padding: '5px 10px' }}>Home</button>
          <button style={{ marginRight: '10px', backgroundColor: '#444', color: 'white', border: 'none', padding: '5px 10px' }}>Login</button>
          <button style={{ marginRight: '10px', backgroundColor: '#444', color: 'white', border: 'none', padding: '5px 10px' }}>Register</button>
          <span style={{ backgroundColor: '#555', padding: '5px 10px', borderRadius: '5px' }}>Total: $25.000</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
