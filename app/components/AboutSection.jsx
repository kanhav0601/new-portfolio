"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Services",
        id: "services",
        content: (
            <div>
                <ul className="list-disc pl-2">
                    <li>IT Maintenance and Support: PASSCO provides maintenance services for computers and peripherals, including hardware and software upgrades and security solutions.</li>
                    <li>IT Equipment Supply: We supply new computers, printers, photocopiers, scanners, hard drives, and other IT equipment.</li>
                    <li>And others</li>
                </ul>
            </div>
        ),
    },
    {
        title: "Clients",
        id: "clients",
        content: (
            <ul className="list-disc pl-2">
                <li>Income Tax Department</li>
                <li>Indian Navy</li>
                <li>And others</li>
            </ul>
        ),
    },
    {
        title: "Contacts",
        id: "contacts",
        content: (
            <ul className="list-disc pl-2">
    <li>
        <a href="mailto:passco.mail@gmail.com" className="text-blue-500 hover:underline">
            passco.mail@gmail.com
        </a>
    </li>
    <li>
        <a href="mailto:jain.shreyans0601@gmail.com" className="text-blue-500 hover:underline">
            jain.shreyans0601@gmail.com
        </a>
    </li>
</ul>

        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("services");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className='text-white'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src='/images/office.jpg'
                    width={500}
                    height={500}
                    alt="Office environment"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className='text-4xl font-bold text-white mb-4'>About Us</h2>
                    <p className='text-base lg:text-lg'>PASSCO stands at the forefront of delivering cutting-edge IT solutions designed to elevate the efficiency and effectiveness of government operations throughout India. Our unwavering commitment to innovation and excellence is reflected in our diverse array of services, meticulously crafted to address the distinct needs of various governmental departments. From robust IT maintenance and support to the provision of essential equipment and office supplies, PASSCO ensures that our clients are equipped with the tools and resources required to operate with seamless precision..</p>
                    <div className='flex justify-start flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("services")} active={tab === "services"}>
                            Services
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("clients")} active={tab === "clients"}>
                            Clients
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("contacts")} active={tab === "contacts"}>
                            Contacts
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
