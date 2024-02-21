import React, { FC } from 'react'
import { CallToAction } from '../components/call_to_action/CallToAction'
import { Clients } from '../components/clients/Clients'
import { FeaturesList } from '../components/features_list/FeaturesList'
import { FeaturesScreenshot } from '../components/features_screenshot/FeaturesScreenshot'
import { FeaturesSideImage } from '../components/features_side_image/FeaturesSideImage'
import { Footer } from '../components/footer/Footer'
import titles from 'constants/titles'
import { Head, Heros } from '../components';
import { HOME } from 'constants/consts'

const Home: FC<{}> = () => {
  return (
    <>
      <Head title={titles[HOME]}/>
      <Heros/>
    </>
    // <>
    //   <Navbar />
    //   <div> ke </div>
    //   <FeaturesList />
    //   <FeaturesScreenshot />
    //   <FeaturesSideImage />
    //   {/* <Clients /> */}
    //   <CallToAction />
    //   <Footer />
    // </>

  )
}

export default Home;