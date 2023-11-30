
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className=''>
            <div className='flex flex-col z-40 justify-center items-center min-h-screen bg-opacity-0'>
                <div className='p-9 py-12 bg-white rounded-full' >
                    <img src="https://i.ibb.co/sVwMWV2/stitch-sad-sad-stitch.gif" alt="" className='' />
                </div>
                <h1 className='text-center text-2xl font-bold mb-10'>
                    Error!!
                </h1>
                <p className='text-center '>{error.statusText || error.message}</p>
                {
                    error.status === 404 && <div>
                        <h3 className='mb-10'>404 Page not found</h3>
                    </div>
                }
                <Link to={'/'}> <p className='btn'>Go Back to Home</p></Link>
            </div>
        </div>
    );
};

export default ErrorPage;