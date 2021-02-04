import React from 'react';
import CustomButton from './../CustomButton/custom-button';

const ContactForm = () => (

<div>

		<form className="flex dib pa4 black-80">
		  <div className="measure">
		    <label for="first-name" className="f6 b db mb2">First Name<span className="normal black-60"></span></label>
		    <input id="first-name" className="input-reset ba b--black-20 pa2 mb2 db w-100" 
		    		type="text" aria-describedby="first-name-desc"/>
		    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
		    <label for="last-name" className="f6 b db mb2">Last Name<span className="normal black-60">(optional)</span></label>
		    <input id="last-name" className="input-reset ba b--black-20 pa2 mb2 db w-100" 
		    		type="text" aria-describedby="last-name-desc"/>
		    <label for="email" className="f6 b db mb2">Email Address<span className="normal black-60"></span></label>
		    <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" 
		    		type="email" aria-describedby="last-name-desc"/>
		     <label for="company" className="f6 b db mb2">Company<span className="normal black-60">(optional)</span></label>
		    <input id="company" className="input-reset ba b--black-20 pa2 mb2 db w-100" 
		    		type="text" aria-describedby="last-name-desc"/> 
		    <CustomButton />

		  </div>
	 		
		</form>
</div>

)





export default ContactForm;