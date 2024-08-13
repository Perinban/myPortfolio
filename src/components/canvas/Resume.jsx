import { saveAs } from 'file-saver';
import { cv } from '../../assets';
import { motion } from 'framer-motion';

const ResumeCanvas = () => {

    const downloadPdf = async () => {
        const response = await fetch(cv);
        const blob = await response.blob();
        saveAs(blob, 'cv.pdf');
    };

    return (
        <div className="flex justify-center items-center">
            <div className="p-3 rounded-xl">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadPdf}
                    className="relative bg-[#A67B5B] text-secondary font-semibold py-2 px-4 rounded-xl overflow-hidden transition-transform duration-300"
                >
                    <span className="absolute inset-0 bg-[#8B5E3C] opacity-30 rounded-xl transition-transform duration-300 transform scale-0 group-hover:scale-100" />
                    Download CV
                </motion.button>
            </div>
        </div>
    );
};

export default ResumeCanvas;