import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { Link } from 'react-router-dom'

const Tech = () => {
  return (
    <div className=' flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className=' w-28 h-28 ' key={technology.name}>
           {/* give links to docs */}
           <Link to={technology.link} target='_blank'>
            <BallCanvas icon={technology.icon} />           
           </Link>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,'');