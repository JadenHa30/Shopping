import React from 'react';

export default function ContentHeader(props) { 
    const handleClick = () => {
        props.toggleModal();
    }
    return (
        <>{/*React fragment*/}
            <div className="content-header color">
                <h3>Products</h3>
                <button className="btn primary-btn" onClick={handleClick}>+ Add</button>
            </div>
            
        </>
    )
    
}