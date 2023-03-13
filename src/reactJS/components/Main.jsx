function Main(props) {
  return (
    <div className="allDivs">
      <div className="sideDiv">
        <form>
          <button>Search for places</button>
          <img src={props.image} alt="" />
        </form>
      </div>
    </div>
  );
}
export default Main;
