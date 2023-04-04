import React, { useState } from 'react';

function MyComponent() {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const url = '/api/data';
    const data = { input: inputValue };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          setAlertMessage('Data added successfully!');
          setInputValue(''); // clear input value
        } else if (response.status === 409) {
          throw new Error('Duplicate entry');
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(error => {
        console.error(error);
        setAlertMessage(error.message);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Add Data</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Data</h2>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}
      {alertMessage && <p>{alertMessage}</p>}
    </div>
  );
}
