import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

import React, { useState } from 'react'


export default function MovieRating({rate}) {

    const [rating, setRating] = useState(0) // Initial value

    return <>

        <Rating style={{ maxWidth: 180 }}
            value={rate}
            readOnly
            // onChange={setRating}
        />

    </>
}
