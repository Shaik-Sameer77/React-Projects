import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function AccordionFAQ({ faqData }) {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <>
      {faqData.map((faqItem) => (
        <Accordion key={faqItem.id}
        expanded={expanded === faqItem.id}
        onChange={handleChange(faqItem.id)}
        className="summary">
          <AccordionSummary
             expandIcon={expanded === faqItem.id ? <RemoveIcon /> : <AddIcon />}
             aria-controls={faqItem.id}
             id={faqItem.id}
             className="accordion-header"
          >
            <Typography className="title">{faqItem.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-content">
            <Typography className="content">{faqItem.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
