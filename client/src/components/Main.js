import React from 'react';
import {Navbar, Nav} from 'reactstrap';
import Jumbo from './jumbotron';
import Forms from './Form';


function Main() {
  return (
    <div>  
        <Navbar sticky="top" dark expand="md">
        <Nav navbar className="mx-auto">
          <div className="d-flex">
          <svg className="brandName" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M794,959.4L71.3,769.5l196-722.8L990,236.6L794,959.4z M910.4,285.6L310.1,126.4l-116.4,441l594.1,159.3L910.4,285.6L910.4,285.6z M377.5,414.3l36.8,67.4l104.1-98l55.1,91.9L714.4,353l36.8,281.8L291.8,512.3L377.5,414.3z M402,346.9c-24.5-6.1-36.7-36.8-30.6-61.3c6.1-24.5,30.6-42.9,61.3-30.6c24.5,6.1,42.9,36.8,36.8,61.3C457.1,340.8,432.6,353,402,346.9z M689.9,120.3l-12.3,6.1L549,89.6l183.8-49l30.6,104.1l-73.5-18.4V120.3L689.9,120.3z M89.6,279.5l42.9,153.1L95.8,555.1L10,230.5l189.9-49L175.4,255L89.6,279.5L89.6,279.5z M206,953.3l-36.8-128.6L420.4,892L206,953.3z" stroke="red" strokeWidth="15" />
          </svg>
            <div className="col navbarbrand">
              Sparrow Shot</div>
              </div>
        </Nav>
    </Navbar>
    <Jumbo />
    <Forms />
    </div>
  );
}

export default Main;