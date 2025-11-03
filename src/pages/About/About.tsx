import AboutImg from '@/assets/images/photo_about.jpg'
import IconMenu from '@/assets/icons/menu.svg?react'
import IconEmail from '@/assets/icons/email.svg?react'
import { Advertising, Title } from '@/components'

const About = () => {
  return (
    <>
      <Advertising />
      <section>
        <img src={AboutImg} alt={AboutImg.name} />
        <div>
          <Title
            span="About Us"
            title="We Believe in Working
            Accredited Farmers"
            description="Simply dummy text of the printing and typesetting industry. Lorem had ceased to
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          />
          <div>
            <div>
              <IconMenu />
              <h3>Organic Foods Only</h3>
              <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
            <div>
              <IconEmail />
              <h3>Quality Standards</h3>
              <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
