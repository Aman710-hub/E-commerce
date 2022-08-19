import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="img" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            saepe vero cum accusantium, dolores ad! Atque dolore unde debitis
            delectus, explicabo magni corporis obcaecati consequuntur eaque
            fugiat consectetur cum exercitationem accusantium molestiae
            voluptate aspernatur quam, ducimus impedit ad! Placeat adipisci
            animi sequi dicta eos veniam libero, suscipit aliquam inventore
            maiores? voluptate aspernatur quam, ducimus impedit ad! Placeat
            adipisci animi sequi dicta eos veniam libero, suscipit aliquam
            inventore maiores? maiores? voluptate aspernatur quam, ducimus
            impedit ad! Placeat adipisci animi sequi dicta eos veniam libero,
            suscipit aliquam inventore maiores?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
