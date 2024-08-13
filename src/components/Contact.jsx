import React, { useState, useRef, Suspense, lazy, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const EarthCanvas = lazy(() => import('./canvas/Earth'));

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_prgd1pd',
            'template_vguhkd8',
            {
                from_name: form.name,
                reply_to: form.email,
                to_email: 'p.perinban@gmail.com',
                message: form.message
            },
            '5mnpMyjs6M0p7WX5X'
        ).then(
            () => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible.");
                setForm({ name: "", email: "", message: "" });
            },
            (error) => {
                setLoading(false);
                console.error(error);
                alert("Something went wrong. Please try again.");
            }
        );
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col-reverse xl:flex-row gap-10 overflow-hidden -my-5">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-1 bg-black-100 p-8 -mt-16 rounded-2xl"
            >
                <p className={`${styles.sectionSubText}`}>
                    Get in touch
                </p>
                <h3 className={`${styles.sectionHeadText} text-accent mb-4`}>
                    Contact.
                </h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-secondary font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Please provide your name"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-secondary font-medium mb-4">
                            Your email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Please provide your email address"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-secondary font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Please include any topics you would like to discuss"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-secondary font-bold shadow-md shadow-primary"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            {!isMobile && (
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className="flex-1 h-[350px] md:h-[550px] overflow-hidden"
                >
                    <Suspense fallback={<div>Loading Earth...</div>}>
                        <EarthCanvas />
                    </Suspense>
                </motion.div>
            )}
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
