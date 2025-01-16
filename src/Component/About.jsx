import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
      <Link to="/about/newChild">Go to New Child</Link>
    </div>
  );
};

export default About;