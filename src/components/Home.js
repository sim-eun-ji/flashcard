import "./Home.css";

const Home = ({categories, onSelected, onChangeMode}) => {
  return (
    <div className="home">
      <h1>플래시카드로 공부하며<br />하루를 시작해 보아요</h1>
      {/* button으로 name값을 만들어주기 */}
      <div className="btn">
        {
          categories.map((obj,idx)=>{
            return <button
                      key={idx}
                      onClick={()=>{ onSelected(obj) }}
                      >{obj.name}</button>
        })
        }
      </div>
    </div>
  );
};

export default Home;