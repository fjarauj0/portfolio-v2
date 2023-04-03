import { Helmet } from 'react-helmet-async';
import profilePicture from '../assets/images/pofilePicture.jpg';

const index = () => {
  return (
    <main>
      <Helmet>
        <meta charSet='utf-8' />
        <title>About | Francisco Araujo</title>
      </Helmet>
      <h1 className='mt-16 text-3xl font-semibold'>
        About <br />
        <span className='title mt-5'>Francisco Araujo</span>
      </h1>
      <div className='mt-10 text-[#ebecf0]'>
        <figure className='sm:float-right sm:ml-8 mb-8'>
          <img
            src={profilePicture}
            alt=''
            className='rounded-lg mx-auto w-full max-w-[300px] h-auto'
          />
        </figure>

        <article>
          <p className='mb-4'>
            I am a frontend developer with 2 years of experience in web
            application development. I specialize in using modern tools and
            technologies such as React JS, TypeScript, and Tailwind CSS.
          </p>
          <p className='mb-4'>
            My experience in React JS and TypeScript has allowed me to create
            robust and scalable web applications. Additionally, my skill in
            Tailwind CSS has enabled me to design websites with an attractive
            and consistent appearance.
          </p>
          <p className='mb-4'>
            I am passionate about programming and always seeking to improve my
            skills and knowledge to provide the best possible solution. I am
            ready to work in a team environment, collaborate, and contribute
            significantly to the success of the company.
          </p>
        </article>
      </div>
      {/* <iframe
        src='https://live-term-691u45x17-fjarauj0.vercel.app/'
        frameborder='0'
        className='w-full h-[540px]'
      ></iframe> */}
    </main>
  );
};

export default index;
