'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Post } from "../types/post"

interface PostCardProps {
  post: Post
  index: number
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link href={`/posts/${post.slug}`} className="space-y-4 block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <time className="text-sm text-gray-600">{post.date}</time>
          <h2 className="text-2xl font-light tracking-wide">{post.title}</h2>
          <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
          <span className="inline-block text-sm border-b border-black pb-1 transition-colors duration-300 group-hover:border-gray-400">
            Read more
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

