import { Accordion } from "flowbite-react";








export function FaqsAccordion() {
  return (
    <Accordion collapseAll className="w-full">
    <Accordion.Panel>
        <Accordion.Title>Can you handle data projects for any industry or specific niche?</Accordion.Title>
        <Accordion.Content>
            <p className="mb-2">
                Yes, I specialize in providing data solutions across a range of industries, from helping students with academic projects to supporting business owners in visualizing their sales trends. No matter the scale or scope, I tailor my data analysis services to meet your unique needs.
            </p>
        </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
        <Accordion.Title> I have a data project for school, but I don’t know where to start. Can you help?</Accordion.Title>
        <Accordion.Content>
            <p className="mb-2">
                Absolutely! Whether you're struggling with understanding data concepts or need help with a specific project, I provide tutoring and project support to guide you through your analysis. From understanding your data set to helping you with tools like Excel, SQL, R, Power BI, or Python, we’ll work together to ensure you complete your project successfully and with confidence.
            </p>
        </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
        <Accordion.Title>I work full-time and have a hectic schedule. Can your 12-week course fit into my busy life?</Accordion.Title>
        <Accordion.Content>
            <p className="mb-2">
                Yes! My data analytics course is flexible and designed for people with full-time jobs, parenting responsibilities, or other commitments. We offer live sessions that can be tailored to fit your schedule, and I provide one-on-one support throughout the program. You’ll get the skills you need to excel in data without having to compromise on your personal or professional responsibilities.
            </p>
        </Accordion.Content>
    </Accordion.Panel>
    </Accordion>
  );
}
