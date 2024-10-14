import React from 'react'

export default function About(){
    return (
        <div className='py-16 bg-white'>
            <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
                <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
                    <div className='md:5/12 lg:w-5/12'>
                        <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                        />
                    </div>
                    <div className='md:7/12 lg:w-6/12'>
                        <h2 className='text-2xl text-gray-900 font-bold md:text-4xl'>
                        React development is carried out by passionate developers 
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Red Dead Redemption 2 is a Western-themed action-adventure game. Played from a 
                            first- or third-person perspective, the game is set in an open-world environment 
                            featuring a fictionalized version of the United States in 1899.[1][b] It features 
                            single-player and online multiplayer components, the latter released under Red Dead Online.
                        </p>
                        <p className="mt-4 text-gray-600">
                            For most of the game, the player controls outlaw Arthur Morgan, a member of the Van der 
                            Linde gang, as he completes missions—linear scenarios with set objectives—to progress the 
                            story; from the epilogue, the player controls Red Dead Redemption protagonist John Marston.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}