const MobilePreview = () => {
  return (
    <div style={{
      width: '390px',
      height: '844px',
      border: '1px solid #aaa',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      position: 'fixed',
      left: '40%',
      marginTop:'2rem'
    }}>
      <iframe
        src="http://localhost:5173/"
        title="Mobile View"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default MobilePreview;
