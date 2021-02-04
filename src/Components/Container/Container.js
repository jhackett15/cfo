import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Tachyons from 'tachyons/css/tachyons.min.css';
import ServiceContainer from '../Services/ServiceContainer';
import bridge from './bridge.png'
import strategy from './strategy.png'
import Slider from '../Carousel/Carousel'
import Banner from '../Banner/banner'



const Container = () => {
    return (
<div className='pt6 pa4-m container'>
<div className='hero cover bg-left center' style={{
  backgroundImage:`url(${strategy}`,
  height:'500px',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'}}>
    </div>
    
<Banner />

<article className="article-full-bleed-background">
  <div className="cf" style={{background: `url(https://www.minddoodle.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/11/Mind-Mapping-Brainstorm-scaled.jpg.webp)`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment:"fixed", backgroundSize: "cover"}}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">What is a Fractional CFO?</h3>
      </header>
      <section className="pt5 pb4">
        <p className="times lh-copy measure f4 mt0">
          How do you know whether you need to hire someone on a fractional 
          basis? More importantly, how do you find the right person who is going to help you reach 
          your business goals? Hiring a C-Level or Executive Level professional on a fractional basis 
          is a growing trend in today's ​business landscape. It's about becoming part of the team 
          provide solutions that both improve their current situation and ​prepare them for future trends in the marketplace.  
           With fractional leadership, you get the benefit of someone with extensive experience and expertise, 
           without the costs associated with hiring a full-time employee.
        </p>
      </section>
    </div>
  </div>
</article>

  <section className='db'>
  <div className="bg-white flex pa3">
    <h2>SERVICES</h2>
      <h4>What I offer:</h4>
    <div className='flex center bg-white'>
       <ServiceContainer />
    </div>
  </div>
  </section>

<div className="cf pa6 flex bg-dark-blue">
  <div className="fl w-100 w-50-m w-25-l bg-black-10 tc pv4 h5">Strategic Planning and Execution</div>
  <div className="fl w-100 w-50-m w-25-l bg-black-05 tc pv4 h5">Revenue and Profit Growth</div>
  <div className="fl w-100 w-50-m w-25-l bg-black-20 tc pv4 h5">​Market and Customer Expansion </div>
  <div className="fl w-100 w-50-m w-25-l bg-black-30 tc pv4 h5">​​Board Relations and Governance</div>
</div>

<Slider />

</div>


    );
}

export default Container;
