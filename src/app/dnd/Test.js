"use client"
import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Item component
const Item = ({ id, text, moveItem }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'ITEM',
        item: { id },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={dragRef}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}
        >
            {text}
        </div>
    );
};

// DropTarget component
const DropTarget = ({ onDrop, children }) => {
    const [{ isOver }, dropRef] = useDrop({
        accept: 'ITEM',
        drop: onDrop,
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <div
            ref={dropRef}
            style={{
                background: isOver ? '#f0f0f0' : 'transparent',
                padding: '10px',
                marginBottom: '5px',
            }}
        >
            {children}
        </div>
    );
};

export default function Test() {
    const [items, setItems] = useState([
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
    ]);

    // Function to handle item drop
    const handleDrop = (item, index) => {
        const newItems = [...items];
        newItems.splice(index, 0, newItems.splice(item.index, 1)[0]);
        setItems(newItems);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                {items.map((item, index) => (
                    <DropTarget key={item.id} onDrop={item => handleDrop(item, index)}>
                        <Item key={item.id} id={item.id} text={item.text} moveItem={handleDrop} />
                    </DropTarget>
                ))}
            </div>
        </DndProvider>
    );
}
