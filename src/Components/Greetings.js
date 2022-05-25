const Greetings = ({ lang, children }) => {

  /*
  As a Function
  */
  // const greeting = () => {
  //   switch (lang) {
  //     case 'de':
  //       return 'Hallo';
  //     case 'fr':
  //       return 'Bonjour';
  //     default:
  //       return 'Hello';
  //   }
  // };

  let greeting;

  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
  }

  return (
    <div className="greetings">
      <span>
        {/* as a function {greeting()} {children} */}
        {greeting} {children}
      </span>
    </div>
  );
};

export default Greetings;