import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function BasicsOfMotion() {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <>
        <div
            style={{
                display:"grid",
                placeContent:"center",
                height:"100vh",
                gap:"0.8rem"
            }}
        >
            <button onClick={() => setIsVisible(!isVisible)} className='example-button'>
                {isVisible ? "Hide" : "Show"}
            </button>

             <AnimatePresence>
            {isVisible && <motion.div
                initial={{
                    rotate:"0deg"
                }}
                animate={{
                    rotate:"360deg"
                }}

                transition={{
                    duration:1,
                    ease:"anticipate"
                }}

                exit={{
                    rotate:"0deg"
                }}

                

                style={{
                    width:"150px",
                    height:"150px",
                    backgroundColor:"orange",
                    color:"white"
                }}
            >

            </motion.div>
          }
          </AnimatePresence> 

        </div>
    </>
  )
}
