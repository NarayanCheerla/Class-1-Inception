import { useState } from "react";

const Section = ({ title, desction, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h1>{title}</h1>
      {isVisible ? (
        <>
          {" "}
          <button
            className="cursor-pointer underline"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
          <p>{desction}</p>
        </>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState(0);
  const sections = [
    {
      title: "About",
      desction: "This is sample desction of About section",
    },
    {
      title: "Teams",
      desction: "This is sample desction of Teams section",
    },
    {
      title: "Careers",
      desction: "This is sample desction of Careers section",
    },
    {
      title: "Products",
      desction: "This is sample desction of Products section",
    },
  ];
  return (
    <div>
      <div className="font-bold text-3xl">Instamart Componets</div>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          desction={section.desction}
          isVisible={visibleSection === index}
          setIsVisible={(status) =>
            status ? setVisibleSection(index) : setVisibleSection(-1)
          }
        />
      ))}
    </div>
  );
};

export default Instamart;
