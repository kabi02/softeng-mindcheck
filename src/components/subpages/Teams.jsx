import Layout from '../Layout'
import Card from '../Card'


// images of the team
import team1 from '../../assets/teams/ken.png'
import team2 from '../../assets/teams/yong.png'
import team3 from '../../assets/teams/kirb.png'
import team4 from '../../assets/teams/lian.png'

export default function Homepage() {
    return (
        <Layout>
        <div className="items-center py-10 justify-center max-w-[80%] mx-auto"> 
            <h1 className="sm:text-3xl text-xl font-bold text-center">TEAMS</h1>
        </div>
        <div className='sm:px-20 px-10 flex flex-wrap gap-10 pb-24 sm:mx-auto  justify-center'>
            {/* cards of each team */}
            <Card
                img = {team1}
                name = 'Kenn Soria'
                email = 'mailto:S.kenn37@gmail.com'
                fb = 'https://www.facebook.com/profile.php?id=100069783585178'
                linkedin = ''
            />
            <Card
                img = {team2}
                name = 'Dion Ursua'
                email = 'mailto:yong.ursua@gmail.com'
                fb = 'https://www.facebook.com/yong.ursua'
                linkedin = 'https://www.linkedin.com/in/dion-ursua-baa8b3269'
            />
            <Card
                img = {team3}
                name = 'Kirby Billones'
                email = 'mailto:kbillones98@gmail.com'
                fb = 'https://www.facebook.com/kirbyharold.billones'
                linkedin = 'www.linkedin.com/in/kirby-harold-billones-104aa4282'
            />
            <Card
                img = {team4}
                name = 'Lianne Serafica'
                email = 'mailto:valerie.lianne@gmail.com'
                fb = 'https://www.facebook.com/kirbyharold.billones'
                linkedin = 'https://www.linkedin.com/in/lianne-valerie-serafica-584956189/'
            />
            
        </div>
        
        </Layout>
    )
}