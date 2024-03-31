import React, { useEffect, useState } from 'react'
import Header from '../../Components/DashboardComponents/Header'
import Filter from '../../Components/ui/Filter'
import StartupCardInStartup from '../../Components/DashboardComponents/StartupCardInStartup'
import axios from 'axios'
import InvestorCardInInvestor from '../../Components/DashboardComponents/InvestorCardInInvestor'

function Explore() {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        const nodeEnv = process.env.REACT_APP_NODE_ENV;
        const baseUrl = nodeEnv === "production"
        ? "https://crowdup-api.vercel.app"
        : "http://localhost:5000";
        async function getData(){
           try {
             const data = await axios.get(baseUrl + '/api/startups/explore')
             console.log(data.data?.message)
             setData(data.data.message)
           } catch (error) {
            console.log(error)
           }
        }
        getData()
    },[])
    return (
        <>
            <Header />
            <div className=' h-full w-full flex justify-center p-4'>
                <div className=' max-w-7xl w-full'>
                    <div className=' py-8 text-3xl text-center mb-4'>
                        <h1 className="text-3xl mb-1 text-center font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-green-700 via-emerald-500 to-lime-600 bg-clip-text text-transparent">
                            {" "}
                            Invest in the top Startups {" "}
                        </h1>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className=' col-span-1'>
                            <Filter />
                        </div>
                        <div className='col-span-3'>
                            <div className='flex flex-row flex-wrap gap-8 justify-start items-start'>
                                {data && data.map((val)=>(
                                    // <StartupCardInStartup />
                                    <InvestorCardInInvestor name={val.name}  fundsRecived={val.fundsRecieved} fundsRequired={val.fundsRequired} username={val.username} stocks={val.stocks} />
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore