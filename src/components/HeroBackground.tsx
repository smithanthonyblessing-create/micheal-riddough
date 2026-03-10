const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Abstract diagonal lines */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(40 55% 52%)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="hsl(40 60% 70%)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {/* Diagonal lines at various angles */}
      <line x1="0" y1="100%" x2="60%" y2="0" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="20%" y1="100%" x2="80%" y2="0" stroke="url(#lineGrad)" strokeWidth="0.8" />
      <line x1="40%" y1="100%" x2="100%" y2="0" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="60%" y1="100%" x2="100%" y2="20%" stroke="url(#lineGrad)" strokeWidth="0.6" />
      <line x1="0" y1="80%" x2="40%" y2="0" stroke="url(#lineGrad)" strokeWidth="0.7" />
      <line x1="10%" y1="0" x2="90%" y2="100%" stroke="url(#lineGrad)" strokeWidth="0.5" />
      <line x1="50%" y1="0" x2="100%" y2="70%" stroke="url(#lineGrad)" strokeWidth="0.6" />
      <line x1="0" y1="30%" x2="100%" y2="60%" stroke="url(#lineGrad)" strokeWidth="0.5" />
    </svg>
    {/* Bokeh / soft light spots */}
    <div className="absolute top-[10%] right-[15%] w-32 h-32 rounded-full bg-gold/5 blur-3xl" />
    <div className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full bg-gold/4 blur-[60px]" />
    <div className="absolute top-[40%] right-[40%] w-24 h-24 rounded-full bg-gold/6 blur-2xl" />
    <div className="absolute bottom-[10%] right-[25%] w-20 h-20 rounded-full bg-gold-light/5 blur-2xl" />
    <div className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full bg-gold/3 blur-xl" />
  </div>
);

export default HeroBackground;
