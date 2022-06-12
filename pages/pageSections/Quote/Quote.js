import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import ContainerSmall from "../../../component/Container/Container";
import QuoteStyle from "../../../styles/Quote.module.css";

const Quote = () => {
  return (
    <ContainerSmall>
      <main className={QuoteStyle.quote_main}>
        <section className={QuoteStyle.quote_section}>
          <ImQuotesLeft />
          <blockquote>If I do not know it already, I will figure it out.</blockquote>
          <ImQuotesRight />
        </section>

        <cite>- Caleb</cite>
      </main>
    </ContainerSmall>
  );
};

export default Quote;
