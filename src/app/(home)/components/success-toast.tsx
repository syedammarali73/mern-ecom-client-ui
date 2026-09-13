import { CircleCheck } from 'lucide-react'
import React from 'react'

function SuccessToast() {
    return (
        <>
            <div className='flex items-center gap-2'>
                <CircleCheck className='text-green-700' />
                <span className='font-semibold'>Item added to cart</span>
            </div>
        </>
    )
}

export default SuccessToast
