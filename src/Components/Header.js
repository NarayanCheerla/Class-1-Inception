import Navbar from "./Navbar";

const Title = () => {
  return (
    <div className="header">
      <img
        width="100"
        height="100"
        alt="logo"
        src="https://scontent.ftir1-2.fna.fbcdn.net/v/t39.30808-1/302275887_487537640050648_5998956273504369200_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=c6021c&_nc_ohc=bdZlLcWXXiAAX9lVCkF&_nc_ht=scontent.ftir1-2.fna&oh=00_AfCjDadYVmFM0w5bZDdmrKwo0iAclEKrng708-QazfOzpA&oe=63E9F46C"
      />
      <Navbar />
    </div>
  );
};

export default Title;
