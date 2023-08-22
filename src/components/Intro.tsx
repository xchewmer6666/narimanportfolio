const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-12">
      <h1 className="md:text-3xl mb-1 md:mb-3 font-bold">Nariman</h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm an indie full-stack developer, building my version of the digital
        world one step at a time. All coding projects are built from the ground
        up, from planning and designing all the way to solving real-life
        problems with code.
        <br />
        my github account:&nbsp;
        <a
          href="https://github.com/xchewmer6666"
          target="_blank"
          rel="noreferer noopener"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        >
          github
        </a>
      </p>
    </div>
  );
};

export default Intro;
