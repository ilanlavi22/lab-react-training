const Greetings = ({ lang, children }) => {
  const greet = () => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div className="greetings">
      <span>
        {greet()} {children}
      </span>
    </div>
  );
};

export default Greetings;