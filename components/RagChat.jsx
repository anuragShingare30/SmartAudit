import React from 'react'

const RagChat = () => {
    return (
        <div className='m-20'>

            <div className="mockup-browser bg-base-300 scroll">
                <div className="mockup-browser-toolbar">
                    <div className="input">https://SmartAudit.com</div>
                </div>
                <div className="bg-base-200 flex justify-center px-4 py-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur iusto at?</div>
            </div>

            <div className='join-item font-mono'>
                <form action="" className='m-20'>
                    <input type="text" placeholder="Chat with SmartAudit AI" className='input input-bordered w-full max-w-xs join-item text-neutral-400 font-mono' />
                    <button className='join-item btn btn-primary'>Start Chat!!!</button>
                </form>

            </div>
        </div>
    )
}

export { RagChat };
