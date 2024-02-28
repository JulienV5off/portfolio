'use client';

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';

type Props = {}
const Page = () => {

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        observer.observe(ref.current);

        // Nettoyage de l'observer
        return () => observer.disconnect();
    }, []);

    return (
        <div style={{fontFamily: 'Coastgane, sans-serif'}}>

            {/* https://bg.ibelick.com */}
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* https://www.shapefest.com */}
            <div className="absolute top-4 left-0 w-96 h-96 md:block hidden opacity-50 animate-float">
                <Image src={'/img/atom_hexa.png'} width={600} height={600} alt="atom"/>
            </div>
            <div className="absolute top-10 right-20 w-44 h-44 opacity-50 animate-floatReverse">
                <Image src={'/img/block_cage.png'} width={600} height={600} alt="block-cage"/>
            </div>
            <div className="absolute bottom-0 md:left-1/2 left-20 w-96 h-96 opacity-50 animate-floatReverse2">
                <Image src={'/img/atom_tetra.png'} width={600} height={600} alt="tetra"/>
            </div>


            <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10 ml-4 mr-4 mt-2">
                <aside className="flex items-center gap-2">
                    <Link href={'/fr'} className="flex flex-row items-center gap-4">
                        <span className="text-2xl font-bold">J.S</span>
                    </Link>
                </aside>
                <nav
                    className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <ul className="flex items-center justify-center gap-8">
                        <Link href={'#'}>Home</Link>
                        <Link href={'#'}>About</Link>
                        <Link href={'#'}>Work</Link>
                        <Link href={'#'}>Contact</Link>
                    </ul>
                </nav>
                <aside className="flex gap-2 items-center">
                    <Link href={'/mongithub'}>
                        <Image src={'/img/github-mark.svg'} width={30} height={30} alt="github logo"/>
                    </Link>
                </aside>
            </div>

            <section
                id="home"
                ref={ref}
                className={`grid lg:grid-cols-2 grid-cols-1 h-screen gap-20 transition-all duration-500 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
            >

                <div className="hidden lg:flex  items-center justify-center flex-col">
                    <Image src={'/img/me.png'} width={420} height={420} alt="me"
                           className="rounded-3xl lg:ml-20 lg-0 mr-0 md:mx-0 mx-10 md:m-0 m-6"/>
                </div>
                <div className="lg:mr-40 flex items-center justify-center flex-col 3xl:mr-80 lg:mx-0 mx-20">
                    <h1 className="text-7xl lg:text-left text-center w-full">Hi, I'm <br/>Julien SARRAU</h1>
                    <h5 className="lg:text-left text-center">I'm a professional website developper. Our main goal is to
                        help and satisficed the local &
                        global Clients by web development solutions</h5>

                    {/* https://uiverse.io/emmanuelh-dev/nervous-starfish-19 */}
                    <div className="w-full mt-8 rounded-lg bg-gray-100 relative border-2 p-1">
                        <div className="flex p-2 gap-1 items-center">
                            <div className="">
                                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                                <span className="bg-gray-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                                <span className="bg-green-600 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div>
                                <p className="text-sm">{">"} /lang/languages.tsx</p>
                            </div>
                        </div>

                        <div className="card__content px-4 p-4 flex flex-row gap-2 flex-wrap">
                            <div className="bg-red-200 rounded-2xl px-3 flex items-center justify-center">CSS</div>
                            <div className="bg-orange-200 rounded-2xl px-3 flex items-center justify-center">HTML</div>
                            <div className="bg-green-200 rounded-2xl px-3 flex items-center justify-center">JavaScript
                            </div>
                            <div className="bg-blue-200 rounded-2xl px-3 flex items-center justify-center">TypeScript
                            </div>
                            <div className="bg-pink-200 rounded-2xl px-3 flex items-center justify-center">NextJS</div>
                            <div className="bg-purple-200 rounded-2xl px-3 flex items-center justify-center">MySQL</div>
                            <div className="bg-gray-200 rounded-2xl px-3 flex items-center justify-center">Prisma</div>
                            <div className="bg-gray-200 rounded-2xl px-3 flex items-center justify-center">C</div>
                            <div className="bg-lime-200 rounded-2xl px-3 flex items-center justify-center">C++</div>
                            <div className="bg-amber-200 rounded-2xl px-3 flex items-center justify-center">C#</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page