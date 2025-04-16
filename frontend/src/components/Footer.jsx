import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-gradient-to-b from-black via-gray-900 to-black text-white py-8 px-4 md:px-12'>
			<div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12'>
				<div className='text-center md:text-left'>
					<h2 className='text-2xl font-bold text-red-500'>CineVerse</h2>
					<p className='text-sm text-gray-400 mt-2'>
						Unlimited movies, TV shows, and more. Watch anywhere, anytime.
					</p>
				</div>

				<div className='flex space-x-6'>
					<a
						href='https://facebook.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-400 hover:text-red-500 transition duration-300'
					>
						<FaFacebookF size={20} />
					</a>
					<a
						href='https://twitter.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-400 hover:text-red-500 transition duration-300'
					>
						<FaTwitter size={20} />
					</a>
					<a
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-400 hover:text-red-500 transition duration-300'
					>
						<FaInstagram size={20} />
					</a>
					<a
						href='https://youtube.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-400 hover:text-red-500 transition duration-300'
					>
						<FaYoutube size={20} />
					</a>
				</div>
			</div>

			<div className='border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4'>
				<p className='text-sm text-gray-500'>
					© {new Date().getFullYear()} CineVerse. All Rights Reserved.
				</p>
				<p className='text-sm text-gray-500'>
					Built by{" "}
					<a
						href='https://github.com/shashankdudhane'
						target='_blank'
						rel='noopener noreferrer'
						className='underline underline-offset-4 hover:text-red-500'
					>
					 Rutuja 
					</a>
					.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
