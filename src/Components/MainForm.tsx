import React, { useState } from 'react'

import yui from '../assets/images/yui_twiddle.gif';

const MainForm:React.FC<any> = (props)=>{
    const [loading, setLoading] = useState(false);

    const doNothing = () => {};
    const handleCompleted = props.handleCompleted ? props.handleCompleted : doNothing;

    const submitCard = ()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            handleCompleted();
        }, 4000);
    }

    return (
        <div className="w-full h-full flex items-center">
            <aside className="h-screen">
                <img src={yui} alt="" className="h-full" />
            </aside>
            <section className="flex flex-col space-y-2 w-2/3 px-2">

                <div className="w-full flex justify-center">
                    <p className="w-72">
                        H-hi there… <br/> 
                        Do you th-think I could have your credit card information, p-please?
                    </p>
                </div>
                <div className="w-full grid grid-cols-6">
                    <label htmlFor="" className="col-span-2">Name:</label>
                    <input type="text" id="" name="" className="border-solid border border-gray-400 col-span-3"/>
                </div>
                <div className="w-full grid grid-cols-6">
                    <label htmlFor="" className="col-span-2">Card Number:</label>
                    <input type="text" id="" name="" className="border-solid border border-gray-400 col-span-3"/>
                </div>
                <div className="w-full grid grid-cols-6">
                    <label htmlFor="" className="col-span-2">Expiry Date:</label>
                    <input type="text" id="" name="" className="border-solid border border-gray-400 col-span-3"/>
                </div>
                <div className="w-full grid grid-cols-6">
                    <label htmlFor="" className="col-span-2">Security Code:</label>
                    <input type="text" id="" name="" className="border-solid border border-gray-400 col-span-3"/>
                </div>
                <div className="w-full grid grid-cols-6 items-center">
                    <button className=" col-span-2 col-start-3 bg-blue-700 px-2 py-1 rounded-sm text-white" onClick={submitCard}>Th-thanks</button>
                    
                        
                        <svg className="animate-spin h-5 w-5 text-gray-600 duration-200 transition-all opacity-0" style={{opacity:loading ? 1 : 0}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                </div>
            </section>
        </div>
    );
}

export default MainForm;