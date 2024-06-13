
import HeroImgMain from '../components/mainPage/HeroImgMain'
import MainText from '../components/mainPage/MainText'
import FormSection from '../components/mainPage/FormSection'
import TextSection from '../components/mainPage/TextSection'


export default function Main() {
  return (
    <>
            <HeroImgMain imgPath={'./hero.jpg'} imgHeight={600}/>
            <MainText />
            <FormSection/>
            <TextSection />
    </>
  )
}
