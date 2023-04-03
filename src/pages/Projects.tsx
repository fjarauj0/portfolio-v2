import { Helmet } from 'react-helmet-async';

const index = () => {
  return (
    <main>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Projects | Francisco Araujo</title>
      </Helmet>
      <h1 className='mt-16'>
        <span className='title mt-10'>Projects</span>
      </h1>
    </main>
  );
};

export default index;
