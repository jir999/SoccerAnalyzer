import './index.css';

const DropArea = (props) => {
    const handleCardDrop = (e) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('card_id');
        const card = document.getElementById(cardId);
        card.style.display = 'block';
        console.log('e.target', e.target);
        e.target.appendChild(card);
    };

    return (
        <div
            className="dropArea"
            onDrop={handleCardDrop}
        >
            DropArea
        </div>
    )
};

export default DropArea;