import React from 'react';
import BasicsCard from './BasicsCard';
import whyhire from './whyhire.png'
import Banner from '../Banner/banner'

const questions = ["How can I get my employees to care more?",
					  	"How can I motivate my emplyees better",
					  	"How can we improve communication and efficiency across teams?",
						"How can we better track our prospects?"];

const morequestions=[
					  	"How can we streamline financial reporting?",
					  	"How can finance be more proactive about our cash position?",
					  	'How can we improve employee engagement?', 
					  	'What can we implement so HR can focus on the employees more?'];

	const listQuestions = questions.map((questions) =>
		<li className="lh-copy pv3">{questions}</li>
	);
	const listMoreQuestions = morequestions.map((morequestions) =>
		<li className="lh-copy pv3">{morequestions}</li>
	);



const TheBasicsPage = () =>(
<div className='pa4'>
	<div className=''>
		<div className='shadow-3' style={{height:'42rem'}}>
			<h1 className='f3 f1-m pb4 f-headline-l'> Why Hire a Fractional CFO?</h1>
			<div className='w-50 dib'>
				<img src={whyhire} className="f5 ph3" alt="Why hire a fractional CFO?"/>
			</div>
				<div className='w-50 dib v-top ph5 tc lh-copy'>
					<p>
						​Executive Pro Tem offers the best of both worlds ​— 
						high levels of experience and expertise without the risk. ​
						As a fractional business leader, I am invested in your success and close 
						enough to the action to provide guidance; but removed enough to avoid the company politics.

						I offer an outside perspective with the skills to diagnose the internal roadblocks. 
						 My extensive strategic planning experience ​as a facilitator and graduate level 
						 instructor ​gives you the critical thinking skills needed to make solid decisions.
					</p>
					<p>
						Hiring a fractional business leader is not the right decision for every company.
						 It’s both a financial investment and a time investment, but in the long run outsourced 
						 CFO and executive services cost less than hiring a full-time CFO. 
					 </p>
				 </div>
		</div>	

		<div className="cf w-100 flex-column">
		<h1> What services does a fractional CFO offer?</h1>
	  <BasicsCard />
	  
</div>		

	<div className='bg-light-blue w-100 pa6'>
			<div className=' flex f5'>
			<h1 className='f3 f1-m f-headline-l'>Clients most common concerns:</h1>
			<div className="w-100 pt5">
			  <ul className="list pl0 measure center">
			    {listQuestions}
			  </ul>
			  </div>
			  <div className="w-100 pt5">
			  <ul className="list  pl0 measure center">
			    {listMoreQuestions}
			  </ul>
			</div>
			<span className='dib'>If you find yourself asking these questions, its time for a consultation!</span>
			</div>
			</div>
			<Banner />
			
	</div>
	<div className='fl w-100 pa4'>
		<h1> Who Can Benefit From a Fractional CFO?</h1>
		<div className='ma4'>
			Any business that understands and agrees with those quotes.  
			It is a great burden to move a company forward, particularly if 
			the management practices and leadership spend all of the energy on today’s problems.  
			Getting some help and clarity with today’s problems allows you to lift your head and 
			focus on tomorrow.Ultimately, one main requirement is a desire to get better!
		</div>
		<div class="flex-column fl w-50 pa2 w-50">
		  <h1 class="mt0 pv3 measure center">If you..</h1>
		  <ul className="list pl0 measure center">
		    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 w-100-m b--dotted b--black-30">​
		    	Are open to advice to make your business better and understand that change 
		    	needs to start from the top.</li>
		    <li className="lh-copy pv3 ba bl-0 bt-0 br-0  w-100-m b--dotted b--black-30">
		    	Want clarity not just in your business and its operations, but also in terms 
		    	of work-life balance.</li>
		    <li className="lh-copy pv3 ba bl-0 bt-0 br-0  w-100-m b--dotted b--black-30">​
		    	Want employees accountable but not intimidated — you realize that systems of 
		    	accountability are crucial for the ultimate success of your business.</li>
		    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 w-100-m b--dotted b--black-30">
		    	Know the path to real success is through the growth of your employees and are 
		    	willing to invest in the people and areas where it will make the biggest difference.</li>
		  </ul>
		</div>
		<div className="flex-column fl w-50 pa2 w-50">
		  <h1 className="mt0 pv3">I can</h1>
		  <ul className="list pl0 measure center">
		    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">​
		    	 Help ​deliver management skills 
		    	and plan for the future.</li>
		    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
		    	Provide clarity with your personal and business goals — let's fix 
		    	today's gaps before pretending we're ready for tomorrow.</li>
		    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
		    	Help chnage the culture to deliver   
				tools to clarify accountability, roles and responsibilities across teams</li>
		    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
		    	Belief in the future of the company, recognition and investment are a 
		    	result of getting #1, 2, 3 right!</li>
		  </ul>
		</div>

	</div>

	<div>
		<h1> How I can Help you and your business</h1>
		<div className='ma4'>
			Addressing issues like these ​takes time, and may require significant changes. 
			Let’s get to the root cause of these issues by examining your business model, 
			culture and existing talent.   
			The business model ​is how ​a company goes about its work ​— what it sells, 
			its target customers and how it fulfills the customer’s needs in a competitive market.   
			All business models will become obsolete, so our first step is to understand whether 
			you are running the business with an old business model.

			Establishing a new culture and/or business model within a company, 
			one that is adapted and embraced by everyone involved, won't happen overnight 
			and there is likely be resistance along the way.  One advantage of bringing in 
			someone from the outside is that they can “bear the brunt” of the resistance, 
			relieving some of the pressure off the business owner.
		</div>
	</div>

</div>
	);



export default TheBasicsPage;