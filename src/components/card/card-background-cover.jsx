import { images } from '@/utils/constant';

const CardBackgroundCover = () => {
	return (
		<div className='relative  flex items-center justify-start bg-[#00549B]'>
			<div className='absolute inset-0 login-bg-cover' />
			<div className='mx-20 flex w-full flex-col gap-y-7'>
				<img src='/brand.svg' alt={images[0].alt} srcSet={images[0].srcset} className='h-[134px] w-[113px]' />
				<div>
					<h4 className='line text-3xl font-bold leading-login-125 text-white'>Human Resource Integrated System</h4>
					<p className='w-[430px] text-xl font-normal leading-login-125 text-white '>Empowering People, Streamlining Processes: Your HRIS Solution</p>
				</div>
			</div>
		</div>
	);
};

export default CardBackgroundCover;
