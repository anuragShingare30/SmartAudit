"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import Link from 'next/link'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <HeroHighlight className="flex flex-col items-center gap-16">

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mt-28 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-500 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Get the most accurate Description, Explanation and Performance score of your smart contract
          with {" "}
          <Highlight className="text-white">
            SmartAudit
          </Highlight>
        </motion.h1>

          {/* IF USER IS SIGNED OUT WE WILL SHOW SIGN-IN BUTTON */}
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
          
          {/* IF USER IS SIGNED-IN WE WILL SHOW THE USERBUTTON */}
        <SignedIn>
          <Link href='/Chat'>
            <button className="btn md:bnt-sm lg:btn-md btn-outline">Get started</button>
          </Link>
        </SignedIn>

      </HeroHighlight>
    </div>
  );
};
