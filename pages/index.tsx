import * as React from 'react'
import { CallToAction } from '../components/call_to_action/CallToAction'
import { Clients } from '../components/clients/Clients'
import { FeaturesList } from '../components/features_list/FeaturesList'
import { FeaturesScreenshot } from '../components/features_screenshot/FeaturesScreenshot'
import { FeaturesSideImage } from '../components/features_side_image/FeaturesSideImage'
import { Footer } from '../components/footer/Footer'
import { Heros } from '../components/heroes/Heros'
import { Navbar } from '../components/navbar/Navbar'
import { Testimonials } from '../components/testimonials/Testimonials'
import { Craftech } from '../components/craftech/Craftech'
import { Video } from '../components/video/Video'

const Home = () => {
  return (
    <>
      <Navbar />
      <Heros />
      <FeaturesList />
      {/* <FeaturesScreenshot /> */}
      <Video/>
      <Testimonials />
      <FeaturesSideImage />
      <Craftech />
      <Clients />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Home