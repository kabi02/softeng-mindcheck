import Layout from '../Layout'
import Title from '../Title'
import Resource from '../Resource'

// arrays of each rows per resource
const dsm5=[
    {
    name: 'Author',
    info: 'American Psychiatric Association (APA)',
    },
    {
    name: 'Published',
    info: '2022',
    },
]

const MentalHealthPH=[
    {
        name: 'Published',
        info: 'Aug. 30, 2021',
    },
]

const natlhotline=[
    {
    name: 'Globe / TM ',
    info: '0966-351-4518',
    },
    {
    name: 'Smart / Sun / TNT',
    info: '0908-639-2672',
    },
]

const cagayan=[
    {
        name: 'Telephone Numbers',
        info: '0783043789',
    },
    {
        name: '',
        info: '0783043789',
    },
    {
        name: '',
        info: '0783020000',
    },
    {
        name: 'Email',
        info: 'cvmcr2@gmail.com',
    },
]

const amara=[
    {
        name: 'Starting Price Range',
        info: 'Php800 to Php2,000',
    },
    {
        name: 'Phone Number',
        info: '09171583072',
    },
    {
        name: 'Email',
        info: 'amaracenter2015@gmail.com',
    },
]

const amang=[
    {
        name: 'Starting Price Range',
        info: 'Free',
    },
    {
        name: 'Contact Number',
        info: '0977 244 0510',
    },
    {
        name: ' ',
        info: '89481263',
    },
    {
        name: 'Email',
        info: 'armmc.psychiatry@gmail.com',
    },
]

const National=[
    {
        name: 'Starting Price Range',
        info: 'Free',
    },
    {
        name: 'Contact Number',
        info: '85319001290',
    },
    {
        name: ' ',
        info: '09772440200',
    },
    {
        name: ' ',
        info: '09772440202',
    },
    {
        name: ' ',
        info: '09772440215',
    },
]

const JRT=[
    {
        name: 'Starting Price Range',
        info: 'Private',
    },
    {
        name: 'Contact Number',
        info: '0289219610',
    },
    {
        name: ' ',
        info: '09216260173',
    },
]

const InTouch=[
    {
        name: 'Contact Number',
        info: '0288931893',
    },
    {
        name: ' ',
        info: '09228938944',
    },
    {
        name: ' ',
        info: '09178631136',
    },
    {
        name: ' ',
        info: '09988410053',
    },
    {
        name: 'Email',
        info: 'intouch@in-touch.org',
    },
]

const Metro=[
    {
        name: 'Contact Number',
        info: '0323442141',
    },
    {
        name: ' ',
        info: '09209470270',
    },
    {
        name: 'Email',
        info: 'cebu_metropsych@yahoo.com',
    },
]

const HOPELINE=[
    {
        name: 'Contact Number',
        info: '804HOPE (4673)',
    },
    {
        name: ' ',
        info: '0917-558HOPE (4673)',
    },
    {
        name: ' ',
        info: '2919',
    },
]

const Directory = () => {
  return (
    <Layout>
        <Title> RESOURCES </Title>
        {/* body */}
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            {/* resources */}
            <Resource
                title='DSM-5-TR Self-Rated Level 1 Cross-Cutting Symptom Measure—Adult'
                url='https://www.psychiatry.org/getmedia/e0b4b299-95b3-407b-b8c2-caa871ca218d/APA-DSM5TR-Level1MeasureAdult.pdf'
                rows={dsm5}
            />
            <Resource
                title='MentalHealthPH'
                url='https://mentalhealthph.org/directory/'
                desc='Directory of mental health facilities, services, and organizations from around the Philippines'
                rows={MentalHealthPH}
            />
        </div>

        {/* hotlines */}
        <Title textSizeClass='sm:text-2xl text-lg'>HOTLINES</Title>
        <div className='w-full flex justify-center items-center'>
            <Resource
                title='National Mental Health Crisis Hotline '
                url='https://doh.gov.ph/NCMH-Crisis-Hotline'
                rows={natlhotline}
            />
        </div>

        {/* hotlines in Luzon */}
        <Title textSizeClass='sm:text-2xl text-lg' textAlign=''>Luzon</Title>
        {/* row */}
        <div className='min-[1256px]:w-11/12 w-full flex min-[1256px]:flex-row flex-col justify-center items-center min-[1256px]:mx-auto gap-4'>
            <Resource
                title='Cagayan Valley Medical Center'
                height='min-[1256px]:h-64'
                rows={cagayan}
            />
            <Resource
                title='Amara Counseling and Training Center'
                height='min-[1256px]:h-64'
                rows={amara}
            />
        </div>
        {/* row */}
        <div className='mt-5 min-[1256px]:w-11/12 w-full flex min-[1256px]:flex-row flex-col justify-center items-center min-[1256px]:mx-auto gap-4'>
            <Resource
                title='Amang Rodriguez Memorial Medical Center (Psychiatry OPD Clinic)'
                url='https://armmc.doh.gov.ph/'
                height='min-[1256px]:h-64'
                rows={amang}
            />
            <Resource
                title='National Center for Mental Health'
                url='https://ncmh.gov.ph//'
                height='min-[1256px]:h-64'
                rows={National}
            />
        </div>
        {/* row */}
        <div className='mt-5 min-[1256px]:w-11/12 w-full flex min-[1256px]:flex-row flex-col justify-center items-center min-[1256px]:mx-auto gap-4'>
            <Resource
                title='JRT Psychiatric and Custodial Homecare'
                height='min-[1256px]:h-64'
                rows={JRT}
            />
            <Resource
                title='In Touch Philippines'
                url='https://www.in-touch.org/'
                height='min-[1256px]:h-64'
                rows={InTouch}
            />
        </div>

        {/* hotlines in Visayas */}
        <Title textSizeClass='sm:text-2xl text-lg' textAlign=''>Visayas</Title>
        {/* row */}
        <div className='min-[1256px]:w-11/12 w-full flex min-[1256px]:flex-row flex-col justify-center items-center min-[1256px]:mx-auto gap-4 pb-14'>
            <Resource
                title='Metro Psych (Mandaue Branch)'
                height='min-[1256px]:h-56'
                rows={Metro}
            />
            <Resource
                title='HOPELINE'
                url='https://sugbo.ph/2021/hopeline-cebu/'
                height='min-[1256px]:h-56'
                rows={HOPELINE}
            />
        </div>
    </Layout>
  )
}

export default Directory;