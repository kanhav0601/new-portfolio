"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Income Tax Department",
        description: "PASSCO provides expert income tax consultation, advising clients on optimal tax planning strategies. We offer precise income tax return preparation and filing services for individuals and businesses.",
        image: "/images/clients/Income-Tax-Department-1-removebg-preview.png",
        tag: ["All", "Government"],
        previewUrl: "https://incometaxindia.gov.in",
    },
    {
        id: 2,
        title: "Indian Navy",
        description: "PASSCO delivers specialized IT maintenance and support services tailored to the Indian Navy’s operational needs. We supply critical IT equipment and office supplies essential for the smooth functioning of Indian Navy installations and operations.",
        image: "/images/clients/navy-removebg-preview.png",
        tag: ["All", "Government"],
        previewUrl: "https://indiannavy.nic.in",
    },
    {
        id: 3,
        title: "Central Vigilance Commission (CVC)",
        description: "PASSCO provides comprehensive IT maintenance and support services to ensure the integrity and efficiency of CVC’s information systems. We supply essential IT equipment and office supplies crucial for CVC’s administrative operations and vigilance activities.",
        image: "/images/clients/Central_Vigilance_Commission__CVC__logo-removebg-preview.png",
        tag: ["All", "Government"],
        previewUrl: "https://cvc.gov.in",
    },
    {
        id: 4,
        title: "Department of Economic Affairs",
        description: "PASSCO offers tailored IT maintenance and support services to bolster the DEA’s technological infrastructure. We supply vital IT equipment and office supplies essential for the smooth operations of the DEA’s administrative functions.",
        image: "/images/clients/eco-removebg-preview-1.png",
        tag: ["All", "Government"],
        previewUrl: "https://dea.gov.in",
    },
    {
        id: 5,
        title: "Central Industrial Security Forces (CISF)",
        description: "PASSCO provides specialized IT maintenance and support services to strengthen CISF’s operational technology infrastructure. We supply critical IT equipment and office supplies essential for CISF’s security and administrative functions.",
        image: "/images/clients/cisf-removebg-preview.png",
        tag: ["All", "Government"],
        previewUrl: "https://cisf.gov.in",
    },
    {
        id: 6,
        title: "Central Board of Indirect Taxes and Customs (CBIC)",
        description: "PASSCO delivers specialized IT maintenance and support services to ensure the seamless operation of CBIC’s digital infrastructure. We supply critical IT equipment and office supplies essential for CBIC’s enforcement and administrative functions.",
        image: "/images/clients/ccb-removebg-preview.png",
        tag: ["All", "Government"],
        previewUrl: "https://cbic.gov.in",
    },
    {
        id: 7,
        title: "Directorate General of GST Intelligence",
        description: "PASSCO delivers specialized IT maintenance and support services to optimize DGCI’s financial management systems. We supply essential IT equipment and office supplies crucial for DGCI’s financial and accounting operations.",
        image: "/images/clients/dggi-removebg-preview.png",
        tag: ["All", "Government"],
        previewUrl: "https://cbic.gov.in/htdocs-cbec/gst/index.html",
    },
    {
        id: 8,
        title: "Chief Controller of Factories",
        description: "PASSCO provides specialized IT maintenance and support services to enhance the technological capabilities of the Chief Controller of Factories. We supply essential IT equipment and office supplies necessary for supporting regulatory oversight and administrative functions.",
        image: "/images/clients/ccfl-removebg-preview.png",
        tag: ["All", "Government"],
        previewUrl: "https://labour.gov.in/ccof",
    },
    {
        id: 9,
        title: "Ministry of Textiles",
        description: "PASSCO provides specialized IT maintenance and support services to enhance the Ministry of Textiles’ digital infrastructure. We supply essential IT equipment and office supplies necessary for supporting administrative functions and textile industry initiatives.",
        image: "/images/clients/textiiles-removebg-preview.png",
        tag: ["All", "Government"],
        previewUrl: "https://texmin.nic.in",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="clients">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Our Clients
            </h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
