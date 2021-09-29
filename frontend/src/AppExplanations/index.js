import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ReactMarkdown from "react-markdown";
import "./index.css";

export default function AppExplanations() {
  const [expandedItems, setexpandedItems] = useState([]);

  // In case the user expands a node that is barely visible, we scroll the page to display it fully
  function handleExpand(update) {
    if (update.length > expandedItems.length) {
      const newExpandedItemUUID = update[update.length - 1];
      const itemButtonBottom = document
        .getElementById(`accordion__panel-${newExpandedItemUUID}`)
        .getBoundingClientRect().bottom;
      if (itemButtonBottom > window.innerHeight) {
        window.scrollBy(0, itemButtonBottom - window.innerHeight);
      }
    }
    setexpandedItems(update);
  }

  const whatIsAFaucet_help =
    // eslint-disable-next-line
    "A `Faucet` is a tool that provides a small amount of funds to start using a dapp without having to buy cryptocurrency. \n\
    This faucet provides just enough MATIC to allow users to post on [dchan.network](https://dchan.network).";


  const howMuchCanIGet_help =
    // eslint-disable-next-line
    "Plenty enough!  \n\
    Transactions on Polygon network are dirt cheap. We're talking about fractions of a cent for most transactions.  \n\
    So this faucet will only send you `0.001 MATIC` - enough to send a couple posts on [dchan.network](https://dchan.network). \n\
    Feel free to send some spare change at `0xa3b832e52bc12df5a5eeb885370bc9b54d19bc1a` to replenish the faucet once you made it. 😀";

  const howToEarnMoreMatic_help =
    "* First bring your assets from Ethereum to Polygon through [the bridge](https://wallet.matic.network/bridge/)  \n\
    Then there's a variety of things you can do:  \n\
    * Swapping assets on [QuickSwap](https://quickswap.exchange/) or [ComethSwap](https://swap.cometh.io/#/swap), the equivalents of `Uniswap` on Polygon  \n\
    [Paraswap](https://paraswap.io/#/?network=polygon) is also available and will route your swaps through the cheapest path.  \n\
    * Depositing your assets on [Aave](https://app.aave.com/dashboard) or [Curve](https://polygon.curve.fi/) to farm some fresh MATIC  \n\
    * Now you'll get free MATIC to shitpost as much as you want, without having to buy them ever again! \n\
    ";

  return (
    <Accordion allowZeroExpanded allowMultipleExpanded onChange={handleExpand}>
       <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>What is a Faucet ?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <ReactMarkdown
            className="Explanations"
            children={whatIsAFaucet_help}
          ></ReactMarkdown>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>How much can I get ?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <ReactMarkdown
            className="Explanations"
            children={howMuchCanIGet_help}
          ></ReactMarkdown>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            How to earn (much) more MATIC ?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <ReactMarkdown
            className="Explanations"
            children={howToEarnMoreMatic_help}
          ></ReactMarkdown>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}