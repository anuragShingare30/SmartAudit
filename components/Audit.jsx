import { Code, CodeXmlIcon } from 'lucide-react';
import React from 'react'

const Audit = () => {
    return (
        <div className=''>
            <form className='m-10 flex flex-col items-center font-mono'>
                <textarea className="textarea textarea-bordered m-10 h-96 w-full text-neutral-400 text-sm" placeholder="Enter your smart contract here...">
                </textarea>
                <button className='btn btn-md btn-primary'>Get Audit</button>
            </form>
        </div>
    )
}

export { Audit };
