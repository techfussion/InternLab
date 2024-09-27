import React from 'react';
import Button from '../components/Button';

const Footer: React.FC = () => {
    return (
        <footer className='bg-customBlack1 pt-10 px-16 text-white'>
            <div className='flex gap-16 pb-16 justify-between'>
                <div className='w-max'>
                    <h4 className='text-sm mb-4'>internlab</h4>
                    <p className='text-xs font-extralight w-3/5 opacity-70'>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                </div>
                <div className='flex gap-16'>
                    <div>
                        <h4 className='text-sm mb-4'>About</h4>
                        <ul className='text-xs font-extralight leading-loose opacity-70'>
                            <li><a className='hover:text-textBlue2' href='#'>Companies</a></li>
                            <li><a className='hover:text-textBlue2' href='#'>Terms</a></li>
                            <li><a className='hover:text-textBlue2' href='#'>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-sm mb-4'>Resources</h4>
                        <ul className='text-xs font-extralight leading-loose opacity-70'>
                            <li><a className='hover:text-textBlue2' href='#'>Help Docs</a></li>
                            <li><a className='hover:text-textBlue2' href='#'>Guide</a></li>
                            <li><a className='hover:text-textBlue2' href='#'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 className='text-sm mb-4'>Get placement notifications</h4>
                    <p className='text-xs font-extralight opacity-70'>The latest job news, articles, sent to your inbox weekly.</p>
                    <form className='flex mt-5 gap-2'>
                        <input className='px-3 py-1 outline-0 text-black text-xs text-textDarkBlue1' type='email' placeholder='you@email.com' />
                        <Button type='submit' text='Subscribe'/>
                    </form>
                </div>
            </div>
            <hr className='border-t opacity-40'/>
            <div className='py-5'>
                <p className='text-xs font-extralight opacity-50'>&copy; internlab. All rights reserved.</p>
                <div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;