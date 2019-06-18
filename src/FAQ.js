import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

 class FAQ extends Component{

    render(){
        return (
            <Accordion className="acordian">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Questions 1 - When can you place orders?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>24/7 but online online for collection / delivery before 10am must be ordered before 4pm the day before the delivery or colection.</p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 2 - Where do we deliver to?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Within 15 miles of Selby.</p>    
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 3 -  What bread do we use?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>White, Brown, Garnary, Toasty.</p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 4 -  What coffee beans do we use?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Black Ivory Coffee.</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        )
    }
 }


export default connect()(FAQ)