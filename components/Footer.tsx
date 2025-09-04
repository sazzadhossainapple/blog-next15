import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
const Footer = () => {
    return (
        <footer className="bg-indigo-900 text-primary-foreground py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="h-8 w-8 bg-[#5f09d2] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                    B
                                </span>
                            </div>
                            <span className="text-xl font-bold text-white">
                                BlogSpace
                            </span>
                        </div>
                        <p className="text-[#e7e6e6] text-pretty">
                            Your go-to source for insights on technology,
                            development, and design.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-white">
                            Categories
                        </h3>
                        <ul className="space-y-2 text-[#e7e6e6]">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Technology
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Design
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-white">
                            Resources
                        </h3>
                        <ul className="space-y-2 text-[#e7e6e6]">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-white">
                            Connect
                        </h3>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="border-[#a8a7a7] text-white border hover:bg-[#5f09d2] hover:text-accent-foreground bg-transparent h-8 w-8 flex items-center justify-center rounded-sm"
                            >
                                <LuGithub className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="border-[#a8a7a7] text-white border hover:bg-[#5f09d2] hover:text-accent-foreground bg-transparent h-8 w-8 flex items-center justify-center rounded-sm"
                            >
                                <FaXTwitter className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="border-[#a8a7a7] text-white border hover:bg-[#5f09d2] hover:text-accent-foreground bg-transparent h-8 w-8 flex items-center justify-center rounded-sm"
                            >
                                <LuLinkedin className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#dedcdc] mt-8 pt-8 text-center text-[#d1cfcf]">
                    <p>&copy; 2024 BlogSpace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
