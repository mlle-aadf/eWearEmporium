import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
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
      <br />
      <br />
      <main>
        <div className="about-section">
          <br />
          <br />
          <div className="about-text">
            <h1
              style={{
                textDecoration: "underline",
                textAlign: "center",
                fontSize: "50px",
              }}
            >
              About Us
            </h1>
            <br />
            <p>
              Founded in Montreal, Quebec in 1978, at <b>E-Wear Emporium</b>,
              our brand was built on authenticity in order to provide the best
              possible service to our clients. We specialize in the sale of
              athletic sportswear for any gender and age group. We pride
              ourselves in our professionalism and courtesy to assist our
              customers so that they can benefit from nothing but the best
              service available.
            </p>
            <br />
            <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
              <i>Empower Your Everyday with Wearable Technology.</i>
            </h3>
            <br />
            <p>
              The purpose of E-Wear Emporium is to deliver products that improve
              the lives of our customer, because a healthy body is a happy mind.
            </p>
            <br />
            <p>
              You can trust us to deliver your favorite items, right at your
              doorstep at the press of a button. Thanks to quick shipping and a
              reliable customer service, shopping has never been made easier.
            </p>
          </div>
          <br />
          <br />
        </div>
        <div className="other-section">
          <div className="faq-section">
            <H2>FAQs - Frequently Asked Questions</H2>
            <br />
            <p className="question">
              Q: What is E-Wear Emporium's return policy?
            </p>
            <p className="answer">
              A: You will have up to 30 days to return elligible products.
            </p>
            <br />
            <br />
            <p className="question">Q: How can I return my order?</p>
            <p className="answer">
              A: Your item must be in original condition (tags attached, unworn,
              unwashed, unopened) and within 30 calendar days of purchase.
              Please check the bottom of your receipt for more details about our
              In-Store Return Policy.
            </p>
            <br />
            <br />
            <p className="question">
              Q: How can I get in touch with you if I have a question?
            </p>
            <p className="answer">
              A: Please click the "Contact" button. It will redirect you to a
              specific page where you may get more information on how to reach
              us.
            </p>
            <br />
            <br />
            <p className="question">
              Q: How can I subscribe to get all the latest news and promotional
              deals from E-Wear Emporium?
            </p>
            <p className="answer">A: Simply enter your email address below!</p>
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
                  Thank you for subscribing! You will receive an email
                  confirmation to {subEmail}.
                </ConfirmationMsg>
              </>
            )}
          </div>
          <br />
          <br />
          <div className="tos-section">
            <H2>Terms of Service</H2>
            <br />
            <div className="tos-text">
              <p>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users, and others who access or use the
                Service.
                <br />
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms, then you may
                not access the Service.
                <br />
                <br />
                <Bold>1. Accounts</Bold>
                <br />
                1.1. When you create an account with us, you must provide
                accurate, complete, and up-to-date information. Failure to do so
                constitutes a breach of the Terms, which may result in immediate
                termination of your account on our Service.
                <br />
                <br />
                1.2. You are responsible for safeguarding the password that you
                use to access the Service and for any activities or actions
                under your password, whether your password is with our Service
                or a third-party service.
                <br />
                <br />
                1.3. You agree not to disclose your password to any third party.
                You must notify us immediately upon becoming aware of any breach
                of security or unauthorized use of your account.
                <br />
                <br />
                <Bold>2. Purchases</Bold>
                <br />
                2.1. If you wish to purchase any product, you may be asked to
                supply certain information relevant to your Purchase including,
                without limitation, your credit card number, the expiration date
                of your credit card, your billing address, and your shipping
                information.
                <br />
                <br />
                2.2. You represent and warrant that:
                <br />
                (i) you have the legal right to use any credit card(s) or other
                payment method(s) in connection with any;
                <br />
                (ii) the information you supply to us is true, correct, and
                complete.
                <br />
                <br />
                2.3. By submitting such information, you grant us the right to
                provide the information to third parties for purposes of
                facilitating the completion of Purchases.
                <br />
                <br />
                <Bold>3. Content</Bold>
                <br />
                3.1. Our Service allows you to post, link, store, share, and
                otherwise make available certain information, text, graphics or
                videos. You are responsible for the Content that you post on or
                through the Service, including its legality, reliability, and
                appropriateness.
                <br />
                <br />
                3.2. By posting Content on or through the Service, you represent
                and warrant that:
                <br />
                (i) the Content is yours (you own it) and/or you have the right
                to use it and the right to grant us the rights and license as
                provided in these Terms;
                <br />
                (ii) and that the posting of your Content on or through the
                Service does not violate the privacy rights, publicity rights,
                copyrights, contract rights, or any other rights of any person
                or entity.
                <br />
                <br />
                <Bold>4. Modifications to the Service and Prices</Bold>
                <br />
                4.1. We reserve the right to modify or discontinue the Service
                (or any part or content thereof) without notice at any time.
                <br />
                <br />
                4.2. We shall not be liable to you or to any third-party for any
                modification, price change, suspension, or discontinuance of the
                Service.
                <br />
                <br />
                <Bold>5. Governing Law</Bold>
                <br />
                5.1. These Terms shall be governed and construed in accordance
                with the laws of Canada, without regard to its conflict of law
                provisions.
                <br />
                <br />
                <Bold>6. Changes</Bold>
                <br />
                6.1. We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
                <br />
                <br />
                <Bold>7. Contact Us</Bold>
                <br />
                7.1. If you have any questions about these Terms, please contact
                us by <Link to={"/contact"}>clicking here</Link>
                <br />
                <br />
                By accessing or using the Service, you agree to be bound by
                these Terms.
              </p>
            </div>
          </div>
        </div>
      </main>
      <TopButton />
      <Footer />
    </>
  );
};

const Bold = styled.h3`
  font-weight: bold;
`;
const H2 = styled.h2`
  text-decoration: underline;
  text-align: center;
  font-weight: bold;
`;
const ConfirmationMsg = styled.p`
  font-weight: bold;
  margin: 0 60px 0 60px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

export default About;
