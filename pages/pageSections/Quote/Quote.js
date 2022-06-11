import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import ContainerSmall from "../../../component/ContainerSmall/ContainerSmall";
import QuoteStyle from "../../../styles/Quote.module.css";

const Quote = () => {
  return (
    <ContainerSmall>
      <main className={QuoteStyle.quote_main}>
        <section className={QuoteStyle.quote_section}>
          <ImQuotesLeft />
          <h1>If I do not know it already, I will figure it out.</h1>
          <ImQuotesRight />
        </section>

        <cite>- Caleb</cite>
      </main>
    </ContainerSmall>
  );
};

export default Quote;
