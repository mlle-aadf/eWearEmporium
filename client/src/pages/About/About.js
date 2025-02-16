import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TopButton from "../../components/TopButton";

import styled from "styled-components";

//This page gives a brief explanation about our brand.
//It also includes an FAQ section as well as a TOS section.
const About = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  const [subEmail, setSubEmail] = useState("");
  const [isSubbed, setIsSubbed] = useState(false);

  const userSubEmail = (event) => {
    setSubEmail(event.target.value);
  };

  const noInput = !subEmail;

  return (
    <>
      <NavBar />

      <div style={{height: "12vh"}}></div>

      <Tagline>Empower Your Everyday with Wearable Technology</Tagline>

      <Section id="about">
        <SectionTitle>About Us</SectionTitle>
        <p>
          Founded in Montreal, Quebec in 1978, at <b>E-Wear Emporium</b>, our
          brand was built on authenticity in order to provide the best possible
          service to our clients. We specialize in the sale of athletic
          sportswear for any gender and age group. We pride ourselves in our
          professionalism and courtesy to assist our customers so that they can
          benefit from nothing but the best service available.
        </p>
        <br />
        <p>
          The purpose of E-Wear Emporium is to deliver products that improve the
          lives of our customer, because a healthy body is a happy mind.
        </p>
        <br />
        <p>
          You can trust us to deliver your favorite items, right at your
          doorstep at the press of a button. Thanks to quick shipping and a
          reliable customer service, shopping has never been made easier.
        </p>
      </Section>

      <Section id="faq">
        <SectionTitle>FAQs - Frequently Asked Questions</SectionTitle>
        <Question>Q: What is E-Wear Emporium's return policy?</Question>
        <Answer>
          A: You will have up to 30 days to return elligible products.
        </Answer>
        <Question>Q: How can I return my order?</Question>
        <Answer>
          A: Your item must be in original condition (tags attached, unworn,
          unwashed, unopened) and within 30 calendar days of purchase. Please
          check the bottom of your receipt for more details about our In-Store
          Return Policy.
        </Answer>
        <Question>
          Q: How can I get in touch with you if I have a question?
        </Question>
        <Answer>
          A: Please click the "Contact" button. It will redirect you to a
          specific page where you may get more information on how to reach us.
        </Answer>
        <Question>
          Q: How can I subscribe to get all the latest news and promotional
          deals from E-Wear Emporium?
        </Question>
        <Answer>A: Simply enter your email address below!</Answer>
        {!isSubbed ? (
          <div className="sub-form">
            <label>
              <input
                type="text"
                placeholder="Your email address"
                className="sub-email"
                onChange={userSubEmail}
              />
            </label>
            <button
              type="submit"
              className="sub-btn"
              disabled={noInput}
              onClick={() => setIsSubbed(true)}
            >
              Subscribe
            </button>
          </div>
        ) : (
          <>
            <br />
            <ConfirmationMsg>
              Thank you for subscribing! You will receive an email confirmation
              to {subEmail}.
            </ConfirmationMsg>
          </>
        )}
      </Section>

      <Section id="terms">
        <SectionTitle>Terms of Service</SectionTitle>
        <TermsText>
          <p>
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users, and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access the Service.
          </p>
          <Subtitle>1. Accounts</Subtitle>
          <p>
            1.1. When you create an account with us, you must provide accurate,
            complete, and up-to-date information. Failure to do so constitutes a
            breach of the Terms, which may result in immediate termination of
            your account on our Service.
          </p>
          <p>
            1.2. You are responsible for safeguarding the password that you use
            to access the Service and for any activities or actions under your
            password, whether your password is with our Service or a third-party
            service.
          </p>
          <p>
            1.3. You agree not to disclose your password to any third party. You
            must notify us immediately upon becoming aware of any breach of
            security or unauthorized use of your account.
          </p>
          <Subtitle>2. Purchases</Subtitle>
          <p>
            2.1. If you wish to purchase any product, you may be asked to supply
            certain information relevant to your Purchase including, without
            limitation, your credit card number, the expiration date of your
            credit card, your billing address, and your shipping information.
          </p>
          <p>
            2.2. You represent and warrant that:
            <br />
            (i) you have the legal right to use any credit card(s) or other
            payment method(s) in connection with any;
            <br />
            (ii) the information you supply to us is true, correct, and
            complete.
          </p>
          <p>
            2.3. By submitting such information, you grant us the right to
            provide the information to third parties for purposes of
            facilitating the completion of Purchases.
          </p>
          <Subtitle>3. Content</Subtitle>
          <p>
            3.1. Our Service allows you to post, link, store, share, and
            otherwise make available certain information, text, graphics or
            videos. You are responsible for the Content that you post on or
            through the Service, including its legality, reliability, and
            appropriateness.
          </p>
          <p>
            3.2. By posting Content on or through the Service, you represent and
            warrant that:
            <br />
            (i) the Content is yours (you own it) and/or you have the right to
            use it and the right to grant us the rights and license as provided
            in these Terms;
            <br />
            (ii) and that the posting of your Content on or through the Service
            does not violate the privacy rights, publicity rights, copyrights,
            contract rights, or any other rights of any person or entity.
          </p>
          <Subtitle>4. Modifications to the Service and Prices</Subtitle>
          <p>
            4.1. We reserve the right to modify or discontinue the Service (or
            any part or content thereof) without notice at any time.
          </p>
          <p>
            4.2. We shall not be liable to you or to any third-party for any
            modification, price change, suspension, or discontinuance of the
            Service.
          </p>
          <Subtitle>5. Governing Law</Subtitle>
          <p>
            5.1. These Terms shall be governed and construed in accordance with
            the laws of Canada, without regard to its conflict of law
            provisions.
          </p>
          <Subtitle>6. Changes</Subtitle>
          <p>
            6.1. We reserve the right, at our sole discretion, to modify or
            replace these terms at any time. If a revision is material, we will
            try to provide at least 30 days' notice prior to any new terms
            taking effect. What constitutes a material change will be determined
            at our sole discretion.
          </p>
          <Subtitle>7. Contact Us</Subtitle>
          <p>
            7.1. If you have any questions about these terms, please contact us
            by <Link to={"/contact"}>clicking here</Link>
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these terms.
          </p>
        </TermsText>
      </Section>

      <TopButton />
      <Footer />
    </>
  );
};

const Tagline = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-style: italic;
`;

const Section = styled.section`
  margin: 3rem 8rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--nav-bar-color);

  p {
    line-height: 1.75;
  }
`;

const SectionTitle = styled.h1`
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Question = styled.h3`
  font-weight: bold;
  font-style: italic;
  margin: 0.5rem 0;
  padding-left: 1rem;

  &:first-of-type {
    margin-top: 2rem;
  }
`;

const Answer = styled.p`
  padding-left: 1rem;
  margin-bottom: 2rem;
`;

const TermsText = styled.div`
  p {
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.h3`
  font-weight: bold;
  margin: 3rem 0 1rem 0;
`;


const ConfirmationMsg = styled.p`
  font-weight: bold;
  margin: 0 60px 0 60px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

export default About;
