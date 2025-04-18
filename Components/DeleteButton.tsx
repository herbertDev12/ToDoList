interface DeleteButtonProps{
  onClick: () => void;
}

export default function DeleteButton({onClick} : DeleteButtonProps) {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: '#ff4444',
          color: 'white',
          padding: '3px 8px',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        X
      </button>
    );
  }