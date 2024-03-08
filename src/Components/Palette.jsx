import React, { useState } from 'react';

function Palette({ showPalette }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [palette, setPalette] = useState([]);
  const [showAddColorForm, setShowAddColorForm] = useState(false);
  const [newColor, setNewColor] = useState('#ffffff');
  const [newColorText, setNewColorText] = useState('');

  const addColorToPalette = () => {
    setPalette([...palette, { color: newColor, text: newColorText }]);
    // setNewColor('#ffffff'); // この行を削除
    setNewColorText('');
  };

  const handleSelectColor = (color) => {
    if (selectedColor === color) {
      setSelectedColor('');
    } else {
      setSelectedColor(color);
    }
  };

  const removeColorFromPalette = (index) => {
    const newPalette = palette.filter((_, i) => i !== index);
    setPalette(newPalette);
  };

  const getColorStyle = (color) => ({
    backgroundColor: color,
    margin: '0 5px',
    opacity: selectedColor === color ? '0.5' : '1',
  });

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', display: 'flex' }}>
      {showPalette && (
        <div style={{
          position: 'fixed',
          bottom: '50px',
          right: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '5px',
          borderRadius: '5px',
          backgroundColor: '#f0f0f0',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <button onClick={() => setShowAddColorForm(!showAddColorForm)} style={{ marginBottom: '10px' }}>
            {showAddColorForm ? '×' : 'ADD Color'}
          </button>
          {showAddColorForm && (
            <div style={{ marginBottom: '10px' }}>
              <input type="color" value={newColor} onChange={(e) => setNewColor(e.target.value)} />
              <input type="text" value={newColorText} onChange={(e) => setNewColorText(e.target.value)} placeholder="Color text" />
              <button onClick={addColorToPalette}>Save</button>
            </div>
          )}
          <div style={{ display: 'flex' }}>
            {palette.map((item, index) => (
              <div key={index} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 5px' }}>
                <button
                  style={{
                    backgroundColor: item.color,
                    width: '80px',
                    height: '55px',
                    textAlign: 'center',
                  }}
                  onClick={() => handleSelectColor(item.color)}
                >
                </button>
                <button
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '73px',
                    width: '20px',
                    height: '20px',
                    lineHeight: '20px',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'red',
                    cursor: 'pointer',
                    fontSize: '30px'
                  }}
                  onClick={() => removeColorFromPalette(index)}
                >
                  ×
                </button>
                <div style={{ color: 'black', textAlign: 'center', marginTop: '5px' }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Palette;