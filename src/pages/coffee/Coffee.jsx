import { useLocation } from 'react-router-dom';
import "./Coffee.css";
import CoffeeIcon from '@mui/icons-material/LocalCafe';

const Coffee = () => {
  const location = useLocation();

  // Check if the current pathname contains '/about'
  const isAboutPage = location.pathname.includes('/about');

  return (
    <div className="coffee">
      {isAboutPage ? (
        // Render content for the '/about' page
        <div className='about'>
          <h2>About Me</h2>
<div>Hello there! I am <span>Komal</span>, a budding software developer with a passion for coding and problem-solving.
 As someone who is relatively new to the world of programming, every day brings exciting challenges and
  opportunities for growth. I recently embarked on my journey into the realm of software development,
   driven by a curiosity to explore the endless possibilities of technology.
<h2>Creating the Stock Calculator App</h2>
One of my early projects in this exciting journey was developing a stock calculator app. Inspired by my
 interest in financial markets and investment strategies, I set out to create a tool that would help users 
  and plan their stock investments more effectively. Through hours of learning, coding, and debugging, I 
  transformed my ideas into a functional application that provides valuable insights and calculations for
   stock traders and investors.I tried my best to give accurate information but it may slightly vary.
<h2>Get in Touch</h2>
If you would like to connect, collaborate, or simply chat about technology, programming,
 or anything else under the sun, feel free to reach out. I'm always eager to learn from others
  and share insights from my own journey in the fascinating world of software development.</div>
</div>
      ) : (
        // Render default content
        <div>
          <CoffeeIcon />
          <div className="text">
            "Hello! If you have found my work helpful or valuable,
            would you consider buying me a coffee? Your support goes a long way in helping me 
            continue to create content and provide assistance.
            It is a small gesture that makes a big difference. Thank you for considering it!"
          </div>
          <p>komal:phone no</p>
          <CoffeeIcon />
        </div>
      )}
    </div>
  );
};

export default Coffee;
