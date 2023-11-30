import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Heading from '../../components/shared/TextStyles/Heading';
import { Container } from '@mui/material';

export default function Faq() {
    return (
        <div>
            <div className='min-h-[500px] flex flex-col items-center justify-center my-10'>
                <Container>
                    <Heading title="Frequently Asked Questions"></Heading>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">How do I search for properties on Home Hive?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To search for properties on Home Hive, go to the All Properties page and use the search bar.
                                You can enter keywords, location, or other criteria to find the properties you are interested in.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography variant="h6">How can I contact a real estate agent on Home Hive?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To contact a real estate agent on Home Hive, navigate to the property listing you are interested in.
                                You will find the contact information of the listing agent there. Feel free to reach out to them via phone or email.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography variant="h6">How do I create an account on Home Hive?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To create an account on Home Hive, click on the Sign Up button at the top of the page.
                                Fill in the required information and follow the instructions to complete the registration process.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant="h6">Can I save my favorite properties on Home Hive?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, you can save your favorite properties on Home Hive. Simply log in to your account,
                                navigate to the property listing, and click the Save button to add it to your favorites.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <Typography variant="h6">How do I list my property for sale on Home Hive?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To list your property for sale on Home Hive, log in to your account and click on the "List Property" button.
                                Follow the prompts to provide details about your property and complete the listing process.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>

            </div>
        </div>
    );
}
