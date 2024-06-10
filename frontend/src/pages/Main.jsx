
import HeroImg from '../components/mainPage/HeroImg'
import MainText from '../components/mainPage/MainText'
import FormSection from '../components/mainPage/FormSection'
import TextSection from '../components/mainPage/TextSection'


export default function Main() {
  return (
    <>
            <HeroImg imgPath={'./hero.jpg'} imgHeight={600}/>
            <MainText />
            <FormSection/>
            <TextSection />
    </>
  )
}
