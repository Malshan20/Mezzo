'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Pagination } from "./pagination"
import { posts } from "@/data/posts"
import { PostCard } from "./post-card"

const POSTS_PER_PAGE = 5

export default function LatestPosts() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  
  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-6xl"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-light tracking-wide mb-16"
        >
          LATEST POSTS
        </motion.h1>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </motion.div>
    </section>
  )
}

