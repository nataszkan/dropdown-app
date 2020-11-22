import React from 'react';

const CardContent = () => { 
    return (
        <div className="card-content">
        </div>
    );
}


const CardActions = (props) => { 
    return (
        <div className="card-actions">
            {props.children}
        </div>
    );
}

const Card = (props) => {
        return (
               <div className="card">
                 <CardContent />
                 <CardActions>{props.children}</CardActions>
               </div>
        );
}

export default Card;