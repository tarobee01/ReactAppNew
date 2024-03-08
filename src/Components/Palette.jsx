import React, { useState } from 'react';

function Palette({ showPalette }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [palette, setPalette] = useState([]);
  const [showAddColorForm, setShowAddColorForm] = useState(false);
  const [newColor, setNewColor] = useState('#ffffff');
  const [newColorText, setNewColorText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addColorToPalette = () => {
    // テキストフィールドが空かどうかチェック
    if (!newColorText.trim()) {
      setErrorMessage('テキストを入力してください');
      setTimeout(() => {
        setErrorMessage('');
      }, 1000);
      return;
    }
    // 同じ色が既にパレットに存在するかチェック
    const isColorExists = palette.some(item => item.color === newColor);
    if (!isColorExists) {
      setPalette([...palette, { color: newColor, text: newColorText }]);
      setNewColorText('');
      setErrorMessage(''); // エラーメッセージをクリア
    } else {
      // 同じ色が既に存在する場合、エラーメッセージを設定
      setErrorMessage('同じ色は追加できません');
      setTimeout(() => {
        setErrorMessage('');
      }, 1000);
    }
  };

  const handleSelectColor = (color, text) => {
    if (selectedColor === color) {
      // 同じ色を再度選択した場合、選択を解除
      setSelectedColor('');
      setSelectedText('');
    } else {
      setSelectedColor(color);
      setSelectedText(text);
    }
  };

  const removeColorFromPalette = (index) => {
    const newPalette = palette.filter((_, i) => i !== index);
    setPalette(newPalette);
  };

  const getColorStyle = (color) => ({
    backgroundColor: color,
    margin: '0 5px',
    width: '80px',
    height: '55px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Added shadow for depth
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  });


  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '0px', display: 'flex'}}>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {showPalette && (
        //パレットのフレーム
        <div style={{
          position: 'fixed',
          bottom: '57px',
          right: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '5px',
          maxWidth: 'calc(100% - 30px)',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          backgroundColor: '#FEFEFA', // Adjusted for a semi-transparent look
          backdropFilter: 'blur(10px)', // This will give a frosted glass effect
        }}>
          {selectedColor && (
            <div style={{ padding: '5px', backgroundColor: '#f0f0f0', borderRadius: '5px', marginBottom: '10px' }}>
              <p>Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
              <p>Selected Text: <span style={{ fontWeight: 'bold' }}>{selectedText}</span></p>
            </div>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '6px'}}>
            {palette.map((item, index) => (
              <div key={index} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '7px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                <button
                  style={{
                    backgroundColor: item.color,
                    width: '55px',
                    height: '35px',
                    textAlign: 'center',
                    border: item.color === selectedColor ? '3px solid black' : 'none', // 選択された要素の枠線を太くする
                    borderRadius: '10px 10px 0 0',
                    position: 'relative',
                    color: '#333333',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontFamily: 'Arial, sans-serif',
                  }}
                  onClick={() => handleSelectColor(item.color, item.text)}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      color: '#333333',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      padding: '2px', // テキストとオブジェクトの境界線との間に余白を設定
                    }}
                  >
                    {item.text}
                  </div>
                </button>
                <button
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    width: '15px',
                    height: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(44, 62, 80, 0.5)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '10px',
                    borderRadius: '50%',
                  }}
                  onClick={() => removeColorFromPalette(index)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="color"
              value={newColor}
              onChange={(e) => setNewColor(e.target.value)}
              style={{
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                marginRight: '6px'
              }}
            />
            <input
              type="text"
              value={newColorText}
              onChange={(e) => setNewColorText(e.target.value)}
              placeholder="Color text"
              style={{
                flexGrow: 1,
                border: '1px solid #ddd',
                borderRadius: '20px',
                padding: '5px 10px',
                marginRight: '6px'
              }}
            />
            <button
              onClick={addColorToPalette}
              style={{
                backgroundColor: '#2c3e50',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                padding: '5px 15px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Palette;