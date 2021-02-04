import React from 'react';
import Tachyons from 'tachyons/css/tachyons.min.css';
import './timeline.css';
import BasicsCard from './../TheBasics/BasicsCard';
import benefits from './benefits.png'
import './timeline.css';
import CustomButton from './../CustomButton/custom-button';

const ServicesPage = () =>{
  return(

<div className='pa6 mw9'>
	<div className='db'>
	<header className="w-100 w-50-l pa3-m pa4-l">
  <h1> How it works</h1>
  </header>
      <section className="w-100 shadow-4 timeline bg-light-blue">
        <div className="w-50 w-50-m pa3-m pa4-l time-container left">
        <div className='content tc shadow-4 grow pa2'>
        <h1>Step 1</h1>
        <h3>Introductory Call</h3>
          <p className="f6 lh-copy tc">
            During a preliminary consultation, 
            We'll explore your goals and discuss the issues your business is facing. 
            Next, we will schedule additional detailed sessions to learn more about you, your business,
            the issues and solutions.   
            This starts with us putting together an outsourced CFO engagement contract
            that outlines the objectives. Expect Step 1 to last about 3 weeks.
          </p>
          </div>
        </div>
       <div className="w-50 w-50-m pa3-m pa4-l time-container right">
        <div className='content tc shadow-4 grow pa2'>
          <h1>Step 2</h1>
          <h3>Strategic Planning Session & Implementation</h3>
          <p className="f6 lh-copy tc">
           Goals of the Strategic Planning Session: Define the reality of the business situation, 
           clarify the vision of the business, identify the gaps, create the solutions and implement a plan.
           Be ready to discuss the business model, financial status of the company, 
           hiring practices, sales forecasts and operational metrics. 
          </p>
        </div>
        </div>
        <div className="w-50 w-50-m pa3-m pa4-l time-container left">
        <div className='content tc shadow-4 grow pa2'>
        <h1>Step 3</h1>
        <h3>Follow-up </h3>
          <p className="f6 lh-copy tc">
            A few weeks after the implementation we will meet again to discuss what went right, 
            wrong and what if anything needs to be re-visited. Businesses are rapidly changing and quickly
            pivoting strategic intiaitives are necessary to right the ship. 
          </p>
          </div>
        </div>
        <div className="w-50 w-50-m pa3-m pa4-l time-container right">
        <div className='content tc shadow-4 grow pa2'>
        <h1>Step 4</h1>
        <h3>See Results</h3>
          <p className="f6 lh-copy tc">
            Seeing results is the most important step! After the steps, 
            the team should: see the blueprint to success, have a better understanding 
            how to support the growth, know how to target the 'right' customer, be more 
            fficient at planning, know the strategic vision of the business.
          </p>
          </div>
        </div>
        </section>
    	</div>

      <div className='center dib'>
    <BasicsCard />
    </div>
  <img src={benefits} alt='Create Value' />
<div className='w-100'>

  <div className='dib'>
		<h1 className='tc'> Outsourced CFO Costs & Benefits</h1>

    <div className="container flex flex-row ">
      <div className="fl w-100 shadow-4 pa2 tc ">
        <div className="panel-header">
          <h1>One-Time Strategic Planning Session</h1>
        </div>
        <div className="panel-body">
          <p><strong>Define the reality</strong></p>
          <p><strong>Clarify the company vision</strong></p>
          <p><strong>Identify the gaps</strong></p>
          <p><strong>Create a plan</strong></p>
        </div>
        <div className="panel-footer">
          <h3>$49</h3>
          <h4>per month</h4>
           <CustomButton />
        </div>
      </div>  
      <div className="fl w-100 shadow-4 pa2 tc">
        <div className="panel-header">
          <h1>Short-Term Fractional CFO</h1>
        </div>
        <div className="panel-body">
          <p><strong>Increase Company Value</strong></p>
          <p><strong>Align Sales Compensation to Company Plan</strong></p>
          <p><strong>Manage Finance, HR, Operations Teams</strong></p>
                <p><strong>+ More</strong></p>
        </div>
        <div className="panel-footer">
          <h3>$49</h3>
          <h4>per month</h4>
           <CustomButton />
        </div>
      </div> 
      <div className="fl w-100 shadow-4 pa2 tc">
        <div className="panel-header">
          <h1>Long-Term Fractional CFO</h1>
        </div>
        <div className="panel-body">
          <p><strong>Timely, data-driven financial statements</strong></p>
          <p><strong>Process Overhaul/Improvement</strong> </p>
          <p><strong>Benefits expenses, Investments, Marketing ROI</strong></p>
          <p><strong>+ More</strong></p>

        </div>
        <div className="panel-footer">
          <h3>$49</h3>
          <h4>per month</h4>
          <CustomButton />
        </div>
      </div>     
    </div>
	</div>
  </div>





</div>

	);
}



export default ServicesPage;