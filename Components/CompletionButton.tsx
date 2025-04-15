import React, { useState } from 'react';

export default function CompletionButton(){
    const [isComplete, setIsComplete] = useState(false);

    const toggleComplete = () => {
        setIsComplete(prevState => !prevState);
    };

    return (
        <button 
        onClick={toggleComplete}
        style={{
            backgroundColor: isComplete ? '#4CAF50' : '#cccccc',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        }}
        >
        {isComplete ? ' ✓ ' : '   '}
        </button>
    );
}