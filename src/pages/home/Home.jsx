import React from 'react'
import HeroSection from '../../components/hero/HeroSection'
import Item from '../../components/item/Item'
import ProductsList from '../../features/products/ProductsList'
import Snakers from '../../components/snakers/Snakers'
import ResponsiveFeatures from '../../components/ResponsiveFeatures/ResponsiveFeatures'
import LatestNews from '../../components/LatestNews/LatestNews'
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'

function Home() {
  return (
    <div>
      <HeroSection/>
      <Item/>
      <ProductsList/>
      <Snakers/>
      <ResponsiveFeatures/>
      <LatestNews/>
      <FeaturedProduct/>
    </div>
  )
}

export default Home
