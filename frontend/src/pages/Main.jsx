
import HeroImg from '../components/mainPage/HeroImg'
import MainText from '../components/mainPage/MainText'
import FormSection from '../components/mainPage/FormSection'


export default function Main() {
  return (
    <>
            <HeroImg imgPath={'./hero.jpg'} imgHeight={600}/>
            <MainText />
            <FormSection/>
    </>
  )
}
