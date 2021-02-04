import React from 'react'

class ToggleClass extends React.Component {
  state = {
    contacts: [
      {
    id:1,
    title:"Marketing Firms",
    desc:"Focus on creating and implementing strategy that resulted in narrowing of target customers and increase in revenues. Following strategy implementation, worked with owners to define and implement system of accountability and  created advisory board to help the owners continue the growth path."
  },
  {
    id:2,
    title:"Construction Services",
    desc:"Focus on creating and implementing a plan to focus on right customers; pricing matrix based upon potential customer fit; worked with owner on internal messaging to gain acceptance of chosen path.  Following these services, created and served on advisory board to continue growth trajectory, provide financial overview and work through multi-generational issues."
  },
  {
    id:3,
    title:"Manufacturing Companies",
    desc:"​Inside-out approach to bring accountability to the sales function; align sales compensation with desired behavior; create operations process to complement sales approach; guided implementation of ERP system."
},
  {
    id:4,
    title:"Teaching/Educational Fields",
    desc:"Delivered content regarding board formation and best practices  (for profit and nonprofit), professional management systems, Drucker Management Path. Currently  an adjunct professor to MBA program on business strategy, competitive intelligence and financial tools in innovation."
},
  {
    id:5,
    title:"Technology Companies",
    desc:"Delivered content regarding board formation and best practices  (for profit and nonprofit), professional management systems, Drucker Management Path. Currently  an adjunct professor to MBA program on business strategy, competitive intelligence and financial tools in innovation."
},
  {
    id:6,
    title:"E-Commerce",
    desc:"Delivered content regarding board formation and best practices  (for profit and nonprofit), professional management systems, Drucker Management Path. Currently  an adjunct professor to MBA program on business strategy, competitive intelligence and financial tools in innovation."
}
    ],
    activeLink: false
  };

  handleClick = id => {
    if (!this.state.activeLink ) {
      // attach/remove event handler
      document.addEventListener('click', this.handleClick, false);
    } else {
      document.removeEventListener('click', this.handleClick, false);
    }

    this.setState({ activeLink: id });
  };

  render() {
    const { contacts, activeLink } = this.state;

    return (
      <div>
        {contacts.map(contacts => {
          return (
            <div key={contacts.id}>
              <div 
              className="f5 f4-ns mb0 black-90">{contacts.title}
                <button onClick={() => this.handleClick(contacts.id)}>+</button>
                </div>

                <div className={ "f6 f5 fw4 mt2 black-60" +
                    (contacts.id === activeLink ? " dib" : " dn")}>
                  {contacts.desc} {contacts.id === activeLink && " "}
                </div>
              </div>
          );
        })}
      </div>
    );
  }
}

export default ToggleClass;
