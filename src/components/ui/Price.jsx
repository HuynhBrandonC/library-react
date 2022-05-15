import React from 'react';

const Price = ({originalPrice, salePrice}) => {
    return (
        <div className="book__price">
            {salePrice ?
                (<>
                    <span className="book__price--normal">${parseInt(originalPrice).toFixed(2)}</span>
                    ${parseInt(salePrice).toFixed(2)}
                </>)
                :
                "$" + parseInt(originalPrice).toFixed(2)}

        </div>
    );
}

export default Price;
