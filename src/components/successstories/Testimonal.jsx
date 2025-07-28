export default function Testimonial() {
  return (
    <div className="bg-gray-light text-center mt-26  util-flex util-flex-1 util-mx-1-5 ">
      <div className="  mx-0 sm:mx-30 ">
        <img
          src="/images/assets/quote1.png"
          alt="opening quote"
          className="quote-img-open "
        />
        <div className="quote-text-wrapper">
          <p className="quote-text">
            TransExpert has been an exceptional partner to work with. Not only
            have they brought forward strategic solutions, but have allowed us
            to manage our business with peace-of-mind and strive towards our
            value of delivering on Commitment and Customer Focus.
          </p>
        </div>
        <div className="author-name mt-6 ">Sheryl Sandberg</div>
        <div className="author-title">
          Vice President &nbsp; /&nbsp; TransExpert
        </div>
        <img
          src="/images/assets/quote2.png"
          alt="closing quote"
          className="quote-img-close"
        />
      </div>
    </div>
  );
}
