import React, { FC } from 'react'
import { CallToAction } from '../components/call_to_action/CallToAction'
import { Clients } from '../components/Clients/Clients'
import { FeaturesScreenshot } from '../components/features_screenshot/FeaturesScreenshot'
import { FeaturesSideImage } from '../components/features_side_image/FeaturesSideImage'
import titles from 'constants/titles'
import { Features, Head, Heros } from '../components';
import { HOME } from 'constants/consts'

const Home: FC<{}> = () => {
  return (
    <>
      <Head title={titles[HOME]}/>
      <Heros/>
      <Clients/>
      <Features/>
      <FeaturesSideImage />
    </>
    // <>
    //   
    //   <FeaturesScreenshot />
    //   {/* <Clients /> */}
    //   <CallToAction />
    //   <Footer />
    // </>

  )
}

export default Home;