
import axios from 'axios';
import ReviewBox from './ReviewBox';
import NotFound from '../common/NotFound';

const Testimonials = async () => {
    const { data: { reviews } } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/review`);
    if (!reviews) {
        return (
            <NotFound title='No testimonials found' />
        )
    }
    const FilterReviews = reviews.filter((review: reviewType) => review.isAccepted === true)
    return (
        <>
            <section className="layout mlg:h-screen  flex max-mlg:flex-col  items-center mlg:justify-between py-14 mlg:py-20">
                <div className='mlg:w-2/5 max-mlg:mb-12'>
                    <h1 className='text-3xl xxs:text-4xl xs:text-5xl font-semibold text-white mb-3 sm:mb-6 max-mlg:text-center'>
                        Testimonials
                    </h1>
                    <h6 className='xxs:text-xl font-medium text-white opacity-85  max-mlg:text-center'>
                        The Voice of Trust and Satisfaction
                    </h6>
                </div>
                <ReviewBox data={FilterReviews} />
            </section>
        </>
    )
}
export default Testimonials
