import React from 'react'

const socialLinks = ['FB', 'IG', 'IN', 'BE']

const ProjectsFooter = () => {
    return (
        <footer className='bg-black text-white w-full min-h-[55vh] lg:min-h-[70vh] flex flex-col justify-between py-3 lg:py-2'>
            <div className='flex flex-col lg:flex-row items-start lg:items-start justify-between gap-4 lg:gap-6 px-2'>
                <div className='flex flex-wrap items-center gap-2'>
                    {socialLinks.map((label) => (
                        <button key={label} className='border border-white rounded-full h-11 sm:h-12 lg:h-20 px-3 sm:px-4 lg:px-6 text-3xl sm:text-4xl lg:text-[4vw] leading-none font-[font2]'>
                            {label}
                        </button>
                    ))}
                </div>

                <button className='border border-white rounded-full h-11 sm:h-12 lg:h-20 px-4 sm:px-6 lg:px-10 text-3xl sm:text-4xl lg:text-[4vw] leading-none font-[font2] flex items-center gap-2 lg:gap-4'>
                    <span>CONTACT</span>
                    <span className='text-3xl sm:text-4xl lg:text-[3vw] leading-none'>♥</span>
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-2 px-2 pb-2 text-[11px] sm:text-xs lg:text-xl font-[font2] uppercase'>
                <div className='flex items-center gap-2 sm:gap-3'>
                    <span className='text-lg sm:text-xl lg:text-3xl'>◍</span>
                    <span>MONTREAL_07:42:38</span>
                </div>
                <span className='sm:text-right lg:text-left'>POLITIQUE DE CONFIDENTIALITÉ</span>
                <span>AVIS DE CONFIDENTIALITÉ</span>
                <span className='sm:text-right lg:text-left'>RAPPORT ÉTHIQUE</span>
                <span>OPTIONS DE CONSENTEMENT</span>
                <button className='text-left sm:text-right lg:text-left'>RETOUR EN HAUT</button>
            </div>
        </footer>
    )
}

export default ProjectsFooter
