import * as motion from "motion/react-client"
import "./shimmerUI.css"




export default function Gestures() {
    return (
        <div className = "Shimmer-container">
            <motion.div className="box"
                whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    backgroundColor: "#b51d1dff",
                    transition: { duration: 0.2 },
                }}
                whileTap={{
                    scale: 0.8,
                    rotate: -5,
                    backgroundColor: "#b45151ff",
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                }}
                
            />
        </div>
    )
}

