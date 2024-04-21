import { FC } from 'react'
import Paragraph from '@/ui/Paragraph'

import styles from './About.module.css'
import Footer from '@/components/Layout/Footer'

const About: FC = () => {
    return (
        <div className={styles.about}>
            <section className='container'>
                <Paragraph title='About' description='The rising cost of food is a huge problem in our country right now. This problem is made worse by the big box companies pushing preservative and dye laden sugary food-like products as the only affordable

foods around. Questionable farming practices and unethical ingredient inclusions have given rise to a revolution most commonly referred to as the “Crunchy” community that is gaining in popularity at an unbelievable pace. But until now the community has been scattered across different social media platforms, blogs, and forums without the presence to truly induce change in the way the country feeds it’s self or have meaningful conversations within the community to help and teach each other how to get back to clean living.

As a base user you will have access to forums, information and discussions on clean living and healthy eating, as well as how to grow and cultivate your own food. If done properly a small plot of land can produce far more than the people living on it can consume; and this is where the opportunity to give back comes in.

Hunger is a existential threat to our communities. In Charleston alone, 50% of the people that visit food banks are minors or seniors. These numbers are unacceptable when a small amount of organization and creativity can produce tons of food for a very small cost. Even if a back yard has too much shade to grow plants, local arborists are always looking for a place to offload the wood they chop up that they don’t have to pay for. At a very small cost, that wood can be seeded with mushroom spawn and produce nutrient dense mushrooms for up to 10 years!

Please consider being a part of your communities prosperity, health, and liberation from “Big Food” by becoming a part of the volunteer network that Harvest Initiative hosts and transform the world for good.' />
                <div className='underline'></div>
                <Paragraph title='Host Network' description='Do you have some property and want to produce some of your own food but don’t have the knowhow, time or ability? Consider becoming one of our hosts. This network will connect you with one of our managers for your area that will bring a team of volunteers to turn a portion of your property into a food generating powerhouse. As a host, you will automatically be eligible to keep a percentage of the food your garden produces. The volunteer network will even come and harvest for you. Give back to the community, and feed the people near you that need it most by becoming a Host in our network.' />
                <div className='underline'></div>
                <Paragraph title='Become a Master' description='Do you know your way around an agricultural development but have nowhere to flex your creativity? Do you want to tie your whole community together and become the one who makes sure everyone is fed in your own city? As a manager with HI, you have the opportunity to plan organize and connect local non-profits, volunteers, property hosts, and donors to build a sustainable food network that makes sure as many people as possible have access to clean, healthy, nutrient dense food.' />
                <div className='underline'></div>
                <Paragraph title='Volunteer Network' description='Do want to grow food but not have a yard? Join our volunteer network and give back to the community. The majority of the proceeds go to those who can’t afford decent food by supplying food banks. As a volunteer with HI, you will not only get the opportunity to learn how to draw upon nature, and help the community, but a percentage of the harvest will be made available to those that made it happen at a heavily discounted rate. Grow your food and your soul by becoming a volunteer' />
            </section>
            <Footer />
        </div>
    )
}

export default About