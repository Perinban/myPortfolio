import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles.js";
import { linkedin_posts } from "../constants";

const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const ChevronLeft = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const LinkedIn = () => {
    const [current, setCurrent] = useState(0);
    const total = linkedin_posts.length;

    const prev = () => setCurrent((c) => (c - 2 + total) % total);
    const next = () => setCurrent((c) => (c + 2) % total);

    const visible = [linkedin_posts[current], linkedin_posts[(current + 1) % total]];

    return (
        <>
            <motion.div
                variants={textVariant()}
                initial="hidden"
                animate="show"
                className="text-center mb-10"
            >
                <p className={`${styles.sectionSubText} text-supplementary`}>What I share</p>
                <h2 className={`${styles.sectionHeadText} text-secondary`}>LinkedIn Posts.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("up", "spring", 0.2, 0.7)}
                initial="hidden"
                animate="show"
                className="flex items-center justify-center gap-6"
            >
                <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:text-white hover:bg-[#0A66C2] transition-all duration-200 flex-shrink-0"
                >
                    <ChevronLeft />
                </button>

                <div className="flex gap-6">
                    {visible.map((post, i) => (
                        <div key={post.id} className="bg-tertiary rounded-2xl overflow-hidden flex flex-col" style={{ width: "504px", maxWidth: "calc(50vw - 120px)" }}>
                            <div className="flex items-center justify-between px-4 py-3">
                                <div className="flex items-center gap-2">
                                    <LinkedInIcon />
                                    <span className="text-secondary text-sm font-medium">LinkedIn</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-secondary opacity-60">{(current + i) % total + 1} / {total}</span>
                                    <a
                                        href={`https://www.linkedin.com/feed/update/urn:li:${post.urn}:${post.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-[#0A66C2] hover:underline"
                                    >
                                        View on LinkedIn ↗
                                    </a>
                                </div>
                            </div>

                            <div style={{ overflow: "hidden", position: "relative" }}>
                                <iframe
                                    key={post.id}
                                    src={`https://www.linkedin.com/embed/feed/update/urn:li:${post.urn}:${post.id}`}
                                    style={{
                                        width: "100%",
                                        height: "1210px",
                                        border: "none",
                                        marginTop: "-70px",
                                        marginBottom: post.urn === "ugcPost" ? "-100px" : "-570px",
                                        display: "block",
                                    }}
                                    frameBorder="0"
                                    allowFullScreen
                                    title={post.title || `LinkedIn post ${current + i + 1}`}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={next}
                    className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:text-white hover:bg-[#0A66C2] transition-all duration-200 flex-shrink-0"
                >
                    <ChevronRight />
                </button>
            </motion.div>

            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: Math.ceil(total / 2) }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i * 2)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${Math.floor(current / 2) === i ? "bg-[#0A66C2] w-6" : "bg-secondary opacity-40"}`}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(LinkedIn, "linkedin");