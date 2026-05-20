const smurfRows = [
  { text: '             _____________', className: 'text-brandRed' },
  { text: "         .-''             ``-.", className: 'text-brandRed' },
  { text: '       .\'       .-""""-.      `.', className: 'text-brandRed' },
  { text: "      /       .'        `.       \\", className: 'text-brandRed' },
  { text: '     /       /            \\       \\', className: 'text-brandRed' },
  { text: '    |       /    .----.    \\       |', className: 'text-brandRed' },
  { text: '    |      |    / .--. \\    |      |', className: 'text-brandRed' },
  { text: '     \\     |   /_/    \\_\\   |     /', className: 'text-brandRed' },
  { text: "      '.   |    _  __  _    |   .'", className: 'text-brandBlue' },
  { text: "        '-.|   (o)(o)      |.-'", className: 'text-brandBlue' },
  { text: '           |      __        |', className: 'text-brandBlue' },
  { text: "       ____\\    '.__.'    /____", className: 'text-white' },
  { text: "    .-'     '-.        .-'     '-.", className: 'text-white' },
  { text: "   /   .--.    '------'    .--.   \\", className: 'text-white' },
  { text: '  |   /    \\    .-""-.    /    \\   |', className: 'text-white' },
  { text: "   \\  \\_.-' '--'      '--' '-._/  /", className: 'text-white' },
  { text: "    '-.        .------.        .-'", className: 'text-brandBlue' },
  { text: '       \\      /  .--.  \\      /', className: 'text-brandBlue' },
  { text: '        |    |  /    \\  |    |', className: 'text-brandBlue' },
  { text: '        |    |  \\____/  |    |', className: 'text-brandRed' },
  { text: '       /____/          \\____\\', className: 'text-brandRed' },
  { text: '      (_/                  \\_)', className: 'text-brandRed' },
];

const SmurfAscii = () => {
  return (
    <section
      aria-labelledby="smurf-ascii-heading"
      className="mx-auto w-full max-w-full overflow-hidden px-6 py-12 md:container md:py-20"
    >
      <h2 id="smurf-ascii-heading" className="sr-only">
        ASCII art Smurf
      </h2>
      <div className="flex justify-center">
        <pre
          aria-hidden="true"
          className="max-w-full overflow-x-auto whitespace-pre font-mono text-[clamp(0.55rem,2.4vw,1rem)] leading-[1.05] tracking-normal"
        >
          {smurfRows.map((row) => (
            <span key={row.text} className={`block ${row.className}`}>
              {row.text}
            </span>
          ))}
        </pre>
      </div>
    </section>
  );
};

export default SmurfAscii;
