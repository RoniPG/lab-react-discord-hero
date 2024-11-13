import './App.css'
import Button from './components/Button';
import Image from './components/Image';
import Navbar from './components/Navbar';
import Paragraph from './components/Paragraph';
import Title from './components/Title';
function App () {
  return (
    <>
    <Navbar></Navbar>
    <Title></Title>
    <Paragraph></Paragraph>
    <Button text="Download for Mac" style='white'></Button>
    <Button text="Open Discord in your browser" style='black'></Button>
    <Image src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png' alt='discord-background'></Image>
    </>
  );
}

export default App;

// **Headings** - *Poppins - Black 900*
// **Paragraphs & Text** - *Roboto - Regular 400, Regular 500*