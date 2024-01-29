import React from "react";
import "../styles/faq.scss";
import AccordionFAQ from "./Accordion.jsx";

const FAQ = () => {
  const faqData = [
    {
      id: "collapse1",
      title: "How to contact with riders emergency?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    },
    {
      id: "collapse2",
      title: "App installation failed, how to update system information?",
      content:
        "You can issue either partial or full refunds. There are no fees to refund a charge, but the fees from the original charge are not returned.",
    },
    {
      id: "collapse3",
      title: "Website reponse taking time, how to improve?",
      content:
        "Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.",
    },
    {
      id: "collapse4",
      title: "New update fixed all bug and issues",
      content:
        "There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.",
    },
    {
      id: "collapse5",
      title: "How to contact with riders emergency?",
      content:
        "There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.",
    },
  ];
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row heading">
          <div className="info">
            <h6>Frequently asked questions</h6>
            <p>
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </p>
          </div>
        </div>
        <div className="row faq-section">
          <div className="faqs">
            <div className="accordion" id="accordionExample">
              <AccordionFAQ faqData={faqData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
