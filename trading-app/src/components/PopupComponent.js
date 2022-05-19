import React, { useState } from 'react';
import './popupComponent.css'
import { columns } from './../data'

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const PopupComponent = () => {
    const [items, setGetItems] = useState(columns)
    const [modal, updateModal] = useState(true)
    const toggle = () => {
        updateModal(!modal)
    }

    // fake data generator
    // const getItems = count =>
    //     Array.from({ length: count }, (v, k) => k).map(k => ({
    //         id: `item-${k}`,
    //         content: `item ${k}`
    //     }));

    // a little function to help us with reordering the result
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };
    function onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            items,
            result.source.index,
            result.destination.index
        );
            console.log("-->>",items);
        setGetItems({
            items
        });
    }

    const grid = 8;

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,

        // change background colour if dragging
        background: isDragging ? "lightgreen" : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: grid,
        
    });

    return (
        <div class="popupBackground">
            <div class="popup_table">
                <h5> Customize Table</h5>
                <span class="popupClose"> &#10060;</span>
                <ul>
                    
                    {
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <div 
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={getListStyle(snapshot.isDraggingOver)}
                                    >
                                        {console.log(columns)}
                                        {items.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div 
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}                                                   >

                                                        <li> {item.name}
                                                        <div className='list'> </div>
                                                            <div className='img'><img src="icon.png" alt="img" width="2px" height="2px" /></div>
                                                        </li>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    }
                </ul>
            </div>


        </div>

    );
}

export default PopupComponent;