import Testimonial from './Testimonial';
import bgAurora from '../assets/bg_aurora.png';

const testimonialData = [
  {
    title: 'Protocol Guild',
    description:
      'Consisting of core Ethereum developers, Protocol Guild prioritizes minimal governance in member engagement.',
    buttonText: 'Read More',
    href: 'https://protocol-guild.readthedocs.io/',
  },
  {
    title: 'Gitcoin FDD',
    description:
      'As a sub-group within Gitcoin, the Fraud Detection team allows for active and inactive status that adjusts individual voting power.',
    buttonText: 'Read More',
    href: 'https://www.gitcoin.co/',
  },
  {
    title: 'Raid Brood',
    description:
      'NFTs are rewards for purchasing beer and then staked for membership into a DAO that collectively owns products.',
    buttonText: 'Read More',
    href: 'https://brood.raidguild.org/',
  },
];

const Testimonials = () => {
  return (
    <section className="-mt-96 h-full">
      <div className="static">
        <img src={bgAurora} alt="Pixelated aurora borealis" />
      </div>
      <div className="bg-brandBlue px-4 md:-mt-0">
        <h2 className="text-center font-heading text-2xl uppercase text-white">DAOHaus</h2>
        <h3 className="mb-12 text-center font-heading text-4xl uppercase text-white">
          In the Wild
        </h3>
        <div className="mx-auto flex h-full max-w-3xl flex-col space-y-4 pb-12">
          {testimonialData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
