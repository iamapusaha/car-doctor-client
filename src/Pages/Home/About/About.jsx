import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 py-7">
            <div className="hero-content flex-col lg:flex-row gap-32 lg:gap-2">
                <div className="w-full lg:w-1/2 relative">
                    <img src={person} className="w-full lg:w-3/4 h-[500px] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-3/4 lg:w-1/2 h-80 absolute top-1/2 right-0 lg:right-12 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className="w-full lg:w-1/2 space-y-8">
                    <h3 className='text-xl font-bold text-orange-600'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;