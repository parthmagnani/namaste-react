import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Shimmer = () => {
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item, index) => (
                    <Skeleton key={index} height={300} width={285} />
                ))
            }
            
        </div>
    )
} 

export default Shimmer