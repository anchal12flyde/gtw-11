export default function ChallengeSection() {
  return (
     <section className="challenge-section  util-flex util-flex-1 util-mx-1-5">
  <div className="challenge-container">
    <div className="challenge-image">
      <img src="/images/assets/img4.png" alt="People abstract image" />
    </div>
    <div className="challenge-content">
      <span className="heading-systems">
        The Challenge <span className="text-[#FFB100]">We Solve</span>
      </span>
      <p className="challenge-subtitle">
        Your business isn’t broken. But the way it runs might be.
      </p>
      <ul className="challenge-list">
        <li><span className="number">01</span> Manual, error-prone operations</li>
        <li><span className="number">02</span> Legacy tools duct-taped together</li>
        <li><span className="number">03</span> Teams stuck between apps and spreadsheets</li>
        <li><span className="number">04</span> No central system of record or clarity</li>
      </ul>
      <div className="cta-box">
        <strong>GTW Consult Exists To Fix This.</strong>
        <a href="#" class="cta-link">
        Contact Us
        <img src="/images/assets/Arrow 1.png" alt="arrow" />
      </a>
      </div>
    </div>
  </div>
</section>



  );
}
