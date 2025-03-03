'use client';


import { useState } from 'react'

export default function Coutner() {
    const [count, setCount] = useState<number>(0)

    return (
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    )
}
