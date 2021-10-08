import leaves from '../leaves.jpg';
// import leaves_very_small from '../leaves_very_small_371x512.jpg';

const PictureSection = () => {
  return (
    <section className="picture-section">
      <img className="picture" src={leaves} alt="leaves" />
      <div className="quote-wrapper">
        <q className="quote">Save the planet...Buy organic</q>
        <span>- Nancy Philips</span>
      </div>
    </section>
  );
};

export default PictureSection;
