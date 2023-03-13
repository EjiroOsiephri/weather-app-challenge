import Logo from "../reactJS/components/images/shower.png";
function Form(props) {
  return (
    <div>
      <div className="sideDiv">
        <form>
          <button>Search for places</button>
          <img src={Logo} />
        </form>
      </div>
    </div>
  );
}
export default Form;
