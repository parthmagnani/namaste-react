import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Shimmer = () => {
    return(
        <div className='skeleton'>
            {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item, index) => (
                    <Skeleton key={index} height={300} width={285} />
                ))
            }
            
        </div>
    )
} 

export default Shimmer