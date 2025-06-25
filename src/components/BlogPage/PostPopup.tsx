import FallbackComments from "./Comments/CommentSection"
import FallbackPost from "./FirstPost/FallbackPost"
import { motion } from "framer-motion"

export default function () {
  return (
    <motion.div
	initial={{ y: 100, opacity: 0 }}
	animate={{ y: 0, opacity: 1 }}
	transition={{ duration: 0.9, ease: "easeOut" }}
    >
	<FallbackPost />
	<FallbackComments />
    </motion.div>
  )
}
