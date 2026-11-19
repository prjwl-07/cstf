import React from 'react'

function ProductDetail({product, setCheck}){

    return(
        <div>
            <button onClick={() => setCheck(false)}>Go Back</button>
            This is the Detailed info about the Product
        </div>
    )
}

export default ProductDetail;