import { AnnouncementBar } from '@/components/announcement-bar'
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import React from 'react'
import NewsSection from '@/components/news-section'
import LatestPosts from '@/components/latest-posts'

const news = () => {
  return (
    <>
    <AnnouncementBar />
      <SiteHeader />
      <NewsSection />
      <LatestPosts />
    </>
  )
}

export default news