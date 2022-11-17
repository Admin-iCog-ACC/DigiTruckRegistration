import Register from '../components/Register';
import Footer from '../components/Footer';
import { RecoilRoot } from 'recoil';
import Nav from '../components/Nav';

function register(){
    return(
        <div className="bg-[#f6f9ff] font-raleway banner-bg-img">
        <RecoilRoot>
          <Nav />
        </RecoilRoot>
        <Register/>
        <Footer />
        </div>
    )
}



export default register