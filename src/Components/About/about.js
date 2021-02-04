import React from 'react';
import IndustriesCard from './industriesCard';
import IndustriesDiv from './industriesDiv';
import Form from '../Form/forms';
import dh from './dh.png'
import trustedadvisor from './trustedadvisor.png'

const experience = ["President & CEO, Frank Miller Lumber, Inc.",
					  	"Director of Consulting, Aileron",
					  	"CFO/General Manager, ShawnTech Communications, Inc.",
						"Associate Faculty, Post University Online MBA Program.",
					  	"Certified Facilitator, Drucker management Path",
					  	"Member & Facilitator, Chief Executive Boards International"];

	const listExperience = experience.map((experience) =>
		<li>{experience}</li>
	);


const AboutPage = () =>(
	


<div className='pa5 shadow-5 ba center' style={{maxWidth:'1400px'}}>

<img className='cover bg-left pt4 bg-center-l' src={trustedadvisor} style={{width: '100%' }}/>
<div className='container pt4 w-100 shadow-1 dib'>
	<div className='fl w-third dib'>
		<img src={dh}  className='measure' alt="Dan Hackett"/>
		</div>
			<div className='w-two-thirds dib'>
				<div className="pa1">
					  <h3 className="f2 tc">Dan Hackett, experienced executive and leader</h3>
					  <p className="">
					  Customer-centric Executive who delivers multi-million-dollar revenue 
					  growth through innovative business development, strategy execution, and financial 
					  management. Develops repeatable processes to drive bottom-line improvements and to 
					  ensure stability during periods of high growth or market decline. Collaborative and 
					  trusted leader who levers extensive experience in strategic business planning and 
					  consultative sales operations to inspire confidence with business leaders, 
					  family owners, and advisory boards. Instills vision for succession planning and 
					  talent management, developing the next generation of business leaders.
						</p>
						<p className="">
						Experience-wise, I have facilitated over 100 strategic planning sessions and have taught and 
						implemented professional management systems at dozens of companies, from marketing services to 
						construction to manufacturing. Because of my vast experience, the principles I teach can be applied 
						to companies in any industry.
						</p>
					</div>
				</div>
			

		</div>

		
		
		<div>
		<h1 className='tc'>Industries I Have Worked With:</h1>
		<IndustriesCard />
		</div>

		<div className='container flex pb6 pt6'>
			<div className='w-50 tc dib v-top'>
				<p>
				How would you describe tour leadership style>
				</p>
				<p>
				I am a collaborato who focuses on a team apporach to tackle the underlying issues. 
				My style stems from my desire to teach and help others tackle issues. 
				I encourage people to take on additional responsibilites while supporting them, 
				enabling them to grow and succeed personally & professionally.
				</p>
				<p>
				How do you get people to perform at high levels?
				</p>
				<p>
					I provide the opportunity for business owners to work with their 
					team to take on additional accountability and prove themselves.
					People perform at superior levels when leadership creates a vision 
					and encourages them to work toward it. i allow for failures along the way 
					as it builds trust and energy to achieve the vision.
				</p>
				<p>
				How do you turn a challenge into an opportunity?
				</p>
				<p>
				All challenges are opportunities, just as a customer saying 'no' really means
				'not yet'. Challenges often suffer from poor definition; the issue on the surface 
				is rarely the real problem. Challenges become opportunities through a colloborative 
				effor to better define the problem and create the solution in line with the vision of the organization.
				</p>
				<p>
				What distinct advantage do you bring to your clients?
				</p>
				<p>
				My competitive advantage is my leadership, finance & strategy, consulting and executive experience. 
				the vastness of my experience combined with a colloborative apporach forms the foundation for growth and 
				operational excellence. A deep understanding of professional management and the proven ability to create a 
				solid manangement team promotes a sustainable organtixation and increased value.
				</p>
			</div>
				<div className='w-50 tc dib'>
					<div className="pa0 v-top">
						  <h3 className="f2 pa0 ma0">PROFESSIONAL HIGHLIGHTS</h3>
						  <ul className="tc lh-copy list">
						  	{listExperience}
						  </ul>
						  <h3 className="f2">STRONG BACKGROUND IN FINANCE</h3>
						  <ul className=" tc list lh-copy">
						  	<li>Member, Ohio Society of CPA's</li>
						  	<li>Masters in Accounting, Miami University, Oxford, OH</li>
						  	<li>BS Accounting, Miami University, Oxford, OH</li>
						  </ul>
						</div>
			</div>
		</div>
		

		<div className= "container dib pt4 shadow-1">
		<p>
		The relationship with you, the business owner, is a critical component of my approach​.
						As a trusted advisor, I will be there for you as a sounding board — not just while I am on-site, 
						but also for on-going support throughout the process. I have a proven history of building 
						relationships with the clients I have worked with.</p>


		<Form />
		</div>

</div>

	);



export default AboutPage;