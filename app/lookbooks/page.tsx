import { AnnouncementBar } from '@/components/announcement-bar'
import { LookbookHeader } from '@/components/lookbook-header'
import { SiteHeader } from '@/components/site-header'
import { SpringBreezeFeature } from '@/components/spring-breeze-feature'
import React from 'react'

const lookbooks = () => {
  return (
    <>
    <AnnouncementBar />
      <SiteHeader />
      <LookbookHeader/>
      <SpringBreezeFeature/>
    </>
  )
}

export default lookbooks