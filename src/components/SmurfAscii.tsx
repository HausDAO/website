const smurfArt = String.raw`
        .-""""-.
      .'  _  _  '.
     /   (o)(o)   \
    |       __      |
    |    .-'  '-.   |
     \  /  .--.  \ /
      '._\ '--' /_.'
        /'-.  .-'\
       /    \/    \
      |  .-====-.  |
      |  |  ||  |  |
      |  |__||__|  |
       \   /  \   /
        '-'    '-'
         little smurf
`;

const SmurfAscii = () => {
  return (
    <section
      aria-labelledby="smurf-ascii-heading"
      className="mx-auto w-full max-w-full overflow-hidden px-6 py-12 text-brandGreen md:container md:py-20"
    >
      <h2 id="smurf-ascii-heading" className="sr-only">
        ASCII art Smurf
      </h2>
      <div className="flex justify-center">
        <pre
          aria-hidden="true"
          className="max-w-full overflow-x-auto whitespace-pre font-mono text-[clamp(0.55rem,2.4vw,1rem)] leading-[1.05] tracking-normal"
        >
          {smurfArt}
        </pre>
      </div>
    </section>
  );
};

export default SmurfAscii;
