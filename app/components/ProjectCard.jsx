import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, description, imgUrl, previewUrl }) => {
    return (
<div className="relative bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg hover:shadow-2xl w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-gray-500 hover:via-blue-500 hover:to-blue-900">
            <div className="relative">
                <Image
                    src={imgUrl}
                    alt={title}
                    width={400} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className="w-full h-48 object-cover rounded-md"
                    style={{ objectFit: 'cover' }}
                />
                {previewUrl && (
                    <Link
                        href={previewUrl}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 text-[#ABE7BE] text-lg font-mono transition-opacity duration-300"
                        aria-label="Website link"
                    >
                        Website
                    </Link>
                )}
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
